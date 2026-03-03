import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ExternalLink, Search, TrendingUp, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

type Category =
  | "All"
  | "Finance"
  | "Health"
  | "Gaming"
  | "E-commerce"
  | "Travel"
  | "Education";

interface Offer {
  id: number;
  name: string;
  category: Exclude<Category, "All">;
  payout: number;
  conversionType: string;
  description: string;
  epc: number;
  isHot?: boolean;
}

const offers: Offer[] = [
  // Finance
  {
    id: 1,
    name: "Premium Credit Card Application",
    category: "Finance",
    payout: 45.0,
    conversionType: "Lead",
    description:
      "Top-tier rewards credit card with excellent approval rates. High intent audience converts consistently.",
    epc: 3.82,
    isHot: true,
  },
  {
    id: 2,
    name: "Personal Loan Signup",
    category: "Finance",
    payout: 35.0,
    conversionType: "Lead",
    description:
      "Fast-approval personal loans up to $50k. Strong conversion across debt consolidation traffic.",
    epc: 2.94,
  },
  {
    id: 3,
    name: "Free Insurance Quote",
    category: "Finance",
    payout: 22.5,
    conversionType: "Lead",
    description:
      "Auto, home, and life insurance comparison. Simple form, high intent users, excellent payouts.",
    epc: 2.1,
  },
  {
    id: 4,
    name: "Investment Account Opening",
    category: "Finance",
    payout: 40.0,
    conversionType: "Deposit",
    description:
      "Commission-free stock trading platform. Converts well with finance and investing audiences.",
    epc: 3.4,
    isHot: true,
  },
  {
    id: 5,
    name: "Crypto Exchange Registration",
    category: "Finance",
    payout: 28.0,
    conversionType: "Signup",
    description:
      "Leading crypto exchange with 350+ coins. Growing audience, strong mobile conversion.",
    epc: 2.45,
  },
  // Health
  {
    id: 6,
    name: "Premium Weight Loss Program",
    category: "Health",
    payout: 18.0,
    conversionType: "Signup",
    description:
      "Science-backed 12-week transformation program. Strong conversion with diet and wellness content.",
    epc: 1.62,
  },
  {
    id: 7,
    name: "Daily Vitamin Subscription Box",
    category: "Health",
    payout: 12.0,
    conversionType: "Trial",
    description:
      "Personalized vitamin packs. Low-friction trial signup, strong LTV and recurring commission.",
    epc: 1.1,
  },
  {
    id: 8,
    name: "Mental Wellness App",
    category: "Health",
    payout: 8.5,
    conversionType: "Install",
    description:
      "Top-rated meditation and therapy app. Great for wellness, self-help, and mindfulness audiences.",
    epc: 0.92,
  },
  {
    id: 9,
    name: "Smart Fitness Tracker",
    category: "Health",
    payout: 15.0,
    conversionType: "Lead",
    description:
      "Premium health wearable with health coaching subscription. Strong upsell potential post-conversion.",
    epc: 1.35,
  },
  {
    id: 10,
    name: "Meal Kit Delivery Service",
    category: "Health",
    payout: 25.0,
    conversionType: "Order",
    description:
      "Chef-designed meal kits with organic ingredients. First order payout with strong retention rates.",
    epc: 2.2,
    isHot: true,
  },
  // Gaming
  {
    id: 11,
    name: "Mobile RPG Fantasy Game",
    category: "Gaming",
    payout: 3.5,
    conversionType: "Install",
    description:
      "Top-grossing mobile RPG with 50M+ downloads. iOS and Android, worldwide geo coverage.",
    epc: 0.42,
  },
  {
    id: 12,
    name: "PC Strategy Game Trial",
    category: "Gaming",
    payout: 5.0,
    conversionType: "Trial",
    description:
      "Award-winning strategy franchise. Free-to-play trial with strong paid conversion funnel.",
    epc: 0.58,
  },
  {
    id: 13,
    name: "Gaming VPN Service",
    category: "Gaming",
    payout: 7.5,
    conversionType: "Signup",
    description:
      "Low-latency VPN built for gamers. Reduce lag and access region-locked games. Great EPC.",
    epc: 0.8,
  },
  {
    id: 14,
    name: "Esports Tournament Platform",
    category: "Gaming",
    payout: 4.0,
    conversionType: "Registration",
    description:
      "Competitive gaming platform with cash prizes. Strong conversion with FPS and MOBA audiences.",
    epc: 0.48,
  },
  {
    id: 15,
    name: "Season Pass Bundle",
    category: "Gaming",
    payout: 6.0,
    conversionType: "Purchase",
    description:
      "Multi-game season pass with exclusive cosmetics. Converts well with engaged gaming communities.",
    epc: 0.65,
  },
  // E-commerce
  {
    id: 16,
    name: "Fashion Retailer First Purchase",
    category: "E-commerce",
    payout: 12.0,
    conversionType: "Purchase",
    description:
      "Trendy fashion brand with strong mobile conversion. Average order value $85+. Seasonal spikes.",
    epc: 1.08,
  },
  {
    id: 17,
    name: "Electronics & Gadgets Store",
    category: "E-commerce",
    payout: 18.0,
    conversionType: "Purchase",
    description:
      "Premium consumer electronics retailer. High average cart value, excellent conversion on tech reviews.",
    epc: 1.62,
  },
  {
    id: 18,
    name: "Home & Living Marketplace",
    category: "E-commerce",
    payout: 9.5,
    conversionType: "Purchase",
    description:
      "Home decor and lifestyle products. Strong performance with interior design and home improvement content.",
    epc: 0.88,
  },
  {
    id: 19,
    name: "Book Club Membership Trial",
    category: "E-commerce",
    payout: 15.0,
    conversionType: "Trial",
    description:
      "Curated book subscription service. Monthly boxes with 2-3 books. Excellent retention and LTV.",
    epc: 1.3,
  },
  // Travel
  {
    id: 20,
    name: "Hotel Comparison & Booking",
    category: "Travel",
    payout: 22.0,
    conversionType: "Booking",
    description:
      "Best-rate hotel search engine with 500k+ properties. Converts well with travel bloggers and deal seekers.",
    epc: 2.0,
    isHot: true,
  },
  {
    id: 21,
    name: "Flight Price Comparison",
    category: "Travel",
    payout: 8.0,
    conversionType: "Click",
    description:
      "Real-time flight comparison with price alerts. Easy conversion on travel intent audiences.",
    epc: 0.72,
  },
  {
    id: 22,
    name: "Travel Insurance Coverage",
    category: "Travel",
    payout: 19.0,
    conversionType: "Lead",
    description:
      "Comprehensive travel insurance for international trips. Strong conversion pre-travel and in booking flow.",
    epc: 1.75,
  },
  // Education
  {
    id: 23,
    name: "Professional Online Course",
    category: "Education",
    payout: 35.0,
    conversionType: "Enrollment",
    description:
      "Industry-recognized certifications in tech, business, and design. Strong conversion with career switchers.",
    epc: 3.1,
    isHot: true,
  },
  {
    id: 24,
    name: "Coding Bootcamp Enrollment",
    category: "Education",
    payout: 45.0,
    conversionType: "Enrollment",
    description:
      "Full-stack development bootcamp with job guarantee. Highest payout in education vertical.",
    epc: 3.9,
    isHot: true,
  },
  {
    id: 25,
    name: "Language Learning App",
    category: "Education",
    payout: 4.5,
    conversionType: "Install",
    description:
      "Learn 35+ languages with AI-powered personalization. Huge addressable market, strong install rate.",
    epc: 0.5,
  },
];

