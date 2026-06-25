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

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-electric">Return Home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-electric"
          >
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
      { title: "PLC Optimization — Optimize Your Body. Elevate Your Life." },
      { name: "description", content: "Premium wellness optimization, healthy aging, sports performance, nutrition coaching, cosmetic care, and authorized supplements." },
      { name: "author", content: "PLC Optimization LLC" },
      { property: "og:title", content: "PLC Optimization — Optimize Your Body. Elevate Your Life." },
      { property: "og:description", content: "Luxury wellness brand for performance, longevity and lifestyle optimization." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
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
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-white/5" : ""}`}>
      <div className="container-page flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid place-items-center w-9 h-9 rounded-full" style={{ background: "var(--gradient-accent)" }}>
            <span className="font-display text-base font-semibold text-primary-foreground">P</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide">PLC Optimization</span>
            <span className="text-[10px] tracking-[0.32em] uppercase text-muted-foreground mt-1">Body · Performance · Longevity</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map(n => (
            <Link
              key={n.to}
              to={n.to}
              className="text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-xs uppercase tracking-[0.22em] text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden lg:inline-flex btn-electric !py-2.5 !px-5 !text-[10px]">Book Consult</Link>
        <button
          aria-label="Menu"
          onClick={() => setOpen(v => !v)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-full border border-white/15"
        >
          <span className="flex flex-col gap-1.5">
            <span className={`block h-px w-5 bg-foreground transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl">
          <div className="container-page py-6 flex flex-col gap-4">
            {NAV.map(n => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground py-1"
                activeProps={{ className: "text-sm uppercase tracking-[0.22em] text-foreground py-1" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-electric mt-2 self-start">Book Consult</Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-32 border-t border-white/5 bg-[oklch(0.10_0.01_240)]">
      <div className="container-page py-20 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-md">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-9 h-9 rounded-full" style={{ background: "var(--gradient-accent)" }}>
              <span className="font-display text-base font-semibold text-primary-foreground">P</span>
            </span>
            <span className="font-display text-lg">PLC Optimization LLC</span>
          </div>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
            A premium U.S.-based wellness brand dedicated to performance, healthy aging, and lifestyle optimization through coaching, nutrition guidance, and authorized supplementation.
          </p>
          <p className="mt-6 text-xs text-muted-foreground/80 leading-relaxed">
            <span className="text-silver">Disclaimer.</span> Products and services are intended for general wellness and lifestyle support only. They are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-silver mb-5">Explore</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {NAV.map(n => (
              <li key={n.to}><Link to={n.to} className="hover:text-foreground transition-colors">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-silver mb-5">Legal</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link></li>
          </ul>
          <p className="mt-8 text-xs text-muted-foreground/70">© {new Date().getFullYear()} PLC Optimization LLC.<br />All rights reserved.</p>
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
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
