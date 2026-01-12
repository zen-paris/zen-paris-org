// src/content/config.ts
import { z, defineCollection } from 'astro:content';

// ----------------------
// Reusable schema for Zen articles
// ----------------------
const zenArticleSchema = z.object({
  draft: z.boolean(),
  title: z.string(),
  snippet: z.string(),
  image: z.object({
    src: z.string(),
    alt: z.string(),
  }).optional(), // optional to prevent undefined errors
  publishDate: z.string().transform(str => new Date(str)),
  author: z.string().default('Dojo zen de Dijon'),
  category: z.string(),
  tags: z.array(z.string()),
});

// ----------------------
// Define collections
// ----------------------
const zenetsanghaCollection = defineCollection({ schema: zenArticleSchema });
const zenetdojoCollection = defineCollection({ schema: zenArticleSchema });

// Soutras collection
const soutrasCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Dojo zen de Dijon'),
    category: z.string(),
    tags: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(), // optional to avoid missing images
  }),
});

// ----------------------
// Export collections
// Keys must match folder names in src/content
// ----------------------
export const collections = {
  'autour-du-zen': zenetdojoCollection,
  'meditation-zen': zenetsanghaCollection,
  'soutras': soutrasCollection,
};
