import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CityCard } from "@/components/CityCard";
import { CTABanner } from "@/components/CTABanner";
import { CITIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas | Roofing Contractor in the OKC Metro",
  description:
    "Gold Standard Contracting serves Norman, Yukon, Moore, Edmond, and surrounding communities in the OKC metro with professional roofing and exterior services.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-gsc-bg via-gsc-surface to-gsc-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gsc-text">
            Areas We Serve
          </h1>
          <p className="text-xl text-gsc-muted">
            Proudly serving homeowners throughout the OKC metro area with expert roofing, siding, windows, and remodeling services.
          </p>
        </div>
      </Section>

      <Section className="bg-gsc-bg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CITIES.map((city) => (
            <CityCard key={city.slug} {...city} />
          ))}
        </div>
      </Section>

      <Section className="bg-gsc-surface">
        <CTABanner
          title="Don't See Your City?"
          subtitle="Contact us to see if we serve your area"
        />
      </Section>
    </>
  );
}
