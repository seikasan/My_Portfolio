import type { MediaAsset } from '../types/content';

interface PosterOptions {
  title: string;
  subtitle: string;
  accent: string;
  surface: string;
  detail: string;
}

function toDataUri(svg: string) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function createPosterAsset({
  title,
  subtitle,
  accent,
  surface,
  detail,
}: PosterOptions): MediaAsset {
  const svg = `
    <svg width="1600" height="1000" viewBox="0 0 1600 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1600" y2="1000">
          <stop stop-color="${surface}" />
          <stop offset="1" stop-color="#111111" />
        </linearGradient>
        <linearGradient id="line" x1="120" y1="160" x2="1420" y2="860">
          <stop stop-color="${accent}" stop-opacity="0.95" />
          <stop offset="1" stop-color="${detail}" stop-opacity="0.95" />
        </linearGradient>
      </defs>
      <rect width="1600" height="1000" rx="48" fill="url(#bg)" />
      <circle cx="1260" cy="220" r="210" fill="${accent}" fill-opacity="0.08" />
      <circle cx="390" cy="760" r="270" fill="${detail}" fill-opacity="0.11" />
      <path d="M80 780C240 690 335 694 515 760C695 826 775 830 930 716C1085 602 1184 598 1520 706" stroke="url(#line)" stroke-width="4"/>
      <path d="M122 214H1478" stroke="white" stroke-opacity="0.08" stroke-width="2"/>
      <path d="M122 864H1478" stroke="white" stroke-opacity="0.08" stroke-width="2"/>
      <rect x="122" y="160" width="1356" height="704" rx="36" stroke="white" stroke-opacity="0.12" stroke-width="2" />
      <rect x="180" y="214" width="290" height="44" rx="22" fill="${accent}" fill-opacity="0.18" />
      <text x="180" y="560" fill="#F3ECE2" font-size="118" font-family="'Noto Sans JP', sans-serif" font-weight="700">${title}</text>
      <text x="180" y="638" fill="#D2C8BC" font-size="34" font-family="'Noto Sans JP', sans-serif">${subtitle}</text>
      <text x="180" y="250" fill="#F3ECE2" font-size="24" font-family="'Noto Sans JP', sans-serif" letter-spacing="10">PORTFOLIO SAMPLE</text>
    </svg>
  `;

  return {
    src: toDataUri(svg),
    alt: `${title} のビジュアル`,
  };
}
