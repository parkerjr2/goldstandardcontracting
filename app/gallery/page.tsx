import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GalleryGrid } from "@/components/GalleryGrid";
import { getGalleryImages } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Project Gallery | Roofing & Remodeling Work",
  description:
    "View our completed roofing, siding, window, and remodeling projects throughout Norman and the OKC metro area.",
};

export const revalidate = 3600; // ISR - revalidate every hour

export default async function GalleryPage() {
  const images = await getGalleryImages();

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
        {images.length > 0 ? (
          <GalleryGrid images={images} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gsc-muted text-lg">
              No gallery images available yet. Check back soon!
            </p>
          </div>
        )}
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
