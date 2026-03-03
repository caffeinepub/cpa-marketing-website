import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSubscribe } from "@/hooks/useQueries";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  DollarSign,
  HeadphonesIcon,
  Mail,
  Package,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const features = [
  {
    icon: TrendingUp,
    title: "High Payouts",
    description:
      "Earn up to $45 per action with our premium CPA offers, consistently outperforming industry averages.",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: BarChart3,
    title: "Real-Time Tracking",
    description:
      "Monitor every click, conversion, and dollar earned with our live dashboard and granular reporting.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Zap,
    title: "Instant Payments",
    description:
      "Get paid weekly via PayPal, bank transfer, or crypto — no delays, no excuses.",
    color: "text-yellow-600 bg-yellow-50",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "Your personal account manager is available 24/7 to help optimize your campaigns.",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "AI-powered insights surface your best-performing offers and identify untapped opportunities.",
    color: "text-rose-600 bg-rose-50",
  },
  {
    icon: Star,
    title: "Exclusive Offers",
    description:
      "Access premium, network-exclusive campaigns not available anywhere else in the industry.",
    color: "text-orange-600 bg-orange-50",
  },
];

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Sign Up Free",
    description:
      "Create your account in under 2 minutes. No credit card required. Instant access.",
  },
  {
    number: "02",
    icon: Package,
    title: "Browse Offers",
    description:
      "Explore 500+ high-converting CPA offers across finance, health, gaming, and more.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Start Promoting",
    description:
      "Get your unique tracking links, creatives, and promotional materials instantly.",
  },
  {
    number: "04",
    icon: DollarSign,
    title: "Get Paid",
    description:
      "Earn commissions for every qualifying action. Weekly payouts, guaranteed on time.",
  },
];

const testimonials = [
  {
    initials: "SM",
    name: "Sarah Mitchell",
    role: "Finance Blogger",
    rating: 5,
    quote:
      "AffiliatePro completely transformed my income. I went from $800/month to over $8,500/month within 6 months using their finance offers. The tracking is flawless and payments are always on time.",
    earnings: "$8,500/mo",
    color: "bg-blue-600",
  },
  {
    initials: "JR",
    name: "James Rodriguez",
    role: "Digital Marketer",
    rating: 5,
    quote:
      "I've worked with 12 different affiliate networks. AffiliatePro is in a league of its own — better payouts, real support, and a dashboard that actually makes sense. Highly recommend.",
    earnings: "$14,200/mo",
    color: "bg-emerald-600",
  },
  {
    initials: "AK",
    name: "Aisha Kapoor",
    role: "Content Creator",
    rating: 5,
    quote:
      "The gaming vertical on AffiliatePro is exceptional. Mobile game installs converting at 12%+ with EPCs I haven't seen elsewhere. My audience engagement has never been better.",
    earnings: "$5,900/mo",
    color: "bg-purple-600",
  },
];

const stats = [
  { value: "10,000+", label: "Active Affiliates" },
  { value: "$2.5M+", label: "Paid Out Monthly" },
  { value: "500+", label: "Premium Offers" },
  { value: "98%", label: "On-Time Payments" },
];

