import { type SchemaTypeDefinition } from 'sanity';
import { homePage } from './schemaTypes/homePage';
import { service } from './schemaTypes/service';
import { testimonial } from './schemaTypes/testimonial';
import { galleryImage } from './schemaTypes/galleryImage';
import { aboutPage } from './schemaTypes/aboutPage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage, service, testimonial, galleryImage, aboutPage],
};
