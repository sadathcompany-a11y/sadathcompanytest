import {
  CheckCircle2,
  LayoutDashboard,
  CalendarClock,
  Workflow,
  Plug,
  ArrowRight,
} from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { AnimatedText, FadeIn } from "@/components/AnimatedText";
import { Seo } from "@/components/Seo";

const tiers = [
  {
    label: "Custom System",
    price: "From £600",
    note: "one-off project fee",
    features: [
      "Discovery & process mapping",
      "Custom dashboard, tool or automation",
      "Free custom to-do list included",
      "User authentication & roles",
      "Integrations (Stripe, email, APIs)",
      "Team training & handover, free of charge",
      "3 months of post-launch support",
    ],
  },
  {
    label: "Business Solution",
    price: "From £1,500",
    note: "multi-module builds",
    badge: "Most impact",
    features: [
      "Everything in Custom System",
      "Multiple connected modules",
      "Booking, scheduling or client portals",
      "Reporting dashboards & data clean-up",
      "Workflow automation across your tools",
      "Priority support arrangements available",
    ],
  },
];

const highlights = [
  { icon: <LayoutDashboard size={18} />, label: "Dashboards & admin panels" },
  { icon: <CalendarClock size={18} />, label: "Booking & scheduling tools" },
  { icon: <Workflow size={18} />, label: "Workflow automation" },
  { icon: <Plug size={18} />, label: "API & third-party integrations" },
];

export default function Systems() {
  return (
    <SiteShell>
      <Seo
        title="Custom Systems & Business Solutions Pricing — Sadath Company"
        description="Custom business systems from £600: dashboards, booking tools, portals and workflow automation, with free training and 3 months of support."
        path="/systems"
      />
      <section className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.5em] uppercase opacity-40 mb-6 block">
            Systems &amp; Business Solutions
          </span>
          <AnimatedText
            as="h1"
            text="Replace the spreadsheet. Save hours every week."
            className="font-serif text-4xl md:text-6xl leading-tight mb-8"
            italicFrom={3}
          />
          <FadeIn delay={0.15}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Internal tools built around how your business actually works. Systems and business
              solutions start at <span className="text-foreground font-medium">£600</span>.
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
                  Book a discovery call
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
          Larger systems are scoped individually. You own the finished product outright on completion,
          and all training is included free.
        </p>
      </section>
    </SiteShell>
  );
}
