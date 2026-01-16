import { BUSINESS_INFO, CITIES, SOCIAL_LINKS, TESTIMONIAL, SERVICES } from "./constants";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: BUSINESS_INFO.name,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    areaServed: CITIES.map((city) => `${city.name}, ${city.state}`),
    sameAs: [SOCIAL_LINKS.facebook.url, SOCIAL_LINKS.yelp.url],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roofing Services",
            description: "Professional roof repair, replacement, and storm damage restoration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Siding Installation",
            description: "Professional siding installation, replacement, and repair services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Window Replacement",
            description: "Energy-efficient window replacement and installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Remodeling Services",
            description: "Complete bathroom remodels, flooring, and general construction",
          },
        },
      ],
    },
  };
}

export function generateServiceSchema(serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "GeneralContractor",
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
    },
    areaServed: CITIES.map((city) => `${city.name}, ${city.state}`),
  };
}

export function generateRoofingServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Roofing Contractor",
    name: "Roofing Services - Roof Repair & Roof Replacement",
    description: "Expert roofing contractor services including roof repair, roof replacement, and storm damage restoration in Norman and the OKC metro area",
    provider: {
      "@type": "GeneralContractor",
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      email: BUSINESS_INFO.email,
    },
    areaServed: CITIES.map((city) => ({
      "@type": "City",
      name: `${city.name}, ${city.state}`,
    })),
  };
}

export function generateReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: TESTIMONIAL.author,
    },
    reviewBody: TESTIMONIAL.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    itemReviewed: {
      "@type": "LocalBusiness",
      name: BUSINESS_INFO.name,
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
