import { type SchemaTypeDefinition } from 'sanity';
import { homePage } from './schemaTypes/homePage';
import { service } from './schemaTypes/service';
import { testimonial } from './schemaTypes/testimonial';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage, service, testimonial],
};
