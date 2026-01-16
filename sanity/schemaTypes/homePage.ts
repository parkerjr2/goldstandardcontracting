import { defineType, defineField } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  fields: [
    // SEO Metadata
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule) => Rule.required().max(60),
        },
        {
          name: 'description',
          title: 'Meta Description',
          type: 'text',
          validation: (Rule) => Rule.required().max(160),
        },
        {
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          description: 'e.g., "Oklahoma CIB #0007026"',
        },
        {
          name: 'headline',
          title: 'Main Headline (H1)',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'primaryCTA',
          title: 'Primary Call-to-Action',
          type: 'object',
          fields: [
            { name: 'text', title: 'Button Text', type: 'string' },
            { name: 'url', title: 'Button URL', type: 'string' },
          ],
        },
        {
          name: 'secondaryCTA',
          title: 'Secondary Call-to-Action',
          type: 'object',
          fields: [
            { name: 'text', title: 'Button Text', type: 'string' },
            {
              name: 'usePhoneNumber',
              title: 'Use Phone Number from Constants',
              type: 'boolean',
              initialValue: true,
            },
          ],
        },
        {
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          name: 'trustBar',
          title: 'Trust Bar Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'subtitle', title: 'Subtitle', type: 'string' },
              ],
            },
          ],
          validation: (Rule) => Rule.max(4),
        },
      ],
    }),

    // Services Section
    defineField({
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'description', title: 'Section Description', type: 'text' },
        {
          name: 'services',
          title: 'Services',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'service' }] }],
        },
      ],
    }),

    // Roofing Focused Section
    defineField({
      name: 'roofingSection',
      title: 'Roofing Focused Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'description', title: 'Section Description', type: 'text' },
        {
          name: 'image',
          title: 'Section Image',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
        },
        {
          name: 'bulletPoints',
          title: 'Bullet Points',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'cta',
          title: 'Call-to-Action',
          type: 'object',
          fields: [
            { name: 'text', title: 'Button Text', type: 'string' },
            { name: 'url', title: 'Button URL', type: 'string' },
          ],
        },
        {
          name: 'whenToCallCard',
          title: 'When to Call Card',
          type: 'object',
          fields: [
            { name: 'title', title: 'Card Title', type: 'string' },
            {
              name: 'items',
              title: 'Checklist Items',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    }),

    // Why Choose Us Section
    defineField({
      name: 'whyChooseSection',
      title: 'Why Choose Us Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'description', title: 'Section Description', type: 'text' },
        {
          name: 'trustPoints',
          title: 'Trust Points',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [{ name: 'text', title: 'Point Text', type: 'string' }],
            },
          ],
          validation: (Rule) => Rule.max(4),
        },
      ],
    }),

    // Process Section
    defineField({
      name: 'processSection',
      title: 'Our Process Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'description', title: 'Section Description', type: 'text' },
        {
          name: 'steps',
          title: 'Process Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'number', title: 'Step Number', type: 'number' },
                { name: 'title', title: 'Step Title', type: 'string' },
                {
                  name: 'description',
                  title: 'Step Description',
                  type: 'text',
                },
              ],
            },
          ],
          validation: (Rule) => Rule.max(5),
        },
      ],
    }),

    // Testimonials Section
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        {
          name: 'featuredTestimonial',
          title: 'Featured Testimonial',
          type: 'reference',
          to: [{ type: 'testimonial' }],
        },
      ],
    }),

    // Gallery Section
    defineField({
      name: 'gallerySection',
      title: 'Recent Projects Gallery Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'description', title: 'Section Description', type: 'text' },
        {
          name: 'previewImages',
          title: 'Preview Images',
          type: 'array',
          of: [
            {
              type: 'image',
              options: { hotspot: true },
              fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
            },
          ],
          validation: (Rule) => Rule.max(4),
        },
        {
          name: 'cta',
          title: 'Call-to-Action',
          type: 'object',
          fields: [
            { name: 'text', title: 'Button Text', type: 'string' },
            { name: 'url', title: 'Button URL', type: 'string' },
          ],
        },
      ],
    }),

    // Service Areas Section
    defineField({
      name: 'serviceAreasSection',
      title: 'Service Areas Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'description', title: 'Section Description', type: 'text' },
        {
          name: 'cta',
          title: 'Call-to-Action',
          type: 'object',
          fields: [
            { name: 'text', title: 'Button Text', type: 'string' },
            { name: 'url', title: 'Button URL', type: 'string' },
          ],
        },
      ],
    }),

    // CTA Banner
    defineField({
      name: 'ctaBanner',
      title: 'Final CTA Banner',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'string' },
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Homepage',
      };
    },
  },
});
