import 'dotenv/config';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function populateAboutPage() {
  const aboutPageData = {
    _type: 'aboutPage',
    _id: 'aboutPage',
    seo: {
      title: 'About Us | Licensed Roofing Contractor',
      description:
        'Learn about Gold Standard Contracting - a licensed roofing and exterior contractor serving the OKC metro with quality craftsmanship and clear communication.',
    },
    hero: {
      headline: 'About Gold Standard Contracting',
      tagline:
        'Your Trusted Partner for Quality Roofing, Siding, Windows & Remodeling',
    },
    whatWeDo: {
      title: 'What We Do',
      paragraphs: [
        'Gold Standard Contracting is a licensed Oklahoma contractor specializing in roofing, siding, window replacement, and remodeling services throughout the OKC metro area. We serve homeowners in Norman, Yukon, Moore, Edmond, and surrounding communities with professional craftsmanship and honest service.',
        'Whether you\'re dealing with storm damage, planning a home improvement project, or need emergency repairs, we provide expert guidance and quality work you can trust. Our services include roof repair and replacement, siding installation, energy-efficient windows, bathroom remodels, flooring, and general construction.',
      ],
    },
    howWeWork: {
      title: 'How We Work',
      paragraphs: [
        'From concept to completion, we work closely with you every step of the way. Our process begins with a thorough assessment and honest consultation. We provide detailed written proposals with clear timelines and transparent pricing — no surprises, no hidden costs.',
        'During construction, we maintain clean job sites and open communication. We keep you informed of progress, address questions promptly, and ensure you\'re satisfied with every detail. Our final walkthrough confirms that the work meets your expectations before we consider the project complete.',
      ],
    },
    ourCommitment: {
      title: 'Our Commitment',
      paragraphs: [
        'We believe in doing the job right. That means quality materials, skilled workmanship, and honest recommendations. If you don\'t need a full replacement, we\'ll tell you. If there\'s a better solution for your budget, we\'ll present it. Our reputation is built on integrity and the long-term satisfaction of our customers.',
        'As a licensed contractor (License #77777), we meet all Oklahoma building codes and regulations. We\'re properly insured, and we stand behind our work. When you hire Gold Standard Contracting, you\'re hiring a team committed to excellence.',
      ],
    },
    whyChooseSection: {
      title: 'Why Choose Us',
      trustPoints: [
        { text: 'Licensed & Insured Oklahoma Contractor' },
        { text: 'Transparent Pricing, No Hidden Fees' },
        { text: 'Quality Materials & Expert Craftsmanship' },
        { text: 'Clear Communication Throughout Your Project' },
      ],
    },
    ctaSection: {
      title: 'Ready to Get Started?',
      description:
        'Contact us today for a free estimate on your roofing, siding, window, or remodeling project.',
      primaryCTA: {
        text: 'Get a Free Estimate',
        url: '/contact',
      },
      secondaryCTA: {
        text: 'Call (405) 278-1994',
        url: 'tel:+14052781994',
      },
    },
  };

  try {
    console.log('Creating About Page document...');
    const result = await client.createOrReplace(aboutPageData);
    console.log('✓ About Page created:', result._id);
  } catch (error) {
    console.error('Error creating About Page:', error);
  }
}

populateAboutPage()
  .then(() => {
    console.log('\n✓ About Page populated successfully!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Failed to populate About Page:', err);
    process.exit(1);
  });
