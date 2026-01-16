import { client } from '@/sanity/lib/client';

export async function getHomePage() {
  const query = `*[_type == "homePage"][0]{
    ...,
    servicesSection {
      ...,
      services[]-> {
        _id,
        name,
        "slug": slug.current,
        shortDescription,
        isPrimary
      }
    },
    testimonialsSection {
      ...,
      featuredTestimonial-> {
        _id,
        quote,
        author,
        title,
        rating
      }
    }
  }`;

  return await client.fetch(query, {}, { next: { revalidate: 3600 } });
}

export async function getAllServices() {
  return await client.fetch(
    `*[_type == "service"] | order(isPrimary desc, name asc)`
  );
}
