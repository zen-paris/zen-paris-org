// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)

const zenetsanghaCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Zen Paris'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const zenetdojoCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Zen Paris'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

// ✅ Define the missing `soutrasCollection`
const soutrasCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Zen Paris'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    The keys must match your collection folder names in "src/content"
export const collections = {
  'autour-du-zen': zenetdojoCollection,
  'meditation-zen': zenetsanghaCollection,
  'soutras': soutrasCollection,
};
