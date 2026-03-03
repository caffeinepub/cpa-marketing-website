import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  BarChart2,
  ChevronUp,
  CreditCard,
  DollarSign,
  Download,
  MessageSquare,
  MousePointerClick,
  Package,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const weeklyData = [
  { week: "Wk 1", earnings: 1240, clicks: 4820, conversions: 182 },
  { week: "Wk 2", earnings: 1580, clicks: 5930, conversions: 218 },
  { week: "Wk 3", earnings: 1380, clicks: 5210, conversions: 196 },
  { week: "Wk 4", earnings: 1850, clicks: 6720, conversions: 254 },
  { week: "Wk 5", earnings: 1620, clicks: 6140, conversions: 229 },
  { week: "Wk 6", earnings: 2100, clicks: 7580, conversions: 298 },
  { week: "Wk 7", earnings: 1920, clicks: 7140, conversions: 271 },
  { week: "Wk 8", earnings: 2157, clicks: 8420, conversions: 312 },
];

const transactions = [
  {
    date: "Mar 1, 2026",
    offer: "Premium Credit Card Application",
    type: "Lead",
    amount: 45.0,
    status: "Paid",
  },
  {
    date: "Mar 1, 2026",
    offer: "Coding Bootcamp Enrollment",
    type: "Enrollment",
    amount: 45.0,
    status: "Paid",
  },
  {
    date: "Feb 28, 2026",
    offer: "Investment Account Opening",
    type: "Deposit",
    amount: 40.0,
    status: "Paid",
  },
  {
    date: "Feb 28, 2026",
    offer: "Personal Loan Signup",
    type: "Lead",
    amount: 35.0,
    status: "Paid",
  },
  {
    date: "Feb 27, 2026",
    offer: "Hotel Comparison & Booking",
    type: "Booking",
    amount: 66.0,
    status: "Processing",
  },
  {
    date: "Feb 27, 2026",
    offer: "Meal Kit Delivery Service",
    type: "Order",
    amount: 50.0,
    status: "Paid",
  },
  {
    date: "Feb 26, 2026",
    offer: "Professional Online Course",
    type: "Enrollment",
    amount: 105.0,
    status: "Pending",
  },
  {
    date: "Feb 25, 2026",
    offer: "Crypto Exchange Registration",
    type: "Signup",
    amount: 28.0,
    status: "Paid",
  },
  {
    date: "Feb 25, 2026",
    offer: "Travel Insurance Coverage",
    type: "Lead",
    amount: 57.0,
    status: "Paid",
  },
  {
    date: "Feb 24, 2026",
    offer: "Personal Loan Signup",
    type: "Lead",
    amount: 70.0,
    status: "Processing",
  },
];

const quickLinks = [
  {
    icon: Package,
    label: "Browse New Offers",
    description: "Find high-converting offers",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Download,
    label: "Download Reports",
    description: "Export your performance data",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Users,
    label: "Referral Program",
    description: "Earn 5% on referred affiliates",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: CreditCard,
    label: "Payment Settings",
    description: "Manage payout methods",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: MessageSquare,
    label: "Support Chat",
    description: "Talk to your account manager",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Settings,
    label: "Account Settings",
    description: "Profile, security, preferences",
    color: "bg-rose-50 text-rose-600",
  },
];

type TransactionStatus = "Paid" | "Pending" | "Processing";

const statusStyles: Record<TransactionStatus, string> = {
  Paid: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Processing: "bg-blue-100 text-blue-700 border-blue-200",
};

