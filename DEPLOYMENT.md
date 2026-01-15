# Deployment Guide - Gold Standard Contracting Website

## Pre-Deployment Checklist

### 1. Verify Build
```bash
npm run build
```
- Ensure build completes without errors
- Verify all 27 pages are generated
- Check for TypeScript errors

### 2. Test Locally
```bash
npm run start
```
- Test all pages load correctly
- Test navigation (header menu, footer links)
- Test contact form submission
- Test click-to-call links
- Test responsive design (mobile, tablet, desktop)

### 3. SEO Verification
- Visit http://localhost:3000/sitemap.xml
- Visit http://localhost:3000/robots.txt
- Check homepage H1 = "Roofing Contractor in Norman & OKC Metro"
- Verify meta descriptions on key pages
- Test schema markup with Google Rich Results Test

## Deploy to Vercel

### Step 1: Initialize Git Repository

```bash
# Navigate to project directory
cd /Users/joeparker/AppDev/goldstandardcontracting

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial Gold Standard Contracting website

- Next.js 14 with App Router
- 27 pages: Home, Services, Service Areas, About, Contact
- SEO-optimized for 'Roofing Contractor'
- 10 city landing pages with unique content
- Responsive design with gold/dark theme
- Schema markup and dynamic sitemap"
```

### Step 2: Push to GitHub

```bash
# Add remote repository
git remote add origin https://github.com/parkerjr2/goldstandardcontracting.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import from GitHub: `parkerjr2/goldstandardcontracting`
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Click "Deploy"

### Step 4: Configure Domain

1. In Vercel project settings, go to "Domains"
2. Add custom domain: `goldstandardcontracting.com`
3. Add www subdomain: `www.goldstandardcontracting.com`
4. Follow DNS configuration instructions:
   ```
   A Record: @ → 76.76.19.19
   CNAME: www → cname.vercel-dns.com
   ```
5. Wait for DNS propagation (up to 48 hours)

### Step 5: Update Metadata Base URL

Once domain is configured, update the base URL in:

**`lib/metadata.ts`**:
```typescript
const baseUrl = "https://goldstandardcontracting.com"; // Already set
```

**`app/layout.tsx`**:
```typescript
metadataBase: new URL("https://goldstandardcontracting.com"),
```

Commit and push:
```bash
git add .
git commit -m "Update production domain"
git push
```

Vercel will automatically redeploy.

## Post-Deployment Tasks

### 1. Test Production Site

Visit production URL and verify:
- [ ] All pages load correctly
- [ ] Navigation works (header, footer)
- [ ] Contact form submits → thank you page
- [ ] Click-to-call links work on mobile
- [ ] Email links work
- [ ] Social links (Facebook, Yelp) work
- [ ] Responsive design on mobile
- [ ] No console errors

### 2. SEO Setup

#### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://goldstandardcontracting.com`
3. Verify ownership (DNS TXT record or HTML file)
4. Submit sitemap: `https://goldstandardcontracting.com/sitemap.xml`

#### Bing Webmaster Tools
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site: `https://goldstandardcontracting.com`
3. Verify ownership
4. Submit sitemap

### 3. Google Business Profile

1. Claim/create Google Business Profile
2. Add business information:
   - Name: Gold Standard Contracting
   - Category: Roofing Contractor
   - Phone: (405) 278-1994
   - Website: https://goldstandardcontracting.com
   - Service Areas: Norman, Yukon, Moore, etc.
3. Add photos (logo, projects, team)
4. Request reviews from satisfied customers

### 4. Analytics Setup (Optional)

#### Google Analytics 4
1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `app/layout.tsx`:
   ```typescript
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
     strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
     `}
   </Script>
   ```

### 5. Form Email Delivery (Optional)

Current form redirects to thank-you page but doesn't send emails.

**Option A: Formspree (Easiest)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create form endpoint
3. Update `components/ContactForm.tsx` to POST to Formspree endpoint

**Option B: Email API (SendGrid, Resend, etc.)**
1. Sign up for email service
2. Get API key
3. Create `/app/api/contact/route.ts`
4. Add API key to Vercel environment variables

### 6. Social Media

1. **Facebook**:
   - Ensure page exists: facebook.com/GoldStandardOK
   - Add website link
   - Post regularly

2. **Yelp**:
   - Claim business listing
   - Respond to reviews
   - Keep info updated

## Monitoring & Maintenance

### Weekly Tasks
- Check Google Search Console for issues
- Monitor form submissions
- Respond to contact requests

### Monthly Tasks
- Review analytics (traffic, conversions)
- Check for broken links
- Update content as needed
- Review and respond to reviews

### Quarterly Tasks
- Audit SEO performance
- Update service area content
- Add new testimonials/reviews
- Refresh project photos

## Performance Monitoring

### Tools
1. **Google PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev)
   - Target: 90+ mobile score
   - Check Core Web Vitals

2. **Google Search Console**:
   - Monitor Core Web Vitals report
   - Check mobile usability
   - Review search performance

3. **Vercel Analytics**:
   - Monitor page load times
   - Track visitor metrics
   - Review error logs

### Performance Targets
- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.8s

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### CSS Not Loading
- Check Tailwind config
- Verify globals.css import in layout.tsx
- Clear browser cache

### 404 Errors
- Verify route exists in `app/` directory
- Check for typos in links
- Rebuild and redeploy

### Form Not Submitting
- Check browser console for errors
- Verify thank-you page route exists
- Test in production environment

## Support Contacts

- **Technical Issues**: Goldstandardcontracts@gmail.com
- **Vercel Support**: https://vercel.com/support
- **Domain Issues**: Contact domain registrar

---

**Last Updated**: January 2026
