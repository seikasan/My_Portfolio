export type WorkCardVariant = 'featured' | 'medium' | 'standard';

export interface WorkTone {
  accent: string;
  accent2: string;
  soft: string;
  surface: string;
  gradient: string;
}

interface WorkPresentation {
  variant: WorkCardVariant;
  tone: WorkTone;
}

const defaultPresentation: WorkPresentation = {
  variant: 'standard',
  tone: {
    accent: '#7b5260',
    accent2: '#b88a64',
    soft: 'rgba(123, 82, 96, 0.12)',
    surface: '#fdfaf3',
    gradient: 'linear-gradient(135deg, rgba(123, 82, 96, 0.16), rgba(184, 138, 100, 0.12))',
  },
};

const presentations: Record<string, WorkPresentation> = {
  'choco-tabi': {
    variant: 'featured',
    tone: {
      accent: '#8b4f2a',
      accent2: '#d49a53',
      soft: 'rgba(139, 79, 42, 0.16)',
      surface: '#fff5e4',
      gradient: 'linear-gradient(135deg, rgba(139, 79, 42, 0.22), rgba(212, 154, 83, 0.22))',
    },
  },
  'my-architecture': {
    variant: 'medium',
    tone: {
      accent: '#263b63',
      accent2: '#c5a257',
      soft: 'rgba(38, 59, 99, 0.13)',
      surface: '#f5f7fb',
      gradient: 'linear-gradient(135deg, rgba(38, 59, 99, 0.2), rgba(197, 162, 87, 0.18))',
    },
  },
  'access-to-your-5-girls': {
    variant: 'medium',
    tone: {
      accent: '#70446d',
      accent2: '#c8839b',
      soft: 'rgba(112, 68, 109, 0.14)',
      surface: '#fff4f8',
      gradient: 'linear-gradient(135deg, rgba(112, 68, 109, 0.18), rgba(200, 131, 155, 0.2))',
    },
  },
  lyla: {
    variant: 'standard',
    tone: {
      accent: '#2f4c63',
      accent2: '#7b94a5',
      soft: 'rgba(47, 76, 99, 0.14)',
      surface: '#f3f7f9',
      gradient: 'linear-gradient(135deg, rgba(47, 76, 99, 0.2), rgba(123, 148, 165, 0.18))',
    },
  },
  'return-false': {
    variant: 'standard',
    tone: {
      accent: '#385c96',
      accent2: '#29384f',
      soft: 'rgba(45, 83, 109, 0.14)',
      surface: '#d1e3ff',
      gradient: 'linear-gradient(135deg, rgba(45, 65, 109, 0.18), rgba(23, 29, 38, 0.14))',
    },
  },
  'lost-of-music': {
    variant: 'standard',
    tone: {
      accent: '#454545',
      accent2: '#91a176',
      soft: 'rgba(73, 106, 83, 0.14)',
      surface: '#dfdfdf',
      gradient: 'linear-gradient(135deg, rgba(73, 106, 83, 0.18), rgba(145, 161, 118, 0.18))',
    },
  },
  'choco-map-maker': {
    variant: 'standard',
    tone: {
      accent: '#80642a',
      accent2: '#a48a43',
      soft: 'rgba(128, 100, 42, 0.15)',
      surface: '#fff8e8',
      gradient: 'linear-gradient(135deg, rgba(128, 100, 42, 0.18), rgba(164, 138, 67, 0.18))',
    },
  },
};

export function getWorkPresentation(slug: string): WorkPresentation {
  return presentations[slug] ?? defaultPresentation;
}
