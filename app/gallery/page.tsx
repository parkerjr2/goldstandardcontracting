import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Project Gallery | Gold Standard Contracting",
  description:
    "View our completed roofing, siding, window, and remodeling projects in Norman and the OKC metro area.",
};

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1632778742584-dbac5e718e06?w=800&q=80",
    alt: "Professional roof installation in progress",
    category: "Roofing",
  },
  {
    url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    alt: "Completed residential roofing project",
    category: "Roofing",
  },
  {
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "New shingle roof installation",
    category: "Roofing",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Modern home exterior with new siding",
    category: "Exterior",
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Beautiful home with updated exterior",
    category: "Exterior",
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    alt: "Quality home construction and improvement",
    category: "Exterior",
  },
  {
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    alt: "Roofer working on residential roof",
    category: "Roofing",
  },
  {
    url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    alt: "Professional roofing contractor at work",
    category: "Roofing",
  },
  {
    url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    alt: "Modern residential property",
    category: "Exterior",
  },
  {
    url: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    alt: "Home improvement and renovation",
    category: "Remodeling",
  },
  {
    url: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
    alt: "Interior remodeling project",
    category: "Remodeling",
  },
  {
    url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    alt: "Quality construction work",
    category: "Remodeling",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-gsc-bg via-gsc-surface to-gsc-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gsc-text">
            Our Work
          </h1>
          <p className="text-xl text-gsc-muted">
            Take a look at some of our completed roofing, siding, window, and remodeling projects throughout the OKC metro area.
          </p>
        </div>
      </Section>

      <Section className="bg-gsc-bg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-gsc-border hover:border-gsc-gold transition-all duration-300"
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gsc-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-3 py-1 bg-gsc-gold text-gsc-bg text-sm font-semibold rounded-full">
                    {image.category}
                  </span>
                  <p className="mt-2 text-sm text-gsc-text">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-gsc-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gsc-text">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gsc-muted mb-8">
            Let's bring your vision to life with the same quality and craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get a Free Estimate
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Our Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
