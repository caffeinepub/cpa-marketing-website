import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/", ocid: "nav.home_link" },
  { label: "Offers", to: "/offers", ocid: "nav.offers_link" },
  { label: "Dashboard", to: "/dashboard", ocid: "nav.dashboard_link" },
  { label: "About", to: "/about", ocid: "nav.about_link" },
  { label: "Contact", to: "/contact", ocid: "nav.contact_link" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-nav border-b border-border/50"
          : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          aria-label="AffiliatePro Home"
        >
          <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center shadow-sm">
            <Zap
              className="w-4 h-4 text-brand-accent"
              strokeWidth={2.5}
              fill="currentColor"
            />
          </div>
          <span
            className={cn(
              "font-display font-bold text-lg tracking-tight transition-colors",
              scrolled ? "text-foreground" : "text-white",
            )}
          >
            AffiliatePro
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={link.ocid}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                isActive(link.to)
                  ? "text-brand-accent font-semibold"
                  : scrolled
                    ? "text-foreground/70 hover:text-foreground hover:bg-secondary"
                    : "text-white/80 hover:text-white hover:bg-white/10",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            data-ocid="nav.login_button"
            className={cn(
              "transition-colors",
              scrolled
                ? "text-foreground/70 hover:text-foreground"
                : "text-white/80 hover:text-white hover:bg-white/10",
            )}
          >
            Login
          </Button>
          <Button
            size="sm"
            data-ocid="nav.register_button"
            className="bg-brand-accent hover:bg-brand-accent-dark text-white font-semibold btn-accent-glow px-5"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden",
                scrolled ? "text-foreground" : "text-white",
              )}
              data-ocid="nav.mobile_menu_button"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-0 bg-white">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-brand-primary flex items-center justify-center">
                    <Zap
                      className="w-3.5 h-3.5 text-brand-accent"
                      strokeWidth={2.5}
                      fill="currentColor"
                    />
                  </div>
                  <span className="font-display font-bold text-foreground">
                    AffiliatePro
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground/60"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Mobile Nav Links */}
              <div className="flex flex-col py-4 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    data-ocid={link.ocid}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-6 py-3.5 text-sm font-medium transition-colors flex items-center gap-3",
                      isActive(link.to)
                        ? "text-brand-accent bg-brand-accent/5 border-r-2 border-brand-accent font-semibold"
                        : "text-foreground/70 hover:text-foreground hover:bg-secondary",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Auth Buttons */}
              <div className="px-6 pb-8 flex flex-col gap-2 border-t border-border pt-4">
                <Button
                  variant="outline"
                  className="w-full"
                  data-ocid="nav.login_button"
                  onClick={() => setMobileOpen(false)}
                >
                  Login
                </Button>
                <Button
                  className="w-full bg-brand-accent hover:bg-brand-accent-dark text-white font-semibold"
                  data-ocid="nav.register_button"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started Free
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