export function HomePage() {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const subscribeMutation = useSubscribe();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setNewsletterStatus("error");
      return;
    }
    try {
      await subscribeMutation.mutateAsync(email);
      setNewsletterStatus("success");
      setEmail("");
    } catch {
      setNewsletterStatus("error");
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col gradient-hero overflow-hidden noise-overlay">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Central spotlight behind headline */}
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-brand-primary-light/12 blur-[120px]" />
          {/* Accent bloom bottom-right */}
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-brand-accent/8 blur-[80px]" />
          {/* Deep edge vignette top-left */}
          <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-brand-dark/60 blur-3xl" />
          {/* Subtle right-edge depth */}
          <div className="absolute top-1/4 -right-8 w-56 h-56 rounded-full bg-brand-navy/40 blur-2xl" />
          {/* Fine grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          {/* Diagonal shimmer line */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(105deg, transparent 40%, oklch(1 0 0 / 0.15) 50%, transparent 60%)",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex-1 flex flex-col items-center justify-center pt-24 pb-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/15 border border-brand-accent/25 text-brand-accent text-sm font-semibold mb-8 shadow-[0_0_20px_oklch(0.73_0.22_145/0.2)]">
              <Zap className="w-3.5 h-3.5" fill="currentColor" />
              The #1 CPA Affiliate Network — Join 10,000+ Affiliates
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.75rem] font-bold text-white leading-[1.05] tracking-[-0.02em] mb-6 text-balance drop-shadow-[0_4px_32px_oklch(0.28_0.16_265/0.5)]">
              Earn More With
              <br />
              <span
                className="text-brand-accent"
                style={{
                  textShadow:
                    "0 0 60px oklch(0.73 0.22 145 / 0.4), 0 2px 12px oklch(0.73 0.22 145 / 0.25)",
                }}
              >
                Every Action
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-[1.7] mb-10 text-balance">
              Access 500+ high-converting CPA offers across every major
              vertical. Real-time tracking, weekly payouts, and dedicated
              support to maximize your affiliate income.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/offers">
                <Button
                  size="lg"
                  data-ocid="home.hero_cta_primary"
                  className="bg-brand-accent hover:bg-brand-accent-dark text-white font-semibold px-8 h-12 text-base btn-accent-glow rounded-xl"
                >
                  Browse Offers
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  data-ocid="home.hero_cta_secondary"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/40 px-8 h-12 text-base rounded-xl backdrop-blur-sm"
                >
                  View Dashboard
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Floating Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="w-full max-w-3xl mx-auto mt-16"
          >
            <div className="glass-card rounded-2xl px-4 py-5 grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center px-4 py-1">
                  <p
                    className="font-display font-bold text-[1.6rem] leading-none text-brand-accent mb-1.5"
                    style={{
                      textShadow: "0 0 24px oklch(0.73 0.22 145 / 0.35)",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-xs font-medium tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="relative h-16">
          <svg
            viewBox="0 0 1440 60"
            className="absolute bottom-0 w-full fill-background"
            preserveAspectRatio="none"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-brand-accent font-bold text-xs uppercase tracking-[0.18em] mb-4">
              Why Choose AffiliatePro
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] tracking-tight text-balance">
              Everything You Need to{" "}
              <span className="text-brand-primary">Maximize Earnings</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-shadow bg-card border border-border rounded-2xl p-6 group"
              >
                <div
                  className={cn(
                    "w-11 h-11 rounded-xl flex items-center justify-center mb-4",
                    feature.color,
                  )}
                >
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-brand-accent font-bold text-xs uppercase tracking-[0.18em] mb-4">
              Getting Started
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] tracking-tight">
              How It Works
            </h2>
          </motion.div>

          {/* Desktop: horizontal stepper */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary opacity-30" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center lg:items-center"
                >
                  {/* Step icon circle */}
                  <div className="relative mb-5">
                    <div className="w-20 h-20 rounded-2xl bg-brand-primary flex items-center justify-center shadow-lg shadow-brand-primary/25">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-accent text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/offers">
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold px-8 h-12 rounded-xl"
              >
                Start Earning Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-brand-accent font-bold text-xs uppercase tracking-[0.18em] mb-4">
              Success Stories
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] tracking-tight">
              What Our Affiliates Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-shadow bg-card border border-border rounded-2xl p-6 flex flex-col"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: t.rating }, (_, j) => j).map((j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground/80 text-sm leading-relaxed flex-1 mb-5">
                  "{t.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm",
                      t.color,
                    )}
                  >
                    {t.initials}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-foreground">
                      {t.name}
                    </p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-brand-accent font-bold text-sm">
                      {t.earnings}
                    </p>
                    <p className="text-muted-foreground text-xs">avg monthly</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 gradient-hero relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-brand-accent/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-brand-primary-light/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6 text-brand-accent" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Stay Ahead of the Market
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Get exclusive offer alerts, industry insights, and optimization
              tips delivered weekly.
            </p>

            {newsletterStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                data-ocid="home.newsletter_success_state"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-brand-accent/20 border border-brand-accent/30 rounded-xl text-brand-accent"
              >
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <p className="font-medium">
                  You're subscribed! Check your inbox for a welcome email.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <div className="flex-1 relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (newsletterStatus === "error")
                        setNewsletterStatus("idle");
                    }}
                    data-ocid="home.newsletter_input"
                    className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-brand-accent focus:ring-brand-accent/30 rounded-xl"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  data-ocid="home.newsletter_submit_button"
                  disabled={subscribeMutation.isPending}
                  className="bg-brand-accent hover:bg-brand-accent-dark text-white font-semibold h-12 px-6 rounded-xl whitespace-nowrap btn-accent-glow"
                >
                  {subscribeMutation.isPending
                    ? "Subscribing..."
                    : "Subscribe Free"}
                </Button>
              </form>
            )}

            {newsletterStatus === "error" && (
              <p
                data-ocid="home.newsletter_error_state"
                className="mt-2 text-red-400 text-sm flex items-center justify-center gap-1.5"
              >
                <span>Please enter a valid email address.</span>
              </p>
            )}

            <p className="text-white/35 text-xs mt-4">
              No spam, ever. Unsubscribe with one click at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
