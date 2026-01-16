"use client";

import Image from "next/image";
import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";

interface GalleryImage {
  _id: string;
  title: string;
  image: any;
  category?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Get unique categories from images
  const categories: string[] = ["all", ...Array.from(new Set(images.map(img => img.category).filter(Boolean))) as string[]];

  const filteredImages = activeFilter === "all"
    ? images
    : images.filter((img) => img.category === activeFilter);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category: string) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 capitalize ${
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
        {filteredImages.map((image) => (
          <div
            key={image._id}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-gsc-border hover:border-gsc-gold transition-all duration-300"
          >
            <Image
              src={urlFor(image.image).width(800).url()}
              alt={image.image.alt || image.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gsc-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                {image.category && (
                  <span className="inline-block px-3 py-1 bg-gsc-gold text-gsc-bg text-sm font-semibold rounded-full capitalize">
                    {image.category}
                  </span>
                )}
                <p className="mt-2 text-sm text-gsc-text">{image.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
