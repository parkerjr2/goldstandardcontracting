"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS_INFO } from "@/lib/constants";
import { formatPhoneLink } from "@/lib/utils";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-gsc-bg/95 backdrop-blur-lg shadow-lg border-b border-gsc-border"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gsc-gold text-gsc-bg font-bold text-xl">
              GS
            </div>
            <div className="hidden sm:block">
              <div className="text-gsc-text font-heading font-bold text-lg leading-tight">
                Gold Standard
              </div>
              <div className="text-gsc-muted text-xs">Contracting</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors duration-200",
                  pathname === item.href
                    ? "text-gsc-gold"
                    : "text-gsc-text hover:text-gsc-gold"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Phone CTA Button */}
          <div className="flex items-center space-x-4">
            <a
              href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-gsc-gold text-gsc-bg font-semibold rounded-lg hover:bg-gsc-gold-dark transition-colors duration-200"
            >
              Call {BUSINESS_INFO.phone}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gsc-text hover:text-gsc-gold transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gsc-border">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-2 text-base font-medium rounded-lg transition-colors duration-200",
                    pathname === item.href
                      ? "text-gsc-gold bg-gsc-gold/10"
                      : "text-gsc-text hover:text-gsc-gold hover:bg-gsc-surface"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}
                className="sm:hidden px-4 py-3 bg-gsc-gold text-gsc-bg font-semibold rounded-lg hover:bg-gsc-gold-dark transition-colors duration-200 text-center"
              >
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
