import { ArrowUpRight } from "lucide-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

import appCss from "../styles.css?url";
import { reportError } from "../lib/error-reporting";
import { PLCLogo, PLC_LOGO_URL } from "../components/Logo";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PLC Optimization LLC",
  url: "https://plcoptimization.com",
  description: "Premium wellness brand specializing in sports performance coaching, longevity programs, nutrition guidance, authorized supplementation and cosmetic care.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@plcoptimization.com",
    contactType: "customer service",
    availableLanguage: "English",
  },
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.32em] text-electric-glow mb-4">404</p>
        <h1 className="text-5xl md:text-7xl font-display text-foreground">Not Found</h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-electric">Return Home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "root_error_boundary" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-display font-semibold tracking-tight text-foreground">
          Something went wrong
        </h1>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          An unexpected error occurred. Please try refreshing or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-electric">
            Try again
          </button>
          <a href="/" className="btn-ghost-light">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PLC Optimization — Premium Wellness. Elite Performance. Lasting Results." },
      {
        name: "description",
        content:
          "PLC Optimization LLC is a U.S.-registered premium wellness brand specializing in sports performance, longevity lifestyle, nutrition coaching, authorized supplementation and cosmetic care.",
      },
      { name: "author", content: "PLC Optimization LLC" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0a0c14" },
      { property: "og:title", content: "PLC Optimization — Premium Wellness. Elite Performance. Lasting Results." },
      {
        property: "og:description",
        content:
          "Premium wellness brand for individuals who take the long view on their health. Sports performance, longevity, nutrition coaching and authorized supplementation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "PLC Optimization" },
      { property: "og:image", content: PLC_LOGO_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PLC Optimization — Premium Wellness. Elite Performance. Lasting Results." },
      {
        name: "twitter:description",
        content: "Premium wellness brand for sports performance, longevity and lifestyle optimization. U.S. Registered LLC.",
      },
      { name: "twitter:image", content: PLC_LOGO_URL },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap",
      },
      { rel: "icon", type: "image/png", href: PLC_LOGO_URL },
      { rel: "apple-touch-icon", href: PLC_LOGO_URL },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(STRUCTURED_DATA),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:btn-electric"
        >
          Skip to main content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/coaching", label: "Coaching" },
  { to: "/insights/", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-background/88 border-b border-white/[0.06] shadow-[0_1px_40px_oklch(0_0_0/0.3)]"
          : ""
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className="flex items-center shrink-0"
          onClick={() => setOpen(false)}
          aria-label="PLC Optimization — Home"
        >
          <PLCLogo className="h-12 md:h-14 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Primary navigation">
          {NAV.map(n => (
            <Link
              key={n.to}
              to={n.to}
              className="relative text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors duration-300 py-1 group"
              activeProps={{ className: "relative text-[10.5px] uppercase tracking-[0.22em] text-foreground py-1 group" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-electric to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" className="btn-electric !py-2.5 !px-5 !text-[10px]">
            Book Consult
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(v => !v)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-full border border-white/15 hover:border-white/30 transition-colors"
        >
          <span className="flex flex-col gap-[5px] w-5" aria-hidden="true">
            <span className={`block h-px bg-foreground origin-center transition-all duration-300 ${open ? "translate-y-[8px] rotate-45" : ""}`} />
            <span className={`block h-px bg-foreground transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-px bg-foreground origin-center transition-all duration-300 ${open ? "-translate-y-[8px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden overflow-hidden border-t border-white/[0.07] bg-background/97 backdrop-blur-2xl"
          >
            <div className="container-page py-8 flex flex-col gap-1">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="block text-sm uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground py-3.5 border-b border-white/[0.05] transition-colors"
                    activeProps={{ className: "block text-sm uppercase tracking-[0.22em] text-foreground py-3.5 border-b border-white/[0.05]" }}
                    activeOptions={{ exact: n.to === "/" }}
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.3 }}
                className="pt-6"
              >
                <Link to="/contact" onClick={() => setOpen(false)} className="btn-electric w-full justify-center">
                  Book Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-background relative overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-electric/[0.03] blur-3xl" />
      </div>

      <div className="container-page py-20 relative">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <PLCLogo className="w-[260px] md:w-[300px] h-auto" />
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-xs">
              A U.S.-registered premium wellness brand built for individuals who take the long view on their health, performance and longevity.
            </p>
            <div className="mt-8">
              <a
                href="mailto:contact@plcoptimization.com"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-electric-glow transition-colors duration-200"
              >
                contact@plcoptimization.com
                <ArrowUpRight size={13} className="opacity-50" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-silver mb-6">Company</p>
            <nav aria-label="Footer company links">
              <ul className="space-y-3">
                {NAV.map(n => (
                  <li key={n.to}>
                    <Link
                      to={n.to}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      {n.label}
                      <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-50 transition-opacity -mt-0.5" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-silver mb-6">Legal</p>
            <nav aria-label="Footer legal links">
              <ul className="space-y-3">
                {[
                  { to: "/privacy", label: "Privacy Policy" },
                  { to: "/terms", label: "Terms & Conditions" },
                  { to: "/disclaimer", label: "Disclaimer" },
                ].map(l => (
                  <li key={l.to}>
                    <Link to={l.to as "/privacy"} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-silver mb-6">Contact</p>
            <address className="not-italic">
              <ul className="space-y-5">
                <li>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60 block mb-1">Location</span>
                  <span className="text-sm text-foreground">United States</span>
                </li>
                <li>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60 block mb-1">Email</span>
                  <a href="mailto:contact@plcoptimization.com" className="text-sm text-foreground hover:text-electric transition-colors duration-200">
                    contact@plcoptimization.com
                  </a>
                </li>
                <li>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60 block mb-1">Hours</span>
                  <span className="text-sm text-foreground">Mon – Fri · 9:00 AM – 6:00 PM ET</span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
            <p className="text-xs text-muted-foreground/50 leading-relaxed max-w-xl">
              <span className="text-silver/70">Wellness Notice.</span>{" "}
              Products and services are intended for general wellness and educational purposes only. They are not intended to diagnose, treat, cure, or prevent any disease. Always consult a qualified healthcare provider before beginning any new wellness program.
            </p>
            <p className="text-xs text-muted-foreground/35 shrink-0">
              © {new Date().getFullYear()} PLC Optimization LLC. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="main-content" className="pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
