"use client";

import Image from "next/image";
import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GALLERY_IMAGES } from "@/lib/gallery";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Roofing", "Exterior", "Remodeling"];

  const filteredImages = activeFilter === "All"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

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
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                activeFilter === category
                  ? "bg-gsc-gold text-gsc-bg"
                  : "bg-gsc-surface text-gsc-muted border border-gsc-border hover:border-gsc-gold"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
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
