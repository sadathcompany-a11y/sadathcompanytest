import { CheckCircle2, ShieldCheck, Gauge, LifeBuoy, RefreshCw, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { AnimatedText, FadeIn } from "@/components/AnimatedText";
import { Seo } from "@/components/Seo";

const plans = [
  {
    label: "4-Year Plan",
    headline: "£8",
    per: "/month",
    total: "£400 once, covers 4 full years",
    badge: "Save £100",
    highlight: true,
    features: [
      "4 years of managed hosting",
      "SSL, security patches & monitoring",
      "Daily backups & uptime checks",
      "Domain & DNS management",
      "Small content tweaks included",
      "One flat payment — no annual renewals",
    ],
  },
  {
    label: "Yearly Plan",
    headline: "£10",
    per: "/month",
    total: "£125 per year, renewed annually",
    features: [
      "12 months of managed hosting",
      "SSL, security patches & monitoring",
      "Daily backups & uptime checks",
      "Domain & DNS management",
      "Small content tweaks included",
      "Cancel or switch plans at renewal",
    ],
  },
];

const included = [
  { icon: <ShieldCheck size={18} />, label: "Security patching & SSL kept current" },
  { icon: <Gauge size={18} />, label: "Performance tuning & uptime monitoring" },
  { icon: <RefreshCw size={18} />, label: "Daily backups with fast restores" },
  { icon: <LifeBuoy size={18} />, label: "A real human to email when something breaks" },
];

export default function Hosting() {
  return (
    <SiteShell>
      <Seo
        title="Managed Hosting Prices — Sadath Company"
        description="Managed hosting from £8/month: £400 for 4 years (save £100) or £125 per year. Security, backups, monitoring and domain management included."
        path="/hosting"
      />
      <section className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.5em] uppercase opacity-40 mb-6 block">Hosting</span>
          <AnimatedText
            as="h1"
            text="Managed hosting from £8 a month."
            className="font-serif text-4xl md:text-6xl leading-tight mb-8"
            italicFrom={3}
          />
          <FadeIn delay={0.15}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We keep your site online, fast, patched and backed up — so you never think about servers.
              Hosting is completely optional: take your files elsewhere any time.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 md:px-12 mt-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, i) => (
            <FadeIn key={plan.label} delay={i * 0.1}>
              <div
                className={`relative h-full flex flex-col p-10 rounded-3xl border transition-all ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-secondary/30 border-border hover:border-foreground/20"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-10 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-emerald-500 text-white">
                    {plan.badge}
                  </div>
                )}
                <h2 className="font-serif text-2xl mb-4">{plan.label}</h2>
                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.headline}</span>
                  <span className={plan.highlight ? "opacity-70" : "text-muted-foreground"}>
                    {plan.per}
                  </span>
                  <span
                    className={`block text-xs uppercase tracking-widest mt-2 ${
                      plan.highlight ? "opacity-70" : "text-muted-foreground"
                    }`}
                  >
                    {plan.total}
                  </span>
                </div>
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className={`mt-0.5 flex-shrink-0 ${
                          plan.highlight ? "opacity-80" : "text-emerald-500"
                        }`}
                      />
                      <span className={`text-sm ${plan.highlight ? "opacity-90" : "text-muted-foreground"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/#contact"
                  className={`mt-8 group flex items-center justify-center gap-2 w-full py-4 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all ${
                    plan.highlight
                      ? "bg-primary-foreground text-primary"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  Add hosting
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 mt-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {included.map((h, i) => (
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
          Choosing hosting is entirely up to you. If you'd rather host it yourself, we hand over the
          code and walk your team through deploying it — free of charge.
        </p>
      </section>
    </SiteShell>
  );
}
