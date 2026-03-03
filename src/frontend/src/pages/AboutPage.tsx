import { cn } from "@/lib/utils";
import { Award, Globe, Heart, Target, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

const teamMembers = [
  {
    initials: "MC",
    name: "Marcus Chen",
    title: "Chief Executive Officer",
    bio: "Former VP at Google Ads. Built AffiliatePro from a 3-person startup to the industry's leading CPA network.",
    color: "bg-blue-600",
  },
  {
    initials: "PP",
    name: "Priya Patel",
    title: "Chief Technology Officer",
    bio: "Ex-engineer at Meta. Architected our real-time tracking infrastructure that processes 50M+ events daily.",
    color: "bg-purple-600",
  },
  {
    initials: "JW",
    name: "Jordan Williams",
    title: "Head of Partnerships",
    bio: "15+ years in performance marketing. Manages relationships with 500+ premium advertisers worldwide.",
    color: "bg-emerald-600",
  },
  {
    initials: "ER",
    name: "Emma Rodriguez",
    title: "Marketing Director",
    bio: "Former CMO at a leading fintech startup. Drives our affiliate acquisition and brand strategy globally.",
    color: "bg-orange-600",
  },
  {
    initials: "DK",
    name: "David Kim",
    title: "Lead Developer",
    bio: "Full-stack architect who built our affiliate portal from scratch. Obsessed with performance and UX.",
    color: "bg-teal-600",
  },
  {
    initials: "AJ",
    name: "Aisha Johnson",
    title: "Customer Success Lead",
    bio: "Helps 10,000+ affiliates optimize their campaigns. 99.2% satisfaction rate across all support interactions.",
    color: "bg-rose-600",
  },
];

const partners = [
  "Visa",
  "Mastercard",
  "PayPal",
  "Stripe",
  "Amazon",
  "Google",
  "Microsoft",
  "Shopify",
];

const values = [
  {
    icon: Target,
    title: "Performance First",
    description:
      "Everything we build, every decision we make, is optimized for your conversion rates.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Heart,
    title: "Affiliate Success",
    description:
      "Your growth is our success. We measure ourselves by the earnings you generate.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Offers in 50+ countries and 12 languages, reaching audiences wherever they are.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Award,
    title: "Quality Over Quantity",
    description:
      "Every offer is vetted. We only partner with advertisers who convert and pay on time.",
    color: "bg-orange-50 text-orange-600",
  },
];

const milestones = [
  {
    year: "2018",
    event: "Founded in San Francisco with 3 affiliate partners and a dream",
  },
  {
    year: "2019",
    event: "Reached 1,000 registered affiliates and $100k monthly payouts",
  },
  {
    year: "2021",
    event: "Expanded to 200+ offers across 8 verticals, raised Series A",
  },
  {
    year: "2023",
    event: "10,000+ active affiliates, $2.5M+ monthly payouts milestone",
  },
  {
    year: "2026",
    event:
      "Launched AI-powered optimization tools and global expansion to 50 countries",
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="bg-brand-primary pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-brand-accent/8 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-56 h-56 rounded-full bg-brand-primary-light/15 blur-2xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-brand-accent font-bold text-xs uppercase tracking-[0.18em] mb-4">
              Our Story
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.08] tracking-tight">
              About AffiliatePro
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              We started with a simple belief: affiliate marketers deserve a
              network that actually works for them — transparent payouts, real
              support, and offers that convert.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Founded 2018
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Built by Affiliates,
                <br />
                for Affiliates
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AffiliatePro was founded in 2018 by Marcus Chen and Priya
                  Patel, two former tech executives who were frustrated with the
                  opacity and unreliability of existing affiliate networks. They
                  knew there had to be a better way.
                </p>
                <p>
                  Starting with just 3 advertiser partnerships and a handful of
                  beta affiliates, we built our platform on the principles of
                  transparency, reliability, and genuine partnership. Every
                  feature in our dashboard was designed based on direct feedback
                  from working affiliates.
                </p>
                <p>
                  Today, AffiliatePro serves over 10,000 active affiliates
                  worldwide, processing millions of conversions monthly across
                  finance, health, gaming, e-commerce, travel, and education
                  verticals.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { icon: Users, value: "10,000+", label: "Affiliates" },
                  {
                    icon: TrendingUp,
                    value: "$2.5M+",
                    label: "Monthly Payouts",
                  },
                  { icon: Globe, value: "50+", label: "Countries" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-5 h-5 text-brand-accent mx-auto mb-2" />
                    <p className="font-display font-bold text-xl text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              {/* Main gradient box */}
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary-dark to-brand-navy aspect-[4/3] flex items-center justify-center relative">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 70%, oklch(0.73 0.22 145) 0%, transparent 60%), radial-gradient(circle at 70% 30%, oklch(0.60 0.18 265) 0%, transparent 60%)",
                  }}
                />
                <div className="text-center relative z-10 p-8">
                  <div className="w-20 h-20 rounded-2xl bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-10 h-10 text-brand-accent" />
                  </div>
                  <p className="font-display font-bold text-3xl text-white mb-2">
                    $2.5M+
                  </p>
                  <p className="text-white/60 text-sm">
                    Paid to affiliates this month
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-3">
                    <div className="flex -space-x-2">
                      {["MC", "PP", "JW", "ER"].map((init) => (
                        <div
                          key={init}
                          className="w-8 h-8 rounded-full bg-brand-accent/80 border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold"
                        >
                          {init}
                        </div>
                      ))}
                    </div>
                    <p className="text-white/60 text-xs">
                      +9,996 more affiliates
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-3 shadow-xl bg-white border border-border">
                <p className="text-xs text-muted-foreground font-medium">
                  Founded
                </p>
                <p className="font-display font-bold text-foreground text-lg leading-none">
                  2018
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  San Francisco, CA
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground">
              Our Journey
            </h2>
          </motion.div>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-5 relative"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center flex-shrink-0 relative z-10 text-white text-xs font-bold">
                    {m.year}
                  </div>
                  <div className="flex-1 bg-card border border-border rounded-xl p-4">
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-accent/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-brand-accent text-5xl font-display font-bold mb-6 opacity-40">
              "
            </div>
            <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-8">
              Our mission is to empower affiliates with the tools, offers, and
              support needed to build sustainable income online.
            </blockquote>
            <p className="text-brand-accent font-semibold">
              Marcus Chen, CEO & Co-Founder
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-brand-accent font-bold text-xs uppercase tracking-[0.18em] mb-4">
              What Drives Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-[1.1] tracking-tight">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-shadow bg-card border border-border rounded-2xl p-6"
              >
                <div
                  className={cn(
                    "w-11 h-11 rounded-xl flex items-center justify-center mb-4",
                    v.color,
                  )}
                >
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 sm:py-28 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-brand-accent font-bold text-xs uppercase tracking-[0.18em] mb-4">
              The People Behind the Platform
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-[1.1] tracking-tight">
              Meet Our Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-shadow bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0",
                      member.color,
                    )}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-brand-accent text-xs font-semibold mb-2">
                      {member.title}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-medium">
              Trusted by the world's leading brands
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {partners.map((partner, i) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="px-5 py-2.5 bg-secondary border border-border rounded-xl text-sm font-semibold text-foreground/60 hover:text-foreground hover:border-brand-primary/40 hover:bg-card transition-all duration-200"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
