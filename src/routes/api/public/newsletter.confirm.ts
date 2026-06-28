import { createFileRoute, redirect } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";

export const Route = createFileRoute("/api/public/newsletter/confirm")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const supabaseUrl = process.env.SUPABASE_URL;
        const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        if (!supabaseUrl || !serviceKey) {
          return Response.json({ error: "Server configuration error" }, { status: 500 });
        }

        const url = new URL(request.url);
        const token = url.searchParams.get("token");
        if (!token) {
          throw redirect({ to: "/newsletter/confirmed", search: { status: "invalid" } });
        }

        const supabase = createClient(supabaseUrl, serviceKey, {
          auth: { persistSession: false, autoRefreshToken: false },
        });

        const { data: row, error: lookupError } = await supabase
          .from("newsletter_subscribers")
          .select("id, status")
          .eq("confirm_token", token)
          .maybeSingle();

        if (lookupError) {
          console.error("Newsletter confirm lookup failed", { error: lookupError });
          throw redirect({ to: "/newsletter/confirmed", search: { status: "error" } });
        }

        if (!row) {
          throw redirect({ to: "/newsletter/confirmed", search: { status: "invalid" } });
        }

        if (row.status === "confirmed") {
          throw redirect({ to: "/newsletter/confirmed", search: { status: "already" } });
        }

        const { error: updateError } = await supabase
          .from("newsletter_subscribers")
          .update({
            status: "confirmed",
            confirmed_at: new Date().toISOString(),
          })
          .eq("id", row.id);

        if (updateError) {
          console.error("Newsletter confirm update failed", { error: updateError });
          throw redirect({ to: "/newsletter/confirmed", search: { status: "error" } });
        }

        throw redirect({ to: "/newsletter/confirmed", search: { status: "success" } });
      },
    },
  },
});
