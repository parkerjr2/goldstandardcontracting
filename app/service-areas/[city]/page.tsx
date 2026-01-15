import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/CTABanner";
import { CITIES, SERVICES } from "@/lib/constants";
import { CITY_CONTENT } from "@/lib/cities";

interface CityPageProps {
  params: {
    city: string;
  };
}

export async function generateStaticParams() {
  return CITIES.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = CITIES.find((c) => c.slug === params.city);

  if (!city) {
    return {
      title: "City Not Found",
    };
  }

  return {
    title: `Roofing Contractor in ${city.name}, OK | Gold Standard Contracting`,
    description: `Professional roofing contractor serving ${city.name}, Oklahoma. Roof repair, replacement, siding, windows, and remodeling services. Licensed contractor with quality craftsmanship.`,
  };
}

export default function CityPage({ params }: CityPageProps) {
  const city = CITIES.find((c) => c.slug === params.city);
  const content = CITY_CONTENT[params.city];

  if (!city || !content) {
    notFound();
  }

  return (
    <>
      <Section className="bg-gradient-to-br from-gsc-bg via-gsc-surface to-gsc-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-gsc-gold/20 border border-gsc-gold rounded-full text-sm font-semibold text-gsc-gold">
            Serving {city.name}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gsc-text">
            Roofing Contractor Services in {city.name}, OK
          </h1>
          <p className="text-xl text-gsc-muted mb-8">
            Licensed roofing and exterior contractor serving {city.name} and the OKC metro area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get a Free Estimate
            </Button>
            <Button href="tel:+14052781984" variant="outline" size="lg">
              Call (405) 278-1984
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-gsc-bg">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            {content.description.map((paragraph, index) => (
              <p key={index} className="text-lg text-gsc-muted mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gsc-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gsc-text">
            Services in {city.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-gsc-bg border border-gsc-border rounded-lg p-6 hover:border-gsc-gold transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gsc-text group-hover:text-gsc-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gsc-muted">
                    Learn more →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gsc-bg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gsc-text">
            Popular Projects in {city.name}
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {content.popularProjects.map((project, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 bg-gsc-surface border border-gsc-border rounded-lg p-4"
              >
                <span className="text-gsc-gold text-xl flex-shrink-0">✓</span>
                <span className="text-gsc-text">{project}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-gsc-surface">
        <CTABanner
          title={`Ready to Start Your ${city.name} Project?`}
          subtitle="Contact us for a free consultation and estimate"
        />
      </Section>
    </>
  );
}
