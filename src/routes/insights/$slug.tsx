import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { getArticleBySlug, getRelatedArticles, type ArticleSection } from "@/lib/articles";
import { FadeUp, SlideLeft, StaggerContainer, StaggerItem } from "@/components/Motion";

export const Route = createFileRoute("/insights/$slug")({
  head: ({ params }) => {
    const article = getArticleBySlug(params.slug);
    if (!article) return { meta: [{ title: "Article Not Found — PLC Optimization" }] };

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.metaDescription,
      datePublished: article.publishedAt,
      dateModified: article.publishedAt,
      author: {
        "@type": "Organization",
        name: "PLC Optimization LLC",
        url: "https://plcoptimization.com",
      },
      publisher: {
        "@type": "Organization",
        name: "PLC Optimization LLC",
        url: "https://plcoptimization.com",
        logo: {
          "@type": "ImageObject",
          url: "https://plcoptimization.com/favicon.svg",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://plcoptimization.com/insights/${article.slug}`,
      },
      keywords: [article.category, "wellness", "sports performance", "longevity", "nutrition", "PLC Optimization"],
      articleSection: article.category,
    };

    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://plcoptimization.com" },
        { "@type": "ListItem", position: 2, name: "Insights", item: "https://plcoptimization.com/insights" },
        { "@type": "ListItem", position: 3, name: article.title, item: `https://plcoptimization.com/insights/${article.slug}` },
      ],
    };

    return {
      meta: [
        { title: article.metaTitle },
        { name: "description", content: article.metaDescription },
        { property: "og:title", content: article.metaTitle },
        { property: "og:description", content: article.metaDescription },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: article.publishedAt },
        { property: "article:section", content: article.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: article.metaTitle },
        { name: "twitter:description", content: article.metaDescription },
      ],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(structuredData) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbData) },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-xs uppercase tracking-[0.3em] text-electric-glow mb-3">404</p>
        <h1 className="text-4xl font-display">Article Not Found</h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">This article doesn't exist or has been moved.</p>
        <Link to="/insights/" className="mt-8 inline-flex btn-electric">Back to Insights</Link>
      </div>
    </div>
  ),
});

