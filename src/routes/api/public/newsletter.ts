import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const SITE_NAME = "PLC Optimization";
const SENDER_DOMAIN = "notify.plcoptimization.com";
const FROM_DOMAIN = "plcoptimization.com";

const BodySchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  consent: z.literal(true),
  source: z.string().max(64).optional(),
});

function generateToken(): string {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function redact(email: string): string {
  const [l, d] = email.split("@");
  return l && d ? `${l[0]}***@${d}` : "***";
}

function buildConfirmationHtml(confirmUrl: string): string {
  return `<!doctype html><html><body style="margin:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#e8e8e8;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:48px 16px;">
  <tr><td align="center">
    <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#111;border:1px solid #1f1f1f;border-radius:16px;overflow:hidden;">
      <tr><td style="padding:40px 40px 24px;">
        <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.24em;text-transform:uppercase;color:#b89660;">PLC Optimization</p>
        <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;color:#ffffff;font-weight:500;">Please confirm your subscription</h1>
        <p style="margin:0 0 24px;font-size:14px;line-height:1.7;color:#bdbdbd;">
          Thank you for subscribing to PLC Optimization Insights. To complete your subscription and begin receiving evidence-based wellness, longevity, and performance content, please confirm your email address.
        </p>
        <p style="margin:0 0 32px;text-align:center;">
          <a href="${confirmUrl}" style="display:inline-block;background:#b89660;color:#0a0a0a;text-decoration:none;font-size:13px;font-weight:600;letter-spacing:0.06em;padding:14px 28px;border-radius:10px;">Confirm Subscription</a>
        </p>
        <p style="margin:0 0 8px;font-size:12px;color:#8a8a8a;line-height:1.6;">If the button does not work, copy and paste this link:</p>
        <p style="margin:0 0 24px;font-size:12px;color:#b89660;word-break:break-all;">${confirmUrl}</p>
        <hr style="border:none;border-top:1px solid #1f1f1f;margin:24px 0;">
        <p style="margin:0;font-size:11px;color:#6a6a6a;line-height:1.6;">
          You received this email because someone — hopefully you — entered this address on plcoptimization.com.
          If this was not you, simply ignore this message and no subscription will be created.
        </p>
      </td></tr>
      <tr><td style="padding:20px 40px;background:#0d0d0d;border-top:1px solid #1f1f1f;">
        <p style="margin:0;font-size:11px;color:#6a6a6a;text-align:center;">© ${new Date().getFullYear()} PLC Optimization LLC · U.S. Registered LLC</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

function buildConfirmationText(confirmUrl: string): string {
  return `PLC Optimization — Please confirm your subscription

Thank you for subscribing to PLC Optimization Insights.

To complete your subscription, confirm your email by visiting:
${confirmUrl}

If you did not request this, ignore this email and no subscription will be created.

© ${new Date().getFullYear()} PLC Optimization LLC`;
}

export const Route = createFileRoute("/api/public/newsletter")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabaseUrl = process.env.SUPABASE_URL;
        const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        if (!supabaseUrl || !serviceKey) {
          return Response.json({ message: "Server configuration error." }, { status: 500 });
        }

        let body: z.infer<typeof BodySchema>;
        try {
          const raw = await request.json();
          body = BodySchema.parse(raw);
        } catch {
          return Response.json(
            { message: "Please enter a valid email address and confirm your consent." },
            { status: 400 },
          );
        }

        const supabase = createClient(supabaseUrl, serviceKey, {
          auth: { persistSession: false, autoRefreshToken: false },
        });

        const email = body.email;

        // Check existing subscriber
        const { data: existing, error: lookupError } = await supabase
          .from("newsletter_subscribers")
          .select("id, status, confirm_token")
          .eq("email", email)
          .maybeSingle();

        if (lookupError) {
          console.error("Newsletter lookup failed", { error: lookupError });
          return Response.json({ message: "Something went wrong. Please try again." }, { status: 500 });
        }

        if (existing?.status === "confirmed") {
          return Response.json({
            success: true,
            alreadySubscribed: true,
            message: "You're already subscribed. Thank you.",
          });
        }

        // Reuse existing pending token, or create/refresh
        const confirmToken = existing?.confirm_token ?? generateToken();

        const upsert = await supabase
          .from("newsletter_subscribers")
          .upsert(
            {
              email,
              status: "pending",
              confirm_token: confirmToken,
              source: body.source ?? "website",
            },
            { onConflict: "email" },
          );

        if (upsert.error) {
          console.error("Newsletter upsert failed", { error: upsert.error });
          return Response.json({ message: "Something went wrong. Please try again." }, { status: 500 });
        }

        // Get or create a one-click unsubscribe token (required by Lovable Email API)
        let unsubscribeToken: string;
        const { data: existingUnsub } = await supabase
          .from("email_unsubscribe_tokens")
          .select("token, used_at")
          .eq("email", email)
          .maybeSingle();

        if (existingUnsub && !existingUnsub.used_at) {
          unsubscribeToken = existingUnsub.token;
        } else {
          unsubscribeToken = generateToken();
          await supabase
            .from("email_unsubscribe_tokens")
            .upsert(
              { email, token: unsubscribeToken },
              { onConflict: "email", ignoreDuplicates: true },
            );
          const { data: stored } = await supabase
            .from("email_unsubscribe_tokens")
            .select("token")
            .eq("email", email)
            .maybeSingle();
          if (stored?.token) unsubscribeToken = stored.token;
        }

        // Build confirmation URL from request origin
        const origin = new URL(request.url).origin;
        const confirmUrl = `${origin}/api/public/newsletter/confirm?token=${encodeURIComponent(confirmToken)}`;

        const messageId = crypto.randomUUID();
        const html = buildConfirmationHtml(confirmUrl);
        const text = buildConfirmationText(confirmUrl);

        // Log pending then enqueue
        await supabase.from("email_send_log").insert({
          message_id: messageId,
          template_name: "newsletter_confirmation",
          recipient_email: email,
          status: "pending",
        });

        const { error: enqueueError } = await supabase.rpc("enqueue_email", {
          queue_name: "transactional_emails",
          payload: {
            message_id: messageId,
            to: email,
            from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
            sender_domain: SENDER_DOMAIN,
            subject: "Confirm your PLC Optimization subscription",
            html,
            text,
            purpose: "transactional",
            label: "newsletter_confirmation",
            idempotency_key: messageId,
            unsubscribe_token: unsubscribeToken,
            queued_at: new Date().toISOString(),
          },
        });

        if (enqueueError) {
          console.error("Newsletter enqueue failed", {
            error: enqueueError,
            recipient: redact(email),
          });
          await supabase.from("email_send_log").insert({
            message_id: messageId,
            template_name: "newsletter_confirmation",
            recipient_email: email,
            status: "failed",
            error_message: "Failed to enqueue confirmation email",
          });
          return Response.json(
            { message: "We couldn't send your confirmation email. Please try again." },
            { status: 500 },
          );
        }

        console.log("Newsletter signup enqueued", { recipient: redact(email) });

        return Response.json({
          success: true,
          message: "Check your inbox to confirm your subscription.",
        });
      },
    },
  },
});
