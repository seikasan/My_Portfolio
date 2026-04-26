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

export interface MusicItem {
  id: string;
  title: string;
  provider: 'niconico' | 'spotify';
  embedSrc: string;
  description?: string;
  releasePeriod?: string;
  role?: string[];
}

export interface MusicSectionMeta {
  provider: 'niconico' | 'spotify';
  title: string;
  description: string;
}

export interface ProfileLink {
  label: string;
  url: string;
  kind: 'email' | 'social' | 'website';
}

export type SkillLogoId =
  | 'c'
  | 'csharp'
  | 'vba'
  | 'java'
  | 'html5'
  | 'css'
  | 'javascript'
  | 'studioOne'
  | 'blender'
  | 'unity'
  | 'github';

export interface SkillEntry {
  name: string;
  experience?: string;
  note?: string;
  logoId: SkillLogoId;
}

export interface SkillGroup {
  title: string;
  description?: string;
  items: SkillEntry[];
}

export interface HistoryEntry {
  period: string;
  title: string;
  description?: string;
}

export interface HeadingTone {
  backgroundColor: string;
  foregroundColor?: string;
}

export interface SiteProfile {
  name: string;
  heroTitle: string;
  heroBody: string;
  intro: string;
  contactNote: string;
  links: ProfileLink[];
}
