import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Gold Standard Contracting.",
};

export default function TermsPage() {
  return (
    <Section className="bg-gsc-bg">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl font-bold mb-8 text-gsc-text">Terms of Service</h1>

        <div className="text-gsc-muted space-y-6">
          <p>Last updated: January 15, 2026</p>

          <h2 className="text-2xl font-bold text-gsc-text mt-8">Services</h2>
          <p>
            {BUSINESS_INFO.name} provides roofing, siding, window replacement, and remodeling services to residential customers in the OKC metro area. All work is performed in accordance with Oklahoma building codes and regulations.
          </p>

          <h2 className="text-2xl font-bold text-gsc-text mt-8">Estimates</h2>
          <p>
            We provide free estimates for our services. Estimates are based on the information available at the time of inspection and are subject to change if additional work or materials are required.
          </p>

          <h2 className="text-2xl font-bold text-gsc-text mt-8">Licensing</h2>
          <p>
            {BUSINESS_INFO.name} is a licensed Oklahoma contractor ({BUSINESS_INFO.license}). We maintain appropriate insurance coverage for all work performed.
          </p>

          <h2 className="text-2xl font-bold text-gsc-text mt-8">Warranty</h2>
          <p>
            We stand behind our work and provide warranties on both materials and workmanship. Specific warranty terms will be outlined in your service agreement.
          </p>

          <h2 className="text-2xl font-bold text-gsc-text mt-8">Disclaimer</h2>
          <p>
            While we strive for accuracy, information on this website is for general guidance only. Actual services, pricing, and availability may vary. Contact us directly for specific project details.
          </p>

          <h2 className="text-2xl font-bold text-gsc-text mt-8">Contact</h2>
          <p>
            For questions about these terms, please contact us:
          </p>
          <ul>
            <li>Phone: {BUSINESS_INFO.phone}</li>
            <li>Email: {BUSINESS_INFO.email}</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
