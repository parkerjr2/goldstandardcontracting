import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    url: "https://goldstandardcontracting.com",
    siteName: "Gold Standard Contracting",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=630&q=80&fit=crop",
        width: 1200,
        height: 630,
        alt: "Professional roofing contractor working on residential roof installation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Contractor in Norman, OK | Gold Standard Contracting",
    description:
      "Gold Standard Contracting is a licensed roofing contractor serving Norman and the OKC metro. Roof repair, replacement, and storm damage help.",
    images: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=630&q=80&fit=crop"],
  },
};

export default function HomePage() {
  const primaryCities = CITIES.filter((city) => city.isPrimary).slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gsc-bg via-gsc-surface to-gsc-bg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text & CTAs */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6 px-4 py-2 bg-gsc-gold/20 border border-gsc-gold rounded-full text-sm font-semibold text-gsc-gold">
              {BUSINESS_INFO.license}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gsc-text leading-tight">
              Roofing Contractor in Norman & OKC Metro
            </h1>
            <p className="text-xl md:text-2xl text-gsc-muted mb-8 leading-relaxed">
              From roof repairs and roof replacements to storm damage inspections, Gold Standard Contracting helps homeowners across Norman and the OKC metro protect their homes with quality craftsmanship and clear communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
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

            {/* Trust Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-gsc-border">
              <div className="text-center lg:text-left">
                <div className="text-gsc-gold text-2xl font-bold mb-1">Licensed</div>
                <div className="text-sm text-gsc-muted">CIB #0007026</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-gsc-gold text-2xl font-bold mb-1">Local</div>
                <div className="text-sm text-gsc-muted">OKC Metro</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-gsc-gold text-2xl font-bold mb-1">Quality</div>
                <div className="text-sm text-gsc-muted">Craftsmanship</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-gsc-gold text-2xl font-bold mb-1">Clear</div>
                <div className="text-sm text-gsc-muted">Communication</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80"
              alt="Professional roofing contractor working on residential roof installation"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
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

      {/* Roofing-Focused Section */}
      <Section className="bg-gsc-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gsc-text">
              Roof Repair & Roof Replacement in Norman, OK
            </h2>
            <p className="text-lg text-gsc-muted max-w-3xl mx-auto">
              Whether you're dealing with a leaky roof, storm damage, or an aging roof that needs replacement, our team provides honest inspections and quality workmanship. We regularly complete roofing projects in Norman, Yukon, Moore, Mustang, Edmond, and surrounding OKC metro communities.
            </p>
          </div>

          {/* Image + Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Left: Supporting Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80"
                alt="Completed residential roofing project"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Right: Bullet List */}
            <div className="space-y-6">
              <ul className="space-y-4">
                {[
                  "Roof repairs for leaks and damage",
                  "Full roof replacements",
                  "Storm damage assessments",
                  "Honest inspections and recommendations",
                  "Clean, professional job sites",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-gsc-gold text-xl flex-shrink-0 mt-1">✓</span>
                    <span className="text-gsc-text text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Button href="/services/roofing" variant="primary" size="lg">
                  Learn About Our Roofing Services
                </Button>
              </div>
            </div>
          </div>

          {/* When to Call Card */}
          <div className="bg-gsc-bg border border-gsc-border rounded-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-gsc-gold flex-shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gsc-text">
                When to Call a Roofing Contractor
              </h3>
            </div>
            <ul className="space-y-3 text-gsc-muted ml-12">
              <li>• Visible leaks or water stains inside your home</li>
              <li>• Missing, cracked, or curling shingles</li>
              <li>• Recent hail or wind storm damage</li>
              <li>• Your roof is 20+ years old</li>
              <li>• Granules collecting in gutters</li>
              <li>• Sagging or uneven roof sections</li>
            </ul>
          </div>
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

      {/* Gallery Preview Section */}
      <Section className="bg-gsc-surface">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gsc-text">
            Recent Projects
          </h2>
          <p className="text-lg text-gsc-muted max-w-3xl mx-auto">
            See examples of our quality craftsmanship and attention to detail.
          </p>
        </div>

        {/* Gallery Preview Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
              alt: "Professional roof installation",
            },
            {
              url: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&q=80",
              alt: "Completed roofing project",
            },
            {
              url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
              alt: "Modern home exterior",
            },
            {
              url: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80",
              alt: "Home remodeling project",
            },
          ].map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg border border-gsc-border hover:border-gsc-gold transition-all duration-300 group"
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/gallery" variant="primary" size="lg">
            View Full Gallery
          </Button>
        </div>
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
        <div className="flex flex-wrap justify-center gap-4 mb-8 max-w-5xl mx-auto">
          {primaryCities.map((city) => (
            <div key={city.slug} className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.667rem)] lg:w-[calc(16.666%-0.833rem)]">
              <CityCard {...city} />
            </div>
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
