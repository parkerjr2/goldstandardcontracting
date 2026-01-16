import 'dotenv/config';
import { client } from '../sanity/lib/client';
import { SERVICES, TRUST_POINTS, PROCESS_STEPS, TESTIMONIAL } from '../lib/constants';

async function populateSanity() {
  console.log('🚀 Starting Sanity content population...\n');

  try {
    // Create services
    console.log('Creating services...');
    const servicePromises = SERVICES.map((service) =>
      client.create({
        _type: 'service',
        name: service.name,
        slug: { current: service.slug },
        shortDescription: service.shortDescription,
        isPrimary: service.isPrimary || false,
      })
    );
    const services = await Promise.all(servicePromises);
    console.log(`✅ Created ${services.length} services\n`);

    // Create testimonial
    console.log('Creating testimonial...');
    const testimonial = await client.create({
      _type: 'testimonial',
      quote: TESTIMONIAL.quote,
      author: TESTIMONIAL.author,
      title: TESTIMONIAL.title,
      rating: 5,
    });
    console.log('✅ Created testimonial\n');

    // Create homepage document
    console.log('Creating homepage document...');
    const homepage = await client.create({
      _type: 'homePage',
      seo: {
        title: 'Roofing Contractor in Norman, OK | Gold Standard Contracting',
        description:
          'Gold Standard Contracting is a licensed roofing contractor serving Norman and the OKC metro. Expert roof repair, replacement, and storm damage restoration.',
      },
      hero: {
        badge: 'Oklahoma CIB #0007026',
        headline: 'Roofing Contractor in Norman & OKC Metro',
        subheading:
          'From roof repairs and roof replacements to storm damage inspections and insurance claims, we bring premium craftsmanship and clear communication to every project — from concept to completion.',
        primaryCTA: {
          text: 'Get a Free Estimate',
          url: '/contact',
        },
        secondaryCTA: {
          text: 'Call',
          usePhoneNumber: true,
        },
        trustBar: [
          { title: 'Licensed', subtitle: 'CIB #0007026' },
          { title: 'Local', subtitle: 'OKC Metro' },
          { title: 'Quality', subtitle: 'Craftsmanship' },
          { title: 'Clear', subtitle: 'Communication' },
        ],
      },
      servicesSection: {
        title: 'Professional Roofing Contractor Services',
        description:
          'As a trusted roofing contractor in the Norman and OKC metro area, we deliver expert workmanship across all aspects of home improvement.',
        services: services.map((s) => ({ _type: 'reference', _ref: s._id })),
      },
      roofingSection: {
        title: 'Expert Roofing Contractor in Norman, OK',
        description:
          'Whether you need a roof repair, a complete roof replacement, or a storm damage inspection, our team provides reliable solutions backed by premium materials and clear communication.',
        bulletPoints: [
          'Roof repairs for leaks, missing shingles, and storm damage',
          'Full roof replacements with premium materials',
          'Storm damage assessments and insurance claim support',
          'Honest inspections and recommendations',
          'Clean, professional job sites',
        ],
        cta: {
          text: 'Learn About Our Roofing Services',
          url: '/services/roofing',
        },
        whenToCallCard: {
          title: 'When to Call a Roofing Contractor',
          items: [
            'Missing, cracked, or curling shingles',
            'Leaks or water stains on ceilings',
            'Recent storm or hail damage',
            'Your roof is 15+ years old',
            'Granules collecting in gutters',
            'Planning to sell your home',
          ],
        },
      },
      whyChooseSection: {
        title: 'Why Choose Gold Standard Contracting',
        description:
          'We bring professionalism, quality craftsmanship, and clear communication to every project.',
        trustPoints: TRUST_POINTS.map((text) => ({ text })),
      },
      processSection: {
        title: 'Our Process',
        description:
          'From your first call to final walkthrough, we make the process simple and transparent.',
        steps: PROCESS_STEPS,
      },
      testimonialsSection: {
        title: 'What Our Customers Say',
        featuredTestimonial: { _type: 'reference', _ref: testimonial._id },
      },
      gallerySection: {
        title: 'Recent Projects',
        description:
          'Take a look at some of our recent roofing and exterior projects across the OKC metro area.',
        cta: {
          text: 'View Full Gallery',
          url: '/gallery',
        },
      },
      serviceAreasSection: {
        title: 'Service Areas',
        description:
          'We proudly serve Norman, Yukon, Moore, Mustang, and the entire OKC metro area.',
        cta: {
          text: 'View All Service Areas',
          url: '/service-areas',
        },
      },
      ctaBanner: {
        title: 'Ready to Get Started?',
        subtitle: 'Contact us today for your free estimate',
      },
    });

    console.log('✅ Created homepage document\n');
    console.log('🎉 All content populated successfully!');
    console.log('\n📝 Summary:');
    console.log(`   - ${services.length} services created`);
    console.log(`   - 1 testimonial created`);
    console.log(`   - 1 homepage document created`);
    console.log('\n✨ You can now view and edit content in Sanity Studio!');
  } catch (error) {
    console.error('❌ Error populating Sanity:', error);
    process.exit(1);
  }
}

populateSanity();
