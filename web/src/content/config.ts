
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).default([]),
    }),
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        year: z.string(),
        link: z.string().url(),
        tags: z.array(z.string()).default([]),
    }),
});

const homepage = defineCollection({
    type: 'data',
    schema: z.object({
        greeting: z.string(),
        headline: z.string(),
        intro: z.string(),
    }),
});

export const collections = { blog, projects, homepage };
