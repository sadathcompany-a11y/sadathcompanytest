import { CheckCircle2, Globe, Palette, ShoppingBag, ShieldCheck, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { AnimatedText, FadeIn } from "@/components/AnimatedText";
import { Seo } from "@/components/Seo";

const tiers = [
  {
    label: "Custom Website",
    price: "From £400",
    note: "one-off project fee",
    features: [
      "Unlimited pages, individually designed",
      "Mobile-first responsive build",
      "Brand & design direction",
      "Basic SEO setup & analytics",
      "Domain configuration",
      "Free training on updating your site",
      "3 months of post-launch support",
    ],
  },
  {
    label: "E-Commerce / Advanced Site",
    price: "From £600",
    note: "one-off project fee",
    badge: "Most popular",
    features: [
      "Everything in Custom Website",
      "Stripe or Shopify storefront",
      "Products, checkout & subscriptions",
      "Inventory & order management",
      "Customer accounts",
      "Integrations with your existing tools",
    ],
  },
];

const highlights = [
  { icon: <Globe size={18} />, label: "Marketing & startup websites" },
  { icon: <ShoppingBag size={18} />, label: "Online stores & checkout" },
  { icon: <Palette size={18} />, label: "Brand & design overhauls" },
  { icon: <ShieldCheck size={18} />, label: "Optional managed hosting from £8/month" },
];

export default function Websites() {
  return (
    <SiteShell>
      <Seo
        title="Website Design Prices — Sadath Company"
        description="Custom websites from £400 and e-commerce builds from £600. Individually designed, mobile-first, with free training and 3 months of support."
        path="/websites"
      />
      <section className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.5em] uppercase opacity-40 mb-6 block">Websites</span>
          <AnimatedText
            as="h1"
            text="Websites that make small teams look established."
            className="font-serif text-4xl md:text-6xl leading-tight mb-8"
            italicFrom={4}
          />
          <FadeIn delay={0.15}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hand-built, fast and accessible sites — designed around your business, not a template.
              Websites start at <span className="text-foreground font-medium">£400</span>.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 md:px-12 mt-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.label} delay={i * 0.1}>
              <div className="relative h-full flex flex-col p-10 rounded-3xl border border-border bg-secondary/30 hover:border-foreground/20 transition-all">
                {tier.badge && (
                  <div className="absolute -top-3 left-10 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-emerald-500 text-white">
                    {tier.badge}
                  </div>
                )}
                <h2 className="font-serif text-2xl mb-4">{tier.label}</h2>
                <div className="mb-8">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {tier.note}
                  </span>
                </div>
                <ul className="space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-emerald-500" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/#contact"
                  className="mt-8 group flex items-center justify-center gap-2 w-full py-4 rounded-xl text-[10px] font-bold tracking-widest uppercase bg-primary text-primary-foreground hover:opacity-90 transition-all"
                >
                  Get a quote
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 mt-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <FadeIn key={h.label} delay={i * 0.06}>
              <div className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-card">
                <div className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                  {h.icon}
                </div>
                <span className="text-sm">{h.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="max-w-5xl mx-auto text-center text-sm text-muted-foreground mt-10">
          Every project is scoped individually — final pricing is confirmed in your Statement of Work
          after a discovery call. You own everything on completion.
        </p>
      </section>
    </SiteShell>
  );
}
