import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/ContactForm";
import { BUSINESS_INFO, CITIES } from "@/lib/constants";
import { formatPhoneLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Estimate",
  description:
    "Contact Gold Standard Contracting for a free estimate on roofing, siding, windows, or remodeling. Serving the OKC metro area.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-gsc-bg via-gsc-surface to-gsc-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gsc-text">
            Get a Free Estimate
          </h1>
          <p className="text-xl text-gsc-muted">
            Contact us today to discuss your project. We respond quickly and provide honest assessments.
          </p>
        </div>
      </Section>

      <Section className="bg-gsc-bg">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <h2 className="text-2xl font-bold mb-6 text-gsc-text">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gsc-muted mb-1">
                    Phone
                  </h3>
                  <a
                    href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}
                    className="text-lg text-gsc-gold hover:text-gsc-gold-dark transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gsc-muted mb-1">
                    Email
                  </h3>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-lg text-gsc-gold hover:text-gsc-gold-dark transition-colors break-all"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gsc-muted mb-1">
                    License
                  </h3>
                  <p className="text-lg text-gsc-text">{BUSINESS_INFO.license}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gsc-muted mb-1">
                    Service Areas
                  </h3>
                  <p className="text-sm text-gsc-text">
                    {CITIES.map((city) => city.name).join(", ")}, OK
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gsc-muted mb-1">
                    Hours
                  </h3>
                  <p className="text-sm text-gsc-text">By appointment</p>
                </div>
              </div>
            </Card>

            {/* Call Now Card */}
            <Card className="bg-gsc-gold/10 border-gsc-gold">
              <h3 className="text-xl font-bold mb-4 text-gsc-text">
                Prefer to Call?
              </h3>
              <p className="text-sm text-gsc-muted mb-4">
                Speak with us directly to discuss your project
              </p>
              <a
                href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}
                className="inline-block w-full text-center px-6 py-3 bg-gsc-gold text-gsc-bg font-semibold rounded-lg hover:bg-gsc-gold-dark transition-colors"
              >
                Call {BUSINESS_INFO.phone}
              </a>
            </Card>
          </div>

          {/* Contact Form - Right Column */}
          <div className="lg:col-span-3">
            <Card>
              <h2 className="text-2xl font-bold mb-6 text-gsc-text">
                Send Us a Message
              </h2>
              <ContactForm />
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-gsc-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gsc-text">
            What Happens Next?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 rounded-full bg-gsc-gold text-gsc-bg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-gsc-text mb-2">We Respond</h3>
              <p className="text-sm text-gsc-muted">
                You&apos;ll hear from us within 24 hours
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-gsc-gold text-gsc-bg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-gsc-text mb-2">We Assess</h3>
              <p className="text-sm text-gsc-muted">
                Schedule an on-site visit to evaluate your needs
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-gsc-gold text-gsc-bg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-gsc-text mb-2">We Propose</h3>
              <p className="text-sm text-gsc-muted">
                Provide a detailed written estimate with clear pricing
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
