import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TrustBadges } from "@/components/TrustBadges";
import { BUSINESS_INFO } from "@/lib/constants";
import { getAboutPage } from "@/lib/sanity";

export const revalidate = 3600; // ISR - revalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  const aboutPage = await getAboutPage();

  return {
    title: aboutPage.seo.title,
    description: aboutPage.seo.description,
  };
}

export default async function AboutPage() {
  const aboutPage = await getAboutPage();
  return (
    <>
      <Section className="bg-gradient-to-br from-gsc-bg via-gsc-surface to-gsc-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gsc-text">
            {aboutPage.hero.headline}
          </h1>
          <p className="text-xl text-gsc-muted">
            {aboutPage.hero.tagline}
          </p>
        </div>
      </Section>

      <Section className="bg-gsc-bg">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gsc-text">{aboutPage.whatWeDo.title}</h2>
            {aboutPage.whatWeDo.paragraphs.map((paragraph: string, index: number) => (
              <p key={index} className="text-lg text-gsc-muted mb-6">
                {paragraph}
              </p>
            ))}

            <h2 className="text-3xl font-bold mb-6 text-gsc-text mt-12">{aboutPage.howWeWork.title}</h2>
            {aboutPage.howWeWork.paragraphs.map((paragraph: string, index: number) => (
              <p key={index} className="text-lg text-gsc-muted mb-6">
                {paragraph}
              </p>
            ))}

            <h2 className="text-3xl font-bold mb-6 text-gsc-text mt-12">{aboutPage.ourCommitment.title}</h2>
            {aboutPage.ourCommitment.paragraphs.map((paragraph: string, index: number) => (
              <p key={index} className="text-lg text-gsc-muted mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gsc-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gsc-text">
            {aboutPage.whyChooseSection.title}
          </h2>
          <TrustBadges points={aboutPage.whyChooseSection.trustPoints} />
        </div>
      </Section>

      <Section className="bg-gsc-bg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gsc-text">
            {aboutPage.ctaSection.title}
          </h2>
          <p className="text-lg text-gsc-muted mb-8">
            {aboutPage.ctaSection.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={aboutPage.ctaSection.primaryCTA.url} variant="primary" size="lg">
              {aboutPage.ctaSection.primaryCTA.text}
            </Button>
            <Button href={aboutPage.ctaSection.secondaryCTA.url} variant="outline" size="lg">
              {aboutPage.ctaSection.secondaryCTA.text}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
