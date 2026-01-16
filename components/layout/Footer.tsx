import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { BUSINESS_INFO, CITIES, SERVICES, SOCIAL_LINKS } from "@/lib/constants";
import { formatPhoneLink } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const primaryCities = CITIES.filter((city) => city.isPrimary);

  return (
    <footer className="bg-gsc-surface border-t border-gsc-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gsc-gold text-gsc-bg font-bold text-xl">
                GS
              </div>
              <div>
                <div className="text-gsc-text font-heading font-bold text-lg leading-tight">
                  Gold Standard
                </div>
                <div className="text-gsc-muted text-xs">Contracting</div>
              </div>
            </div>
            <p className="text-gsc-muted mb-4 text-sm">
              Premium craftsmanship and clear communication — from concept to completion.
            </p>
            <p className="text-gsc-gold font-semibold text-sm mb-2">
              {BUSINESS_INFO.license}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gsc-text font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gsc-muted hover:text-gsc-gold transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-gsc-text font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {primaryCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/service-areas/${city.slug}`}
                    className="text-gsc-muted hover:text-gsc-gold transition-colors text-sm"
                  >
                    {city.name}, {city.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-gsc-gold hover:text-gsc-gold-dark transition-colors text-sm font-semibold"
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gsc-text font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}
                  className="text-gsc-muted hover:text-gsc-gold transition-colors flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-gsc-muted hover:text-gsc-gold transition-colors flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">{BUSINESS_INFO.email}</span>
                </a>
              </li>
              <li className="pt-2">
                <div className="flex space-x-4">
                  <a
                    href={SOCIAL_LINKS.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gsc-muted hover:text-gsc-gold transition-colors"
                    aria-label="Facebook"
                  >
                    Facebook
                  </a>
                  <a
                    href={SOCIAL_LINKS.yelp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gsc-muted hover:text-gsc-gold transition-colors"
                    aria-label="Yelp"
                  >
                    Yelp
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gsc-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gsc-muted text-sm">
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gsc-muted hover:text-gsc-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gsc-muted hover:text-gsc-gold transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
