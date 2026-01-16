import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { CityCard } from "@/components/CityCard";
import { Testimonial } from "@/components/Testimonial";
import { CTABanner } from "@/components/CTABanner";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TrustBadges } from "@/components/TrustBadges";
import { CITIES, BUSINESS_INFO } from "@/lib/constants";
import { formatPhoneLink } from "@/lib/utils";
import { getHomePage } from "@/lib/sanity";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 3600; // ISR - revalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  const homePage = await getHomePage();

  return {
    title: homePage.seo.title,
    description: homePage.seo.description,
    openGraph: {
      title: homePage.seo.title,
      description: homePage.seo.description,
      url: "https://goldstandardcontracting.com",
      siteName: "Gold Standard Contracting",
      images: homePage.seo.ogImage
        ? [
            {
              url: urlFor(homePage.seo.ogImage).width(1200).height(630).url(),
              width: 1200,
              height: 630,
            },
          ]
        : [],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: homePage.seo.title,
      description: homePage.seo.description,
      images: homePage.seo.ogImage
        ? [urlFor(homePage.seo.ogImage).width(1200).height(630).url()]
        : [],
    },
  };
}

export default async function HomePage() {
  const homePage = await getHomePage();
  const primaryCities = CITIES.filter((city) => city.isPrimary).slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gsc-bg via-gsc-surface to-gsc-bg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text & CTAs */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6 px-4 py-2 bg-gsc-gold/20 border border-gsc-gold rounded-full text-sm font-semibold text-gsc-gold">
              {homePage.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gsc-text leading-tight">
              {homePage.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-gsc-muted mb-8 leading-relaxed">
              {homePage.hero.subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button href={homePage.hero.primaryCTA.url} variant="primary" size="lg">
                {homePage.hero.primaryCTA.text}
              </Button>
              <Button
                href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}
                variant="outline"
                size="lg"
              >
                {homePage.hero.secondaryCTA.text} {BUSINESS_INFO.phone}
              </Button>
            </div>

            {/* Trust Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-gsc-border">
              {homePage.hero.trustBar.map((item: { title: string; subtitle: string }, index: number) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-gsc-gold text-2xl font-bold mb-1">{item.title}</div>
                  <div className="text-sm text-gsc-muted">{item.subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={homePage.hero.heroImage?.asset ? urlFor(homePage.hero.heroImage).width(1200).url() : "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80"}
              alt={homePage.hero.heroImage?.alt || "Professional roofing contractor working on residential roof installation"}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-gsc-bg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gsc-text">
            {homePage.servicesSection.title}
          </h2>
          <p className="text-lg text-gsc-muted max-w-3xl mx-auto">
            {homePage.servicesSection.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homePage.servicesSection.services.map((service: any) => (
            <ServiceCard key={service._id} {...service} />
          ))}
        </div>
      </Section>

      {/* Roofing-Focused Section */}
      <Section className="bg-gsc-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gsc-text">
              {homePage.roofingSection.title}
            </h2>
            <p className="text-lg text-gsc-muted max-w-3xl mx-auto">
              {homePage.roofingSection.description}
            </p>
          </div>

          {/* Image + Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Left: Supporting Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={homePage.roofingSection.image?.asset ? urlFor(homePage.roofingSection.image).width(800).url() : "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80"}
                alt={homePage.roofingSection.image?.alt || "Completed residential roofing project"}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Right: Bullet List */}
            <div className="space-y-6">
              <ul className="space-y-4">
                {homePage.roofingSection.bulletPoints.map((item: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-gsc-gold text-xl flex-shrink-0 mt-1">✓</span>
                    <span className="text-gsc-text text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Button href={homePage.roofingSection.cta.url} variant="primary" size="lg">
                  {homePage.roofingSection.cta.text}
                </Button>
              </div>
            </div>
          </div>

          {/* When to Call Card */}
          <div className="bg-gsc-bg border border-gsc-border rounded-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-gsc-gold flex-shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gsc-text">
                {homePage.roofingSection.whenToCallCard.title}
              </h3>
            </div>
            <ul className="space-y-3 text-gsc-muted ml-12">
              {homePage.roofingSection.whenToCallCard.items.map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-gsc-surface">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gsc-text">
            {homePage.whyChooseSection.title}
          </h2>
          <p className="text-lg text-gsc-muted max-w-3xl mx-auto">
            {homePage.whyChooseSection.description}
          </p>
        </div>
        <TrustBadges points={homePage.whyChooseSection.trustPoints} />
      </Section>

      {/* Process Section */}
      <Section className="bg-gsc-bg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gsc-text">
            {homePage.processSection.title}
          </h2>
          <p className="text-lg text-gsc-muted max-w-3xl mx-auto">
            {homePage.processSection.description}
          </p>
        </div>
        <ProcessSteps steps={homePage.processSection.steps} />
      </Section>

      {/* Testimonial Section */}
      <Section className="bg-gsc-surface">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gsc-text">
            {homePage.testimonialsSection.title}
          </h2>
        </div>
        <Testimonial testimonial={homePage.testimonialsSection.featuredTestimonial} />
      </Section>

      {/* Gallery Preview Section */}
      <Section className="bg-gsc-surface">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gsc-text">
            {homePage.gallerySection.title}
          </h2>
          <p className="text-lg text-gsc-muted max-w-3xl mx-auto">
            {homePage.gallerySection.description}
          </p>
        </div>

        {/* Gallery Preview Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {(homePage.gallerySection.previewImages || []).map((image: any, index: number) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg border border-gsc-border hover:border-gsc-gold transition-all duration-300 group"
            >
              <Image
                src={image?.asset ? urlFor(image).width(600).url() : "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80"}
                alt={image?.alt || "Gallery image"}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href={homePage.gallerySection.cta.url} variant="primary" size="lg">
            {homePage.gallerySection.cta.text}
          </Button>
        </div>
      </Section>

      {/* Service Areas Section */}
      <Section className="bg-gsc-bg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gsc-text">
            {homePage.serviceAreasSection.title}
          </h2>
          <p className="text-lg text-gsc-muted max-w-3xl mx-auto">
            {homePage.serviceAreasSection.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-8 max-w-5xl mx-auto">
          {primaryCities.map((city) => (
            <div key={city.slug} className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.667rem)] lg:w-[calc(16.666%-0.833rem)]">
              <CityCard {...city} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button href={homePage.serviceAreasSection.cta.url} variant="outline" size="lg">
            {homePage.serviceAreasSection.cta.text}
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gsc-surface">
        <CTABanner
          title={homePage.ctaBanner.title}
          subtitle={homePage.ctaBanner.subtitle}
        />
      </Section>
    </>
  );
}