function SectionBlock({ section }: { section: ArticleSection }) {
  switch (section.type) {
    case "heading":
      if (section.level === 2) {
        return (
          <h2 className="mt-12 mb-5 text-3xl md:text-4xl font-display text-foreground leading-snug">
            {section.text}
          </h2>
        );
      }
      return (
        <h3 className="mt-8 mb-3 text-xl md:text-2xl font-display text-foreground">
          {section.text}
        </h3>
      );

    case "paragraph":
      return (
        <p className="text-base text-muted-foreground leading-[1.85] mb-5">
          {section.text}
        </p>
      );

    case "list":
      return (
        <ul className="my-6 space-y-3" aria-label="Key points">
          {section.items.map((item, i) => {
            const [bold, ...rest] = item.split(":");
            const hasColon = item.includes(":") && rest.length > 0;
            return (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="glow-dot mt-2" aria-hidden="true" />
                <span>
                  {hasColon ? (
                    <>
                      <strong className="text-foreground font-medium">{bold}:</strong>
                      {rest.join(":")}
                    </>
                  ) : (
                    item
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      );

    case "callout":
      return (
        <aside
          className="my-8 surface-glass rounded-2xl border-l-2 border-electric p-7 relative overflow-hidden"
          aria-label="Key insight"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(135deg, oklch(0.66 0.22 250 / 0.06), transparent 70%)" }}
            aria-hidden="true"
          />
          <p className="relative text-sm text-foreground leading-relaxed font-medium">{section.text}</p>
        </aside>
      );

    case "divider":
      return <div className="hairline my-10" aria-hidden="true" />;

    default:
      return null;
  }
}

function ArticlePage() {
  const { slug } = Route.useParams();
  const article = getArticleBySlug(slug);

  if (!article) throw notFound();

  const related = getRelatedArticles(article.relatedSlugs);

  return (
    <div>
      {/* ── BREADCRUMB ── */}
      <div className="container-page pt-8 pb-2">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/50">
            <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/insights/" className="hover:text-foreground transition-colors">Insights</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-muted-foreground/30 truncate max-w-[200px]" aria-current="page">{article.category}</li>
          </ol>
        </nav>
      </div>

      {/* ── HERO ── */}
      <header className="container-page pt-6 pb-12" aria-labelledby="article-title">
        <FadeUp>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[9px] uppercase tracking-[0.28em] font-medium bg-electric/[0.10] border border-electric/[0.20] text-electric-glow">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/55">
                <Clock size={11} aria-hidden="true" /> {article.readingTime}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
                {article.publishedAtDisplay}
              </span>
            </div>

            <h1 id="article-title" className="text-4xl md:text-6xl lg:text-7xl font-display leading-[1.04] tracking-[-0.02em]">
              {article.title}
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {article.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-electric/[0.12] border border-electric/[0.20] flex items-center justify-center" aria-hidden="true">
                  <span className="text-[9px] font-medium text-electric-glow">P</span>
                </div>
                <span className="text-xs text-muted-foreground">PLC Optimization Editorial</span>
              </div>
            </div>
          </div>
        </FadeUp>
      </header>

      {/* ── CONTENT + SIDEBAR ── */}
      <div className="container-page pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 border-t border-white/[0.06] pt-12">
          {/* Article Body */}
          <article className="lg:col-span-8" aria-label="Article content">
            <FadeUp>
              {article.sections.map((section, i) => (
                <SectionBlock key={i} section={section} />
              ))}

              <div className="mt-14 hairline" />

              {/* Disclaimer */}
              <div className="mt-8 surface-glass rounded-xl p-6 border border-white/[0.07]" role="note" aria-label="Wellness disclaimer">
                <p className="text-[9px] uppercase tracking-[0.3em] text-silver mb-2">Wellness Notice</p>
                <p className="text-xs text-muted-foreground/70 leading-relaxed">
                  This article is for educational and informational purposes only. It does not constitute medical advice and is not intended to diagnose, treat, cure or prevent any disease or health condition. Always consult a qualified healthcare professional before beginning any new supplementation, exercise or nutrition program.
                </p>
              </div>

              {/* Navigation */}
              <div className="mt-10 flex items-center justify-between gap-4">
                <Link to="/insights/" className="inline-flex items-center gap-2 btn-ghost-light">
                  <ArrowLeft size={13} aria-hidden="true" /> All Articles
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 btn-electric">
                  Apply Knowledge <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>
            </FadeUp>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-5" aria-label="Article sidebar">
            <SlideLeft>
              {/* Key Takeaways */}
              <div className="surface-glass rounded-2xl p-7 border border-white/[0.09] sticky top-24">
                <p className="text-[9px] uppercase tracking-[0.35em] text-electric-glow mb-5">Key Takeaways</p>
                <ul className="space-y-3.5" aria-label="Article key takeaways">
                  {article.keyTakeaways.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="glow-dot mt-1.5" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="hairline my-6" />

                <div>
                  <p className="text-xs text-muted-foreground/60 leading-relaxed mb-4">
                    Ready to apply these principles to your specific situation?
                  </p>
                  <Link to="/coaching" className="btn-electric w-full justify-center !py-2.5 !text-[10px]">
                    Explore Coaching
                  </Link>
                </div>
              </div>
            </SlideLeft>
          </aside>
        </div>
      </div>

      {/* ── RELATED ARTICLES ── */}
      {related.length > 0 && (
        <section className="container-page pb-28" aria-labelledby="related-heading">
          <div className="border-t border-white/[0.06] pt-14">
            <FadeUp>
              <div className="flex items-center justify-between gap-6 mb-10">
                <div>
                  <span className="eyebrow">Continue Reading</span>
                  <h2 id="related-heading" className="mt-4 text-3xl md:text-4xl font-display">Related Articles</h2>
                </div>
                <Link to="/insights/" className="shrink-0 btn-ghost-light self-start">
                  All Articles
                </Link>
              </div>
            </FadeUp>

            <StaggerContainer className="grid md:grid-cols-3 gap-5">
              {related.map(a => (
                <StaggerItem key={a.slug}>
                  <Link
                    to="/insights/$slug"
                    params={{ slug: a.slug }}
                    className="group block surface-glass rounded-2xl p-7 border border-white/[0.07] card-hover h-full"
                    aria-label={`Read: ${a.title}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.24em] font-medium bg-electric/[0.08] border border-electric/[0.14] text-electric-glow">
                        {a.category}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-muted-foreground/50">
                        <Clock size={10} aria-hidden="true" /> {a.readingTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-display text-foreground group-hover:text-electric-glow transition-colors duration-300 leading-snug">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-2">{a.excerpt}</p>
                    <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-[10px] text-muted-foreground/50">{a.publishedAtDisplay}</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-electric-glow inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
                        Read <ArrowRight size={10} aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </div>
  );
}
