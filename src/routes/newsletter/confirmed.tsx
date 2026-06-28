import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle, AlertCircle, Mail } from "lucide-react";
import { z } from "zod";

const SearchSchema = z.object({
  status: z.enum(["success", "already", "invalid", "error"]).optional().default("success"),
});

export const Route = createFileRoute("/newsletter/confirmed")({
  validateSearch: SearchSchema,
  head: () => ({
    meta: [
      { title: "Subscription Confirmed — PLC Optimization" },
      { name: "description", content: "Your PLC Optimization Insights subscription is confirmed." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: NewsletterConfirmed,
});

const COPY = {
  success: {
    icon: CheckCircle,
    eyebrow: "Subscription Confirmed",
    title: "You're in. Welcome to PLC Insights.",
    body:
      "Thank you for confirming your subscription. You will receive periodic, evidence-based dispatches on wellness, performance, longevity, and nutrition — written without marketing language.",
  },
  already: {
    icon: CheckCircle,
    eyebrow: "Already Subscribed",
    title: "You're already on the list.",
    body:
      "Your email address is already confirmed for PLC Optimization Insights. No further action is required.",
  },
  invalid: {
    icon: AlertCircle,
    eyebrow: "Invalid Link",
    title: "This confirmation link is no longer valid.",
    body:
      "The link may have expired or already been used. Please return to the website and subscribe again if needed.",
  },
  error: {
    icon: AlertCircle,
    eyebrow: "Confirmation Error",
    title: "We couldn't confirm your subscription.",
    body:
      "Something went wrong on our end. Please try again in a moment, or contact us at contact@plcoptimization.com.",
  },
} as const;

function NewsletterConfirmed() {
  const { status } = Route.useSearch();
  const state = COPY[status];
  const Icon = state.icon;

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-24">
      <div className="surface-glass max-w-xl w-full rounded-3xl border border-white/[0.09] p-10 md:p-14 text-center">
        <div
          className="w-16 h-16 rounded-2xl bg-electric/[0.10] border border-electric/[0.20] flex items-center justify-center mx-auto mb-7"
          aria-hidden="true"
        >
          <Icon size={28} className="text-electric-glow" strokeWidth={1.5} />
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-electric-glow mb-4">
          {state.eyebrow}
        </p>
        <h1 className="text-3xl md:text-4xl font-display leading-tight tracking-[-0.02em] mb-5">
          {state.title}
        </h1>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mx-auto mb-10">
          {state.body}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="btn-electric inline-flex items-center justify-center gap-2"
          >
            Return to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/[0.12] text-sm text-muted-foreground hover:text-foreground hover:border-white/[0.2] transition-colors"
          >
            <Mail size={14} aria-hidden="true" />
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