const categories: Category[] = [
  "All",
  "Finance",
  "Health",
  "Gaming",
  "E-commerce",
  "Travel",
  "Education",
];

const categoryColors: Record<Exclude<Category, "All">, string> = {
  Finance: "bg-blue-100 text-blue-700 border-blue-200",
  Health: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Gaming: "bg-purple-100 text-purple-700 border-purple-200",
  "E-commerce": "bg-orange-100 text-orange-700 border-orange-200",
  Travel: "bg-teal-100 text-teal-700 border-teal-200",
  Education: "bg-red-100 text-red-700 border-red-200",
};

const categoryOcidMap: Record<Category, string> = {
  All: "offers.filter_all_tab",
  Finance: "offers.filter_finance_tab",
  Health: "offers.filter_health_tab",
  Gaming: "offers.filter_gaming_tab",
  "E-commerce": "offers.filter_ecommerce_tab",
  Travel: "offers.filter_travel_tab",
  Education: "offers.filter_education_tab",
};

export function OffersPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");

  const filteredOffers = useMemo(() => {
    return offers.filter((o) => {
      const matchesCategory =
        activeCategory === "All" || o.category === activeCategory;
      const matchesSearch =
        !search.trim() ||
        o.name.toLowerCase().includes(search.toLowerCase()) ||
        o.category.toLowerCase().includes(search.toLowerCase()) ||
        o.conversionType.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-brand-primary pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-brand-accent text-sm font-medium mb-3">
              <Zap className="w-4 h-4" fill="currentColor" />
              <span>500+ Premium Offers Available</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              Browse CPA Offers
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              High-converting offers across every major vertical. Find the
              perfect match for your audience.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter Bar + Search */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-border shadow-xs">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-4">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Category Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  data-ocid={categoryOcidMap[cat]}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border",
                    activeCategory === cat
                      ? "bg-brand-primary text-white border-brand-primary shadow-sm"
                      : "bg-white text-foreground/70 border-border hover:border-brand-primary/40 hover:text-brand-primary",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Spacer */}
            <div className="flex-1 hidden sm:block" />

            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search offers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                data-ocid="offers.search_input"
                className="pl-9 h-9 bg-secondary/50 border-border"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl pt-6 pb-2">
        <p className="text-muted-foreground text-sm">
          Showing{" "}
          <span className="font-semibold text-foreground">
            {filteredOffers.length}
          </span>{" "}
          offers
          {activeCategory !== "All" && ` in ${activeCategory}`}
          {search.trim() && ` matching "${search}"`}
        </p>
      </div>

      {/* Offers Grid */}
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl pb-20 pt-4">
        <AnimatePresence mode="wait">
          {filteredOffers.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                No offers found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={`${activeCategory}-${search}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredOffers.map((offer, idx) => (
                <OfferCard key={offer.id} offer={offer} index={idx + 1} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function OfferCard({ offer, index }: { offer: Offer; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.4) }}
      data-ocid={`offers.item.${index}`}
      className="offer-card bg-card border border-border rounded-2xl p-5 flex flex-col"
    >
      {/* Top Row: Category Badge + Hot Badge */}
      <div className="flex items-center justify-between mb-4">
        <Badge
          variant="outline"
          className={cn(
            "text-xs font-semibold border",
            categoryColors[offer.category],
          )}
        >
          {offer.category}
        </Badge>
        {offer.isHot && (
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-50 border border-red-200">
            <TrendingUp className="w-3 h-3 text-red-500" />
            <span className="text-red-600 text-xs font-semibold">Hot</span>
          </div>
        )}
      </div>

      {/* Offer Name */}
      <h3 className="font-display font-bold text-base text-foreground leading-tight mb-2 flex-1">
        {offer.name}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2">
        {offer.description}
      </p>

      {/* Stats Row */}
      <div className="flex items-center gap-4 mb-4 py-3 border-t border-b border-border">
        <div>
          <p className="text-muted-foreground text-xs mb-0.5">Payout</p>
          <p className="font-bold text-xl text-brand-accent">
            ${offer.payout.toFixed(2)}
          </p>
        </div>
        <div className="w-px h-8 bg-border" />
        <div>
          <p className="text-muted-foreground text-xs mb-0.5">Type</p>
          <p className="font-semibold text-sm text-foreground">
            {offer.conversionType}
          </p>
        </div>
        <div className="w-px h-8 bg-border" />
        <div>
          <p className="text-muted-foreground text-xs mb-0.5">Avg. EPC</p>
          <p className="font-semibold text-sm text-foreground">
            ${offer.epc.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Join Button */}
      <Button
        data-ocid={`offers.join_button.${index}`}
        className="w-full btn-join-gradient text-white font-semibold rounded-xl group border-0"
      >
        Join Now
        <ExternalLink className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 transition-transform" />
      </Button>
    </motion.div>
  );
}
