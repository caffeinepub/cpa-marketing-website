# CPA Marketing Website

## Current State
New project. Backend and frontend scaffolding exist but no application logic has been implemented.

## Requested Changes (Diff)

### Add
- **Home Page**: Hero section with headline, CTA buttons, features/benefits, how-it-works steps, testimonials carousel, newsletter signup form
- **Offers Page**: Grid of CPA offer cards with category filter tabs (All, Finance, Health, Gaming, E-commerce, Travel, Education), each card showing offer name, payout amount, conversion type, category badge, description, and "Join Now" button
- **Dashboard Page**: Affiliate dashboard with stats cards (Total Earnings, Clicks, Conversions, Conversion Rate), SVG earnings chart (line chart by week/month), recent transactions table, quick action links
- **About Page**: Company story section, mission statement, team member cards, partner/brand logos section
- **Contact Page**: Contact form (name, email, subject, message) with client-side validation, contact info cards (address, phone, email, hours)
- **Navigation**: Sticky header with logo, nav links (Home, Offers, Dashboard, About, Contact), Login and Register CTA buttons, mobile hamburger menu
- **Footer**: Multi-column footer with links, social icons (Facebook, Twitter, LinkedIn, Instagram), copyright text
- **Backend**: Newsletter subscription storage, contact form submission storage

### Modify
- Nothing to modify (new project)

### Remove
- Nothing to remove

## Implementation Plan
1. Generate Motoko backend with:
   - Newsletter subscriber list (subscribe/unsubscribe)
   - Contact form submissions (store message, retrieve for admin)
2. Build React frontend with React Router for 5-page SPA:
   - Shared Layout component (Navbar + Footer)
   - HomePage with hero, features, how-it-works, testimonials, newsletter
   - OffersPage with filter tabs and offer grid (20+ sample offers with realistic payouts $1.50-$45.00)
   - DashboardPage with stats cards, SVG line chart, transactions table, quick links
   - AboutPage with story, team, mission, partners
   - ContactPage with validated form wired to backend + contact info cards
3. Apply color scheme: deep blue #1a237e primary, green #00c853 accent
4. Ensure full responsiveness (mobile hamburger menu, responsive grids)
5. Add smooth transitions and hover animations
