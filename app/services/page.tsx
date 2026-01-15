import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABanner } from "@/components/CTABanner";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services | Roofing, Siding, Windows & Remodeling",
  description:
    "Gold Standard Contracting offers comprehensive roofing, siding, window replacement, and remodeling services in the OKC metro area.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gsc-bg via-gsc-surface to-gsc-bg">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gsc-text">
            Our Services
          </h1>
          <p className="text-xl text-gsc-muted">
            From roofing to complete home remodeling, we provide expert craftsmanship and clear communication on every project.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-gsc-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      </Section>

      {/* Not Sure CTA */}
      <Section className="bg-gsc-surface">
        <CTABanner
          title="Not Sure What You Need?"
          subtitle="Contact us for a free consultation and honest assessment"
        />
      </Section>
    </>
  );
}
