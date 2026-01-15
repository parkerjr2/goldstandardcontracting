import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { CityCard } from "@/components/CityCard";
import { Testimonial } from "@/components/Testimonial";
import { CTABanner } from "@/components/CTABanner";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TrustBadges } from "@/components/TrustBadges";
import { SERVICES, CITIES, BUSINESS_INFO } from "@/lib/constants";
import { formatPhoneLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Roofing Contractor in Norman, OK | Gold Standard Contracting",
  description:
    "Gold Standard Contracting is a licensed roofing contractor serving Norman and the OKC metro. Roof repair, replacement, and storm damage help.",
  openGraph: {
    title: "Roofing Contractor in Norman, OK | Gold Standard Contracting",
    description:
      "Gold Standard Contracting is a licensed roofing contractor serving Norman and the OKC metro. Roof repair, replacement, and storm damage help.",
  },
};

export default function HomePage() {
  const primaryCities = CITIES.filter((city) => city.isPrimary).slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gsc-bg via-gsc-surface to-gsc-bg relative overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNENEFGMzciIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 bg-gsc-gold/20 border border-gsc-gold rounded-full text-sm font-semibold text-gsc-gold">
            {BUSINESS_INFO.license}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gsc-text leading-tight">
            Roofing Contractor in Norman & OKC Metro
          </h1>
          <p className="text-xl md:text-2xl text-gsc-muted mb-8 leading-relaxed">
            {BUSINESS_INFO.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get a Free Estimate
            </Button>
            <Button
              href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}
              variant="outline"
              size="lg"
            >
              Call {BUSINESS_INFO.phone}
            </Button>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-gsc-bg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gsc-text">
            Professional Roofing Contractor Services
          </h2>
          <p className="text-lg text-gsc-muted max-w-3xl mx-auto">
            As a trusted roofing contractor, we offer comprehensive exterior services to protect and enhance your home.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-gsc-surface">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gsc-text">
            Why Choose Gold Standard Contracting
          </h2>
          <p className="text-lg text-gsc-muted max-w-3xl mx-auto">
            We bring professionalism, quality, and clear communication to every project.
          </p>
        </div>
        <TrustBadges />
      </Section>

      {/* Process Section */}
      <Section className="bg-gsc-bg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gsc-text">
            Our Process
          </h2>
          <p className="text-lg text-gsc-muted max-w-3xl mx-auto">
            From your first call to final walkthrough, we make the process straightforward and stress-free.
          </p>
        </div>
        <ProcessSteps />
      </Section>

      {/* Testimonial Section */}
      <Section className="bg-gsc-surface">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gsc-text">
            What Our Customers Say
          </h2>
        </div>
        <Testimonial />
      </Section>

      {/* Service Areas Section */}
      <Section className="bg-gsc-bg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gsc-text">
            Serving the OKC Metro Area
          </h2>
          <p className="text-lg text-gsc-muted max-w-3xl mx-auto">
            Proudly serving Norman, Yukon, Moore, and surrounding communities with expert roofing and exterior services.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {primaryCities.map((city) => (
            <CityCard key={city.slug} {...city} />
          ))}
        </div>
        <div className="text-center">
          <Button href="/service-areas" variant="outline" size="lg">
            View All Service Areas
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gsc-surface">
        <CTABanner />
      </Section>
    </>
  );
}
