import { defineType, defineField } from 'sanity';

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Page Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Meta Description',
          type: 'text',
          validation: (Rule) => Rule.required().max(160),
        },
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'tagline',
          title: 'Tagline',
          type: 'text',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'whatWeDo',
      title: 'What We Do Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [{ type: 'text' }],
          validation: (Rule) => Rule.required().min(1),
        },
      ],
    }),
    defineField({
      name: 'howWeWork',
      title: 'How We Work Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [{ type: 'text' }],
          validation: (Rule) => Rule.required().min(1),
        },
      ],
    }),
    defineField({
      name: 'ourCommitment',
      title: 'Our Commitment Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [{ type: 'text' }],
          validation: (Rule) => Rule.required().min(1),
        },
      ],
    }),
    defineField({
      name: 'whyChooseSection',
      title: 'Why Choose Us Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'trustPoints',
          title: 'Trust Points',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Point Text',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'ctaSection',
      title: 'Call to Action Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'primaryCTA',
          title: 'Primary CTA',
          type: 'object',
          fields: [
            { name: 'text', title: 'Button Text', type: 'string' },
            { name: 'url', title: 'URL', type: 'string' },
          ],
        },
        {
          name: 'secondaryCTA',
          title: 'Secondary CTA',
          type: 'object',
          fields: [
            { name: 'text', title: 'Button Text', type: 'string' },
            { name: 'url', title: 'URL', type: 'string' },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About Page',
      };
    },
  },
});