// SVG Chart Component
function EarningsChart() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const maxEarnings = Math.max(...weeklyData.map((d) => d.earnings));
  const minEarnings = Math.min(...weeklyData.map((d) => d.earnings));
  const chartHeight = 180;
  const chartWidth = 600;
  const paddingLeft = 56;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 40;
  const plotWidth = chartWidth - paddingLeft - paddingRight;
  const plotHeight = chartHeight - paddingTop - paddingBottom;
  const yRange = maxEarnings - minEarnings + 200;

  const getX = (i: number) =>
    paddingLeft + (i / (weeklyData.length - 1)) * plotWidth;
  const getY = (earnings: number) =>
    paddingTop +
    plotHeight -
    ((earnings - minEarnings + 100) / yRange) * plotHeight;

  const pathD = weeklyData
    .map((d, i) => `${i === 0 ? "M" : "L"} ${getX(i)} ${getY(d.earnings)}`)
    .join(" ");

  const areaD = `${pathD} L ${getX(weeklyData.length - 1)} ${paddingTop + plotHeight} L ${getX(0)} ${paddingTop + plotHeight} Z`;

  const yTicks = 5;
  const yTickValues = Array.from({ length: yTicks }, (_, i) => {
    const val =
      minEarnings + (i / (yTicks - 1)) * (maxEarnings - minEarnings + 200);
    return Math.round(val / 100) * 100;
  });

  return (
    <div className="relative overflow-x-auto">
      <svg
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        className="w-full min-w-[320px]"
        style={{ height: "auto" }}
        role="img"
        aria-label="Weekly earnings chart"
      >
        <title>Weekly Earnings Chart</title>
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="oklch(0.73 0.22 145)"
              stopOpacity="0.25"
            />
            <stop
              offset="100%"
              stopColor="oklch(0.73 0.22 145)"
              stopOpacity="0.01"
            />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.28 0.16 265)" />
            <stop offset="100%" stopColor="oklch(0.73 0.22 145)" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {yTickValues.map((val) => {
          const y = getY(val);
          if (y < paddingTop || y > paddingTop + plotHeight + 5) return null;
          return (
            <g key={val}>
              <line
                x1={paddingLeft}
                y1={y}
                x2={chartWidth - paddingRight}
                y2={y}
                stroke="oklch(0.88 0.015 265)"
                strokeWidth="1"
                strokeDasharray="4,4"
              />
              <text
                x={paddingLeft - 8}
                y={y + 4}
                textAnchor="end"
                fontSize="10"
                fill="oklch(0.52 0.04 265)"
              >
                ${(val / 1000).toFixed(1)}k
              </text>
            </g>
          );
        })}

        {/* Area fill */}
        <path d={areaD} fill="url(#areaGradient)" />

        {/* Line */}
        <path
          d={pathD}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data Points */}
        {weeklyData.map((d, i) => {
          const cx = getX(i);
          const cy = getY(d.earnings);
          const isHovered = hoveredPoint === i;
          return (
            <g key={d.week}>
              <circle
                cx={cx}
                cy={cy}
                r={isHovered ? 7 : 5}
                fill="oklch(0.73 0.22 145)"
                stroke="white"
                strokeWidth="2"
                style={{ cursor: "pointer", transition: "r 0.15s ease" }}
                onMouseEnter={() => setHoveredPoint(i)}
                onMouseLeave={() => setHoveredPoint(null)}
                data-ocid="dashboard.chart_point"
              />

              {/* Tooltip */}
              {isHovered && (
                <g>
                  <rect
                    x={cx - 38}
                    y={cy - 42}
                    width="76"
                    height="34"
                    rx="6"
                    fill="oklch(0.18 0.14 265)"
                  />
                  <text
                    x={cx}
                    y={cy - 26}
                    textAnchor="middle"
                    fontSize="10"
                    fill="oklch(0.73 0.22 145)"
                    fontWeight="700"
                  >
                    ${d.earnings.toLocaleString()}
                  </text>
                  <text
                    x={cx}
                    y={cy - 14}
                    textAnchor="middle"
                    fontSize="9"
                    fill="oklch(0.80 0.02 265)"
                  >
                    {d.week}
                  </text>
                </g>
              )}

              {/* X-axis label */}
              <text
                x={cx}
                y={paddingTop + plotHeight + 22}
                textAnchor="middle"
                fontSize="10"
                fill="oklch(0.52 0.04 265)"
              >
                {d.week}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function DashboardPage() {
  const statsCards = [
    {
      label: "Total Earnings",
      value: "$12,847.50",
      change: "+18.3%",
      icon: DollarSign,
      ocid: "dashboard.earnings_card",
      color: "text-emerald-600 bg-emerald-50",
      changeLabel: "vs last month",
    },
    {
      label: "Total Clicks",
      value: "48,293",
      change: "+12.1%",
      icon: MousePointerClick,
      ocid: "dashboard.clicks_card",
      color: "text-blue-600 bg-blue-50",
      changeLabel: "vs last month",
    },
    {
      label: "Conversions",
      value: "1,847",
      change: "+9.7%",
      icon: TrendingUp,
      ocid: "dashboard.conversions_card",
      color: "text-purple-600 bg-purple-50",
      changeLabel: "vs last month",
    },
    {
      label: "Conversion Rate",
      value: "3.82%",
      change: "+0.4%",
      icon: BarChart2,
      ocid: "dashboard.rate_card",
      color: "text-orange-600 bg-orange-50",
      changeLabel: "vs last month",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Page Header */}
      <div className="bg-brand-primary py-8">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
              Affiliate Dashboard
            </h1>
            <p className="text-white/60 text-sm">
              Welcome back, John! Here's your performance overview.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-8">
        {/* Stats Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {statsCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              data-ocid={card.ocid}
              className="stats-card bg-card border border-border rounded-2xl p-5 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                  {card.label}
                </p>
                <div
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center",
                    card.color,
                  )}
                >
                  <card.icon className="w-4 h-4" />
                </div>
              </div>
              <p className="font-display font-bold text-2xl text-foreground mb-2">
                {card.value}
              </p>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5 text-emerald-600">
                  <ChevronUp className="w-3.5 h-3.5" />
                  <span className="text-xs font-semibold">{card.change}</span>
                </div>
                <span className="text-muted-foreground text-xs">
                  {card.changeLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Earnings Chart - takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-shadow lg:col-span-2 bg-card border border-border rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-display font-bold text-lg text-foreground">
                  Earnings Overview
                </h2>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Weekly performance — last 8 weeks
                </p>
              </div>
              <div className="flex items-center gap-2 text-brand-accent text-sm font-semibold bg-brand-accent/10 px-3 py-1.5 rounded-lg">
                <ArrowUpRight className="w-4 h-4" />
                +18.3% this month
              </div>
            </div>
            <EarningsChart />
          </motion.div>

          {/* Quick Links Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card-shadow bg-card border border-border rounded-2xl p-6"
          >
            <h2 className="font-display font-bold text-lg text-foreground mb-4">
              Quick Links
            </h2>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group text-left"
                >
                  <div
                    className={cn(
                      "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0",
                      link.color,
                    )}
                  >
                    <link.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground group-hover:text-brand-primary transition-colors">
                      {link.label}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {link.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Transactions Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="card-shadow bg-card border border-border rounded-2xl overflow-hidden"
          data-ocid="dashboard.transactions_table"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <div>
              <h2 className="font-display font-bold text-lg text-foreground">
                Recent Transactions
              </h2>
              <p className="text-muted-foreground text-xs mt-0.5">
                Your latest 10 commission events
              </p>
            </div>
            <button
              type="button"
              className="flex items-center gap-1.5 text-brand-primary text-sm font-medium hover:text-brand-primary-light transition-colors"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Date
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Offer
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                    Type
                  </th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {transactions.map((tx, i) => (
                  <tr
                    key={`${tx.date}-${tx.offer}-${i}`}
                    className="hover:bg-secondary/20 transition-colors"
                    data-ocid={`dashboard.transactions_table.row.${i + 1}`}
                  >
                    <td className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                      {tx.date}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground max-w-[200px] truncate">
                      {tx.offer}
                    </td>
                    <td className="px-4 py-4 text-sm text-muted-foreground hidden md:table-cell">
                      {tx.type}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-brand-accent text-right whitespace-nowrap">
                      +${tx.amount.toFixed(2)}
                    </td>
                    <td className="px-4 py-4">
                      <Badge
                        variant="outline"
                        className={cn(
                          "text-xs font-semibold border",
                          statusStyles[tx.status as TransactionStatus],
                        )}
                      >
                        {tx.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
