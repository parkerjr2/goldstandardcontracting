import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CITIES } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Roof Repair & Replacement in Norman & OKC Metro",
  description:
    "Expert roofing services including repair, replacement, and storm damage restoration. Serving Norman, Yukon, Moore, and the OKC metro area.",
};

const roofingFAQs = [
  {
    question: "How do I know if I need a roof repair or full replacement?",
    answer:
      "We provide honest assessments based on your roof's condition. Minor damage like a few missing shingles can often be repaired. However, extensive damage, multiple leaks, or an aging roof (20+ years) may require replacement. We'll walk you through your options and help you make the best decision for your home and budget.",
  },
  {
    question: "Do you handle insurance claims for storm damage?",
    answer:
      "Yes, we work with homeowners and insurance companies to document storm damage and provide detailed assessments. While we don't file claims on your behalf, we provide the documentation you need and can work with your adjuster to ensure accurate damage evaluation.",
  },
  {
    question: "How long does a roof replacement take?",
    answer:
      "Most residential roof replacements take 1-3 days depending on the size and complexity of your home. We provide a clear timeline during your estimate and keep you updated throughout the process.",
  },
  {
    question: "What types of roofing materials do you install?",
    answer:
      "We install asphalt shingles, architectural shingles, and composite roofing systems. During your consultation, we'll discuss the best options for your home, budget, and aesthetic preferences.",
  },
  {
    question: "Do you offer warranties on your roofing work?",
    answer:
      "Yes, our roofing installations include both manufacturer warranties on materials and our workmanship guarantee. We'll provide full warranty details in your written proposal.",
  },
  {
    question: "Can you repair just a section of my roof?",
    answer:
      "Absolutely. If the damage is localized, we can repair specific sections rather than replacing the entire roof. We'll assess the damage and provide an honest recommendation.",
  },
  {
    question: "What should I do if I discover a roof leak?",
    answer:
      "Contact us immediately for an inspection. In the meantime, place a bucket to catch water and try to identify the general area of the leak. Prompt action helps prevent additional interior damage.",
  },
];

export default function RoofingPage() {
  const primaryCities = CITIES.filter((city) => city.isPrimary).slice(0, 5);
  const schema = generateServiceSchema(
    "Roofing Services",
    "Professional roof repair, replacement, and storm damage restoration in the OKC metro area."
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gsc-bg via-gsc-surface to-gsc-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-gsc-gold/20 border border-gsc-gold rounded-full text-sm font-semibold text-gsc-gold">
            Licensed Roofing Contractor
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gsc-text">
            Roofing in Norman & OKC Metro
          </h1>
          <p className="text-xl text-gsc-muted mb-8">
            From emergency repairs to complete replacements, we provide expert roofing services you can trust.
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

      {/* What We Do */}
      <Section className="bg-gsc-bg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gsc-text">
              What We Do
            </h2>
            <ul className="space-y-4">
              {[
                "Roof repair and leak troubleshooting",
                "Complete roof replacement",
                "Storm damage assessment and restoration",
                "Shingle and component repairs",
                "Emergency roof repairs",
                "Roof inspections and maintenance",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-gsc-gold text-xl flex-shrink-0">✓</span>
                  <span className="text-gsc-text text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gsc-surface border border-gsc-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-gsc-text">
              Signs You May Need Roofing Help
            </h3>
            <ul className="space-y-3 text-gsc-muted">
              <li>• Missing, cracked, or curling shingles</li>
              <li>• Water stains on ceilings or walls</li>
              <li>• Granules collecting in gutters</li>
              <li>• Daylight visible through roof boards</li>
              <li>• Recent hail or wind storm damage</li>
              <li>• Roof age over 20 years</li>
              <li>• Sagging or uneven roof lines</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Honest Assessment */}
      <Section className="bg-gsc-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gsc-text">
            Honest Assessments, Clear Options
          </h2>
          <p className="text-lg text-gsc-muted mb-4">
            We believe in transparency. Not every roof problem requires a full replacement, and we'll never recommend work you don't need.
          </p>
          <p className="text-lg text-gsc-muted">
            During your free estimate, we'll assess your roof's condition, explain what we find, and provide clear options with upfront pricing. You'll know exactly what to expect before we start any work.
          </p>
        </div>
      </Section>

      {/* Service Areas */}
      <Section className="bg-gsc-bg">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gsc-text">
            Serving the OKC Metro
          </h2>
          <p className="text-lg text-gsc-muted mb-8">
            We provide roofing services throughout Norman, Yukon, Moore, and surrounding communities.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {primaryCities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="px-4 py-2 bg-gsc-surface border border-gsc-border rounded-lg text-gsc-text hover:border-gsc-gold hover:text-gsc-gold transition-all duration-200"
              >
                {city.name}
              </Link>
            ))}
            <Link
              href="/service-areas"
              className="px-4 py-2 bg-gsc-gold text-gsc-bg rounded-lg hover:bg-gsc-gold-dark transition-all duration-200 font-semibold"
            >
              View All Areas →
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-gsc-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gsc-text">
              Roofing Questions & Answers
            </h2>
            <p className="text-lg text-gsc-muted">
              Get answers to common roofing questions
            </p>
          </div>
          <FAQAccordion items={roofingFAQs} />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gsc-bg">
        <CTABanner
          title="Ready to Fix Your Roof?"
          subtitle="Schedule your free roofing assessment today"
        />
      </Section>
    </>
  );
}
