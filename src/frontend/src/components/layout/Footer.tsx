import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "react-icons/si";

const footerLinks = {
  quickLinks: [
    { label: "Home", to: "/" },
    { label: "Browse Offers", to: "/offers" },
    { label: "Dashboard", to: "/dashboard" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
  ],
  resources: [
    { label: "Getting Started Guide", href: "#" },
    { label: "API Documentation", href: "#" },
    { label: "Affiliate Academy", href: "#" },
    { label: "Payment Schedule", href: "#" },
    { label: "Community Forum", href: "#" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="gradient-footer text-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center border border-white/10">
                <Zap
                  className="w-4 h-4 text-brand-accent"
                  strokeWidth={2.5}
                  fill="currentColor"
                />
              </div>
              <span className="font-display font-bold text-lg text-white">
                AffiliatePro
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              The leading CPA affiliate network connecting performance marketers
              with high-converting offers worldwide.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                data-ocid="footer.twitter_link"
                aria-label="Twitter/X"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
              >
                <SiX className="w-4 h-4" />
              </button>
              <button
                type="button"
                data-ocid="footer.linkedin_link"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
              >
                <SiLinkedin className="w-4 h-4" />
              </button>
              <button
                type="button"
                data-ocid="footer.facebook_link"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
              >
                <SiFacebook className="w-4 h-4" />
              </button>
              <button
                type="button"
                data-ocid="footer.instagram_link"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
              >
                <SiInstagram className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
              >
                <SiYoutube className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-brand-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <span className="text-white/60 hover:text-brand-accent text-sm transition-colors cursor-pointer">
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                  Address
                </p>
                <p className="text-white/70 text-sm">
                  123 Commerce St
                  <br />
                  San Francisco, CA 94105
                </p>
              </li>
              <li>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href="mailto:support@affiliatepro.com"
                  className="text-white/70 text-sm hover:text-brand-accent transition-colors"
                >
                  support@affiliatepro.com
                </a>
              </li>
              <li>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                  Phone
                </p>
                <a
                  href="tel:+18005550199"
                  className="text-white/70 text-sm hover:text-brand-accent transition-colors"
                >
                  +1 800-555-0199
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            © {currentYear} AffiliatePro. Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              className="hover:text-white/70 transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white/70 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-white/20">·</span>
            <span className="hover:text-white/70 transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="text-white/20">·</span>
            <span className="hover:text-white/70 transition-colors cursor-pointer">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
