import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Bathroom Remodeling & General Construction in OKC Metro",
  description:
    "Professional remodeling services including bathroom remodels, flooring, and general construction. Serving Norman and the OKC metro area.",
};

const remodelingFAQs = [
  {
    question: "What types of remodeling projects do you handle?",
    answer:
      "We specialize in bathroom remodels, flooring installations, and general construction projects. From small updates to complete renovations, we work closely with you to bring your vision to life.",
  },
  {
    question: "Do you help with design and material selection?",
    answer:
      "Yes, we guide you through the entire process including design, material selection, and layout planning. We help you make decisions that fit your style, budget, and functional needs.",
  },
  {
    question: "How long does a typical bathroom remodel take?",
    answer:
      "Most bathroom remodels take 2-4 weeks depending on the scope of work. We provide a detailed timeline during your consultation and keep you updated throughout the project.",
  },
  {
    question: "Can you work with my existing floor plan?",
    answer:
      "Absolutely. We can work within your current layout or suggest modifications to improve functionality and flow. We'll discuss all options during your consultation.",
  },
  {
    question: "Do you handle permits and inspections?",
    answer:
      "Yes, we manage all necessary permits and coordinate inspections to ensure your project meets local building codes and regulations.",
  },
];

export default function RemodelingPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-gsc-bg via-gsc-surface to-gsc-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gsc-text">
            Remodeling & General Construction
          </h1>
          <p className="text-xl text-gsc-muted mb-8">
            From bathroom remodels to flooring installations, we bring quality craftsmanship to every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get a Free Estimate
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-gsc-bg">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gsc-text">
              Remodeling Services
            </h2>
            <ul className="space-y-4">
              {[
                "Complete bathroom remodels",
                "Flooring installation and replacement",
                "General construction projects",
                "Kitchen updates",
                "Interior renovations",
                "Custom carpentry work",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-gsc-gold text-xl">✓</span>
                  <span className="text-gsc-text text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gsc-surface border border-gsc-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-gsc-text">
              Our Approach
            </h3>
            <p className="text-gsc-muted mb-4">
              Tell us the scope — we&apos;ll guide the plan. Every remodeling project is unique, and we work closely with you from concept to completion.
            </p>
            <ul className="space-y-3 text-gsc-muted">
              <li>• Detailed planning and design</li>
              <li>• Clear timeline and budget</li>
              <li>• Quality materials and craftsmanship</li>
              <li>• Clean and organized job sites</li>
              <li>• Regular communication</li>
              <li>• Attention to every detail</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-gsc-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gsc-text">
              Remodeling FAQs
            </h2>
          </div>
          <FAQAccordion items={remodelingFAQs} />
        </div>
      </Section>

      <Section className="bg-gsc-bg">
        <CTABanner
          title="Ready to Start Your Project?"
          subtitle="Let's discuss your remodeling vision"
        />
      </Section>
    </>
  );
}
