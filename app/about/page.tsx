import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TrustBadges } from "@/components/TrustBadges";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Licensed Roofing Contractor",
  description:
    "Learn about Gold Standard Contracting - a licensed roofing and exterior contractor serving the OKC metro with quality craftsmanship and clear communication.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-gsc-bg via-gsc-surface to-gsc-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gsc-text">
            About Gold Standard Contracting
          </h1>
          <p className="text-xl text-gsc-muted">
            {BUSINESS_INFO.tagline}
          </p>
        </div>
      </Section>

      <Section className="bg-gsc-bg">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gsc-text">What We Do</h2>
            <p className="text-lg text-gsc-muted mb-6">
              Gold Standard Contracting is a licensed Oklahoma contractor specializing in roofing, siding, window replacement, and remodeling services throughout the OKC metro area. We serve homeowners in Norman, Yukon, Moore, Edmond, and surrounding communities with professional craftsmanship and honest service.
            </p>
            <p className="text-lg text-gsc-muted mb-6">
              Whether you&apos;re dealing with storm damage, planning a home improvement project, or need emergency repairs, we provide expert guidance and quality work you can trust. Our services include roof repair and replacement, siding installation, energy-efficient windows, bathroom remodels, flooring, and general construction.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gsc-text mt-12">How We Work</h2>
            <p className="text-lg text-gsc-muted mb-6">
              From concept to completion, we work closely with you every step of the way. Our process begins with a thorough assessment and honest consultation. We provide detailed written proposals with clear timelines and transparent pricing — no surprises, no hidden costs.
            </p>
            <p className="text-lg text-gsc-muted mb-6">
              During construction, we maintain clean job sites and open communication. We keep you informed of progress, address questions promptly, and ensure you&apos;re satisfied with every detail. Our final walkthrough confirms that the work meets your expectations before we consider the project complete.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gsc-text mt-12">Our Commitment</h2>
            <p className="text-lg text-gsc-muted mb-6">
              We believe in doing the job right. That means quality materials, skilled workmanship, and honest recommendations. If you don&apos;t need a full replacement, we&apos;ll tell you. If there&apos;s a better solution for your budget, we&apos;ll present it. Our reputation is built on integrity and the long-term satisfaction of our customers.
            </p>
            <p className="text-lg text-gsc-muted mb-6">
              As a licensed contractor ({BUSINESS_INFO.license}), we meet all Oklahoma building codes and regulations. We&apos;re properly insured, and we stand behind our work. When you hire Gold Standard Contracting, you&apos;re hiring a team committed to excellence.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-gsc-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gsc-text">
            Why Choose Us
          </h2>
          <TrustBadges />
        </div>
      </Section>

      <Section className="bg-gsc-bg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gsc-text">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gsc-muted mb-8">
            Contact us today for a free estimate on your roofing, siding, window, or remodeling project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get a Free Estimate
            </Button>
            <Button href="tel:+14052781994" variant="outline" size="lg">
              Call {BUSINESS_INFO.phone}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
