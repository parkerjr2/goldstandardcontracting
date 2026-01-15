import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Siding Installation & Repair in Norman & OKC Metro",
  description:
    "Professional siding installation, replacement, and repair services. Vinyl, fiber cement, and more. Serving the OKC metro area.",
};

const sidingFAQs = [
  {
    question: "What types of siding do you install?",
    answer:
      "We install vinyl siding, fiber cement siding, and composite siding systems. Each material has different benefits in terms of durability, maintenance, and aesthetics. We'll help you choose the best option for your home and budget.",
  },
  {
    question: "How long does siding last?",
    answer:
      "Quality vinyl siding can last 20-30 years, while fiber cement siding can last 50+ years with proper maintenance. The longevity depends on the material, installation quality, and Oklahoma's weather conditions.",
  },
  {
    question: "Can you repair just damaged sections of siding?",
    answer:
      "Yes, we can often repair isolated damage without replacing all the siding. However, if your siding is older or extensively damaged, replacement may be more cost-effective long-term.",
  },
  {
    question: "Will new siding improve my home's energy efficiency?",
    answer:
      "Yes, new siding with proper insulation can significantly improve your home's energy efficiency by reducing air leaks and providing better temperature regulation.",
  },
  {
    question: "How long does siding installation take?",
    answer:
      "Most residential siding projects take 1-2 weeks depending on the size of your home and the scope of work. We'll provide a detailed timeline during your estimate.",
  },
];

export default function SidingPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-gsc-bg via-gsc-surface to-gsc-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gsc-text">
            Siding Installation & Repair
          </h1>
          <p className="text-xl text-gsc-muted mb-8">
            Protect your home and enhance its curb appeal with professional siding services.
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
              Siding Services
            </h2>
            <ul className="space-y-4">
              {[
                "Complete siding installation",
                "Siding replacement and upgrades",
                "Damage repair and restoration",
                "Weather protection solutions",
                "Trim and fascia work",
                "Color and material consultation",
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
              Why Upgrade Your Siding?
            </h3>
            <ul className="space-y-3 text-gsc-muted">
              <li>• Enhanced curb appeal and home value</li>
              <li>• Better energy efficiency</li>
              <li>• Protection from Oklahoma weather</li>
              <li>• Low maintenance options</li>
              <li>• Improved moisture resistance</li>
              <li>• Modern color and style options</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-gsc-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gsc-text">
              Siding FAQs
            </h2>
          </div>
          <FAQAccordion items={sidingFAQs} />
        </div>
      </Section>

      <Section className="bg-gsc-bg">
        <CTABanner title="Ready to Upgrade Your Siding?" />
      </Section>
    </>
  );
}
