export type GalleryCategory = 'illustration' | '3dcg';

export type LinkKind = 'contact' | 'demo' | 'source' | 'article';

export interface MediaAsset {
  src: string;
  alt: string;
}

export interface ExternalLink {
  label: string;
  url: string;
  kind: LinkKind;
}

export interface WorkEntry {
  slug: string;
  title: string;
  category: string;
  period: string;
  role: string[];
  tools: string[];
  teamSize: string;
  summary: string;
  challenge: string;
  result: string;
  coverImage: MediaAsset;
  gallery: MediaAsset[];
  demoVideo?: MediaAsset;
  externalLinks: ExternalLink[];
  featured: boolean;
}

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  image: MediaAsset;
  caption: string;
  tools: string[];
}

export interface ProfileLink {
  label: string;
  url: string;
  kind: 'email' | 'social' | 'website';
}

export interface SiteProfile {
  name: string;
  heroTitle: string;
  heroBody: string;
  intro: string;
  contactNote: string;
  links: ProfileLink[];
}
