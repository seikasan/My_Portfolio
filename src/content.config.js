import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const linkSchema = z.object({
  label: z.string(),
  url: z.string()
});

const mediaSchema = z.object({
  provider: z.string(),
  label: z.string(),
  url: z.string().optional().default('')
});

const games = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/games' }),
  schema: z.object({
    title: z.string(),
    period: z.string(),
    teamSize: z.string(),
    technologies: z.array(z.string()),
    roles: z.array(z.string()),
    contribution: z.string(),
    summary: z.string(),
    highlights: z.array(z.string()),
    playMedia: z.array(mediaSchema).default([]),
    downloads: z.array(linkSchema).default([]),
    references: z.array(linkSchema).default([]),
    order: z.number(),
    featured: z.boolean().default(false),
    thumbnailLabel: z.string().optional().default('')
  })
});

const musicVideo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/music-video' }),
  schema: z.object({
    title: z.string(),
    releaseLabel: z.string(),
    category: z.string(),
    summary: z.string(),
    embeds: z.array(mediaSchema).default([]),
    links: z.array(linkSchema).default([]),
    achievements: z.array(z.string()).default([]),
    order: z.number(),
    featured: z.boolean().default(false)
  })
});

export const collections = { games, 'music-video': musicVideo };

