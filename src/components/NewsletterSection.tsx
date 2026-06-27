import { useState, useId } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { FadeUp } from "@/components/Motion";

type FormStatus = "idle" | "loading" | "success" | "error";

const BENEFITS = [
  "Evidence-based wellness education",
  "Sports performance strategies",
  "Longevity and healthy aging insights",
  "Nutrition and supplementation articles",
  "Company updates and new content",
];

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const emailId = useId();
  const consentId = useId();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      setErrorMsg("Please confirm your consent to continue.");
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      /*
       * ── INTEGRATION HOOK ──────────────────────────────────────────────
       * Replace the block below with your chosen provider:
       *
       * MAILCHIMP (via server-side proxy to avoid CORS + expose API key):
       *   POST /api/newsletter  { email, tags: ["website-signup"] }
       *   Your server calls: POST https://<dc>.api.mailchimp.com/3.0/lists/<list_id>/members
       *
       * CONVERTKIT:
       *   POST https://api.convertkit.com/v3/forms/<form_id>/subscribe
       *   Body: { api_key, email, first_name?, tags? }
       *
       * BREVO (Sendinblue):
       *   POST https://api.brevo.com/v3/contacts
       *   Headers: { "api-key": BREVO_API_KEY }
       *   Body: { email, listIds: [<list_id>], updateEnabled: false }
       *
       * All providers support double opt-in — enable it in your provider dashboard.
       * The confirmation email is sent by the provider automatically after this call.
       * ─────────────────────────────────────────────────────────────────
       */

      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent: true, source: "website" }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message ?? "Subscription failed. Please try again.");
      }

      setStatus("success");
      setEmail("");
      setConsent(false);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMsg(message);
      setStatus("error");
    }
  }

  return (
    <section
      className="py-28 border-y border-white/[0.06] relative overflow-hidden"
      aria-labelledby="newsletter-heading"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-electric/[0.04] blur-[110px]" />
      </div>

      <div className="container-page relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── LEFT: copy ── */}
          <FadeUp>
            <span className="eyebrow">PLC Optimization Insights</span>
            <h2
              id="newsletter-heading"
              className="mt-6 text-4xl md:text-5xl lg:text-[56px] leading-[1.04] tracking-[-0.02em]"
            >
              Join the PLC Optimization{" "}
              <span className="text-gradient-electric">Insights</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              Periodic dispatches covering evidence-based wellness education, performance strategies, longevity research and nutrition science — written without marketing language.
            </p>

            <ul className="mt-8 space-y-3" aria-label="What you receive">
              {BENEFITS.map(b => (
                <li key={b} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="glow-dot shrink-0" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-white/[0.06]">
              <p className="text-[10px] uppercase tracking-[0.28em] text-electric-glow mb-2">Privacy Commitment</p>
              <p className="text-xs text-muted-foreground/70 leading-relaxed max-w-sm">
                We never sell or share subscriber data. You will receive a confirmation email to verify your address before any content is sent. You may unsubscribe at any time with a single click.
              </p>
            </div>
          </FadeUp>

          {/* ── RIGHT: form ── */}
          <FadeUp>
            <div className="surface-glass rounded-3xl border border-white/[0.09] p-8 md:p-10 relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{ background: "radial-gradient(ellipse 80% 60% at top right, oklch(0.66 0.22 250 / 0.06), transparent 70%)" }}
                aria-hidden="true"
              />

              {status === "success" ? (
                /* ── Success state ── */
                <div className="relative text-center py-8">
                  <div
                    className="w-14 h-14 rounded-2xl bg-electric/[0.10] border border-electric/[0.20] flex items-center justify-center mx-auto mb-5"
                    aria-hidden="true"
                  >
                    <CheckCircle size={24} className="text-electric-glow" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-display mb-3">Check your inbox.</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    A confirmation email is on its way. Please click the link inside to complete your subscription.
                  </p>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.24em] text-electric-glow">
                    Double opt-in active
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors underline underline-offset-4 cursor-pointer"
                  >
                    Subscribe a different address
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Newsletter subscription form"
                  className="relative space-y-5"
                >
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.35em] text-electric-glow mb-1">Subscribe</p>
                    <h3 className="text-2xl font-display mb-1.5">Stay informed.</h3>
                    <p className="text-xs text-muted-foreground/70 leading-relaxed">
                      Thoughtful content, delivered periodically. No spam, ever.
                    </p>
                  </div>

                  <div className="hairline" />

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor={emailId}
                      className="block text-[10px] uppercase tracking-[0.24em] text-muted-foreground/70 mb-2"
                    >
                      Email Address <span aria-hidden="true" className="text-electric-glow">*</span>
                    </label>
                    <input
                      id={emailId}
                      type="email"
                      name="email"
                      value={email}
                      onChange={e => { setEmail(e.target.value); setErrorMsg(""); setStatus("idle"); }}
                      placeholder="you@example.com"
                      required
                      autoComplete="email"
                      className="w-full bg-white/[0.04] border border-white/[0.10] rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/35 focus:outline-none focus:border-electric/40 focus:ring-1 focus:ring-electric/20 transition-colors duration-200"
                      aria-required="true"
                      aria-invalid={status === "error" ? "true" : undefined}
                      aria-describedby={errorMsg ? "newsletter-error" : "newsletter-hint"}
                    />
                    <p id="newsletter-hint" className="mt-1.5 text-[10px] text-muted-foreground/40">
                      We will never share your address with third parties.
                    </p>
                  </div>

                  {/* GDPR consent */}
                  <div className="flex items-start gap-3">
                    <div className="relative mt-0.5 shrink-0">
                      <input
                        id={consentId}
                        type="checkbox"
                        name="consent"
                        checked={consent}
                        onChange={e => { setConsent(e.target.checked); setErrorMsg(""); }}
                        required
                        className="w-4 h-4 rounded border border-white/[0.15] bg-white/[0.04] accent-electric cursor-pointer focus:ring-2 focus:ring-electric/30 focus:ring-offset-0 focus:outline-none"
                        aria-required="true"
                        aria-describedby="consent-description"
                      />
                    </div>
                    <label htmlFor={consentId} className="text-xs text-muted-foreground/70 leading-relaxed cursor-pointer" id="consent-description">
                      I agree to receive educational wellness content from PLC Optimization. I understand I can unsubscribe at any time by clicking the unsubscribe link in any email. My data will be processed in accordance with the{" "}
                      <a href="/privacy" className="text-electric-glow hover:underline underline-offset-2 transition-colors">Privacy Policy</a>.{" "}
                      <span className="text-muted-foreground/50">(Required)</span>
                    </label>
                  </div>

                  {/* Error message */}
                  {errorMsg && (
                    <div
                      id="newsletter-error"
                      role="alert"
                      aria-live="polite"
                      className="flex items-start gap-2.5 bg-red-500/[0.07] border border-red-500/[0.18] rounded-xl px-4 py-3"
                    >
                      <AlertCircle size={14} className="text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-xs text-red-300/90 leading-relaxed">{errorMsg}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-electric w-full justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    aria-busy={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <span
                          className="w-3.5 h-3.5 rounded-full border-2 border-current border-t-transparent animate-spin"
                          aria-hidden="true"
                        />
                        Subscribing…
                      </>
                    ) : (
                      <>
                        Subscribe to Insights
                        <ArrowRight size={13} aria-hidden="true" />
                      </>
                    )}
                  </button>

                  {/* Double opt-in notice */}
                  <p className="text-center text-[10px] text-muted-foreground/45 leading-relaxed">
                    A confirmation link will be sent to your email address.{" "}
                    <span className="text-electric-glow/70">Double opt-in</span> ensures your consent is verified.
                  </p>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
