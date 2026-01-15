import { BUSINESS_INFO, CITIES, SOCIAL_LINKS, TESTIMONIAL } from "./constants";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: BUSINESS_INFO.name,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    areaServed: CITIES.map((city) => ({
      "@type": "City",
      name: city.name,
      addressRegion: city.state,
    })),
    sameAs: [SOCIAL_LINKS.facebook.url, SOCIAL_LINKS.yelp.url],
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
    areaServed: CITIES.map((city) => ({
      "@type": "City",
      name: city.name,
      addressRegion: city.state,
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
