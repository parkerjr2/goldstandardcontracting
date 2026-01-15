import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Window Replacement in Norman & OKC Metro",
  description:
    "Energy-efficient window replacement and installation services. Improve comfort and reduce energy costs. Serving the OKC metro area.",
};

const windowFAQs = [
  {
    question: "How do I know if I need new windows?",
    answer:
      "Signs include drafts, condensation between panes, difficulty opening or closing, high energy bills, and visible damage. We provide free assessments to evaluate your windows and recommend solutions.",
  },
  {
    question: "What are the benefits of energy-efficient windows?",
    answer:
      "Energy-efficient windows reduce heating and cooling costs, improve indoor comfort, reduce outside noise, and can increase your home's value. They pay for themselves over time through energy savings.",
  },
  {
    question: "How long does window installation take?",
    answer:
      "Most window replacement projects can be completed in 1-2 days depending on the number of windows. We work efficiently to minimize disruption to your daily routine.",
  },
  {
    question: "Do you offer different window styles?",
    answer:
      "Yes, we install various styles including double-hung, casement, sliding, bay, and bow windows. We'll help you choose styles that match your home's architecture and your preferences.",
  },
  {
    question: "Will new windows really reduce my energy bills?",
    answer:
      "Yes, quality replacement windows can reduce energy costs by 10-25% depending on your current windows and home. Modern low-E glass and proper insulation make a significant difference.",
  },
];

export default function WindowsPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-gsc-bg via-gsc-surface to-gsc-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gsc-text">
            Window Replacement
          </h1>
          <p className="text-xl text-gsc-muted mb-8">
            Improve energy efficiency, comfort, and curb appeal with quality replacement windows.
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
              Window Services
            </h2>
            <ul className="space-y-4">
              {[
                "Energy-efficient window replacement",
                "New construction window installation",
                "Custom window solutions",
                "Professional installation and sealing",
                "Trim and finish work",
                "Window style consultation",
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
              Window Benefits
            </h3>
            <ul className="space-y-3 text-gsc-muted">
              <li>• Lower energy bills</li>
              <li>• Improved indoor comfort</li>
              <li>• Noise reduction</li>
              <li>• Enhanced home value</li>
              <li>• UV protection</li>
              <li>• Easy operation and maintenance</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-gsc-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gsc-text">
              Window FAQs
            </h2>
          </div>
          <FAQAccordion items={windowFAQs} />
        </div>
      </Section>

      <Section className="bg-gsc-bg">
        <CTABanner title="Ready for New Windows?" />
      </Section>
    </>
  );
}
