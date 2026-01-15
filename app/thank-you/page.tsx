import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { BUSINESS_INFO } from "@/lib/constants";
import { formatPhoneLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Thank You | Gold Standard Contracting",
  description: "Thank you for contacting Gold Standard Contracting. We'll be in touch soon.",
};

export default function ThankYouPage() {
  return (
    <Section className="bg-gradient-to-br from-gsc-bg via-gsc-surface to-gsc-bg min-h-[80vh] flex items-center">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full bg-gsc-gold text-gsc-bg flex items-center justify-center text-4xl mx-auto mb-6">
            ✓
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gsc-text">
            Thank You!
          </h1>
          <p className="text-xl text-gsc-muted mb-8">
            We&apos;ve received your message and will respond within 24 hours.
          </p>
        </div>

        <div className="bg-gsc-surface border border-gsc-border rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gsc-text">
            What Happens Next?
          </h2>
          <ul className="text-left space-y-4 text-gsc-muted max-w-md mx-auto">
            <li className="flex items-start space-x-3">
              <span className="text-gsc-gold text-xl flex-shrink-0">1.</span>
              <span>We&apos;ll review your request and contact you to discuss your project</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-gsc-gold text-xl flex-shrink-0">2.</span>
              <span>Schedule a free on-site assessment at your convenience</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-gsc-gold text-xl flex-shrink-0">3.</span>
              <span>Receive a detailed written estimate with clear pricing</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-gsc-muted">Need immediate assistance?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}
              variant="primary"
              size="lg"
            >
              Call {BUSINESS_INFO.phone}
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Our Services
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
