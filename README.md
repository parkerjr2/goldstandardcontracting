# Gold Standard Contracting Website

A premium, SEO-optimized Next.js website for Gold Standard Contracting - a licensed roofing and exterior contractor serving the OKC metro area.

## Project Overview

- **Business**: Gold Standard Contracting
- **Phone**: (405) 278-1994
- **Email**: Goldstandardcontracts@gmail.com
- **License**: Oklahoma CIB #0007026
- **Service Areas**: Norman, Yukon, Tuttle, Moore, Mustang, El Reno, Bethany, Del City, Minco, Edmond (OK)

## Technology Stack

- **Framework**: Next.js 14.2 (App Router)
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **Deployment**: Vercel-ready
- **Performance**: Optimized for Lighthouse 90+ mobile score

## Features

### Pages (27 total)
- Homepage (SEO-optimized for "Roofing Contractor")
- 4 Service Pages (Roofing, Siding, Windows, Remodeling)
- 10 City Landing Pages (Norman, Yukon, etc.)
- About, Contact, Thank You
- Privacy Policy, Terms of Service
- Dynamic sitemap.xml and robots.txt

### SEO Optimization
- **Primary Keyword**: "Roofing Contractor" (homepage focus)
- Unique metadata for every page
- JSON-LD schema markup (LocalBusiness, Service, Review)
- City-specific landing pages with unique content
- Internal linking strategy
- Dynamic sitemap generation

### Design
- Premium gold (#D4AF37) and dark slate (#0F1720) color palette
- Responsive mobile-first design
- Smooth animations and transitions
- Accessible focus states
- Professional typography (Montserrat + Inter)

### Components
- Header with sticky navigation
- Footer with service areas and links
- Service cards with icons
- City cards
- Testimonial display
- FAQ accordions
- Process steps visualization
- Trust badges
- Contact form
- CTA banners

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Lint Code

```bash
npm run lint
```

### Type Check

```bash
npm run typecheck
```

## Project Structure

```
goldstandardcontracting/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with fonts and schema
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles
│   ├── services/                 # Service pages
│   │   ├── page.tsx
│   │   ├── roofing/page.tsx
│   │   ├── siding/page.tsx
│   │   ├── windows/page.tsx
│   │   └── remodeling/page.tsx
│   ├── service-areas/            # City landing pages
│   │   ├── page.tsx
│   │   └── [city]/page.tsx       # Dynamic city pages
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── thank-you/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── robots.ts                 # Dynamic robots.txt
│   └── sitemap.ts                # Dynamic sitemap.xml
├── components/                   # React components
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   └── FAQAccordion.tsx
│   ├── ServiceCard.tsx
│   ├── CityCard.tsx
│   ├── Testimonial.tsx
│   ├── CTABanner.tsx
│   ├── ProcessSteps.tsx
│   ├── TrustBadges.tsx
│   └── ContactForm.tsx
├── lib/                          # Utilities and constants
│   ├── constants.ts              # Business info, services, cities
│   ├── cities.ts                 # City-specific content
│   ├── schema.ts                 # JSON-LD schema generators
│   ├── metadata.ts               # Metadata helpers
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
│   └── logos/                    # Logo images
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## Key Files

### Constants (`lib/constants.ts`)
- Business information
- Service areas (10 cities)
- Services (4 core services)
- Social media links
- Testimonial
- Trust points
- Process steps

### City Content (`lib/cities.ts`)
- Unique content for each city landing page
- Avoids SEO doorway page spam
- Local context and popular projects

### Schema (`lib/schema.ts`)
- LocalBusiness schema
- Service schema
- Review schema
- Breadcrumb schema

## SEO Checklist

### Homepage
- ✅ H1: "Roofing Contractor in Norman & OKC Metro"
- ✅ Title: "Roofing Contractor in Norman, OK | Gold Standard Contracting"
- ✅ Meta description includes "roofing contractor"
- ✅ "Roofing Contractor" in first 100 words
- ✅ Internal links to services and cities

### Service Pages
- ✅ Unique H1, title, description per page
- ✅ Service schema markup
- ✅ FAQ sections
- ✅ Internal linking

### City Pages
- ✅ Title format: "Roofing Contractor in {City}, OK"
- ✅ Unique content per city (not duplicated)
- ✅ Links to services and contact

### Technical SEO
- ✅ Sitemap.xml (dynamic)
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ OpenGraph tags
- ✅ Mobile responsive
- ✅ Fast page loads

## Deployment

### Vercel (Recommended)

1. Push code to GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial Gold Standard Contracting website"
   git remote add origin https://github.com/parkerjr2/goldstandardcontracting.git
   git push -u origin main
   ```

2. Connect repository to Vercel
3. Deploy (automatic on push)

### Environment Variables

No environment variables required for basic deployment. If implementing form email delivery:

```env
# Optional: For form submission email delivery
CONTACT_EMAIL=Goldstandardcontracts@gmail.com
```

## Performance Optimization

### Implemented
- Next.js Image optimization (WebP format)
- Font optimization with `next/font/google`
- Server Components by default
- Static page generation for all routes
- Minimal client-side JavaScript
- Efficient CSS with Tailwind

### Target Metrics
- Lighthouse Performance: 90+ (mobile)
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Safari iOS (last 2 versions)

## Future Enhancements

### Recommended
1. Google Analytics / GA4 tracking
2. Google Business Profile integration
3. Submit sitemap to Google Search Console
4. Real customer reviews integration
5. Project gallery with real photos
6. Blog for content marketing
7. Online scheduling system
8. Live chat widget
9. Email automation for form submissions
10. A/B testing for conversions

### Optional
- Customer portal
- Online payment processing
- Interactive roof calculator
- Before/after photo comparisons
- Video testimonials

## Support

For technical support or questions about this website:
- Email: Goldstandardcontracts@gmail.com
- Phone: (405) 278-1994

## License

Proprietary - © 2026 Gold Standard Contracting. All rights reserved.

---

**Built with**: Next.js 14, TypeScript, Tailwind CSS
**Deployed on**: Vercel
**Last Updated**: January 2026
