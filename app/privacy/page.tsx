import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Gold Standard Contracting.",
};

export default function PrivacyPage() {
  return (
    <Section className="bg-gsc-bg">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl font-bold mb-8 text-gsc-text">Privacy Policy</h1>

        <div className="text-gsc-muted space-y-6">
          <p>Last updated: January 15, 2026</p>

          <h2 className="text-2xl font-bold text-gsc-text mt-8">Information We Collect</h2>
          <p>
            When you contact {BUSINESS_INFO.name} for estimates or services, we collect information you provide such as your name, phone number, email address, and project details.
          </p>

          <h2 className="text-2xl font-bold text-gsc-text mt-8">How We Use Your Information</h2>
          <p>We use the information you provide to:</p>
          <ul>
            <li>Respond to your inquiries and provide estimates</li>
            <li>Schedule and perform requested services</li>
            <li>Communicate about your project</li>
            <li>Improve our services</li>
          </ul>

          <h2 className="text-2xl font-bold text-gsc-text mt-8">Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist in our operations, but they are obligated to keep your information confidential.
          </p>

          <h2 className="text-2xl font-bold text-gsc-text mt-8">Contact Information</h2>
          <p>
            If you have questions about this privacy policy, please contact us at:
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
