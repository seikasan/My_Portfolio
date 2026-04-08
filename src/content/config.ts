import { defineCollection, z } from "astro:content";

const linkSchema = z.object({
  label: z.string(),
  url: z.string().url(),
  note: z.string().optional()
});

const galleryItemSchema = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional()
});

const highlightSchema = z.object({
  title: z.string(),
  description: z.string()
});

const embedSchema = z.object({
  provider: z.enum(["youtube", "soundcloud", "apple-music"]),
  title: z.string(),
  embedUrl: z.string().url(),
  externalUrl: z.string().url(),
  note: z.string().optional()
});

const statSchema = z.object({
  label: z.string(),
  value: z.string()
});

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number(),
    sortOrder: z.number().default(99),
    engine: z.string(),
    teamType: z.string(),
    roles: z.array(z.string()),
    featured: z.boolean().default(false),
    archived: z.boolean().default(false),
    summaryShort: z.string(),
    summaryLong: z.string(),
    myContribution: z.string(),
    contributionSummary: z.array(z.string()).default([]),
    deliverables: z.array(z.string()),
    technicalHighlights: z.array(highlightSchema),
    heroStats: z.array(statSchema).default([]),
    thumbnail: z.string(),
    gallery: z.array(galleryItemSchema).default([]),
    videoEmbed: embedSchema.optional(),
    audioEmbeds: z.array(embedSchema).default([]),
    warnings: z.array(z.string()).default([]),
    downloadLink: z.string().url().optional(),
    publicCodeLink: z.string().url().optional(),
    externalLinks: z.array(linkSchema).default([])
  })
});

const musicCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    sortOrder: z.number().default(99),
    featured: z.boolean().default(false),
    category: z.enum(["original", "game-sound"]),
    kind: z.string(),
    responsibilities: z.array(z.string()),
    theme: z.string(),
    playCount: z.string(),
    thumbnail: z.string(),
    embedProvider: z.enum(["soundcloud", "apple-music"]).optional(),
    embedUrl: z.string().url().optional(),
    externalLinks: z.array(linkSchema).default([])
  })
});

export const collections = {
  projects: projectCollection,
  music: musicCollection
};
