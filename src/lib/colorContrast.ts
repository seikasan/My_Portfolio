interface RgbColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

const darkText = '#1f252d';
const lightText = '#ffffff';

function parseHexColor(color: string): RgbColor | undefined {
  const hex = color.trim().replace(/^#/, '');

  if (!/^[0-9a-fA-F]+$/.test(hex)) {
    return undefined;
  }

  if (hex.length === 3) {
    return {
      r: Number.parseInt(hex[0] + hex[0], 16),
      g: Number.parseInt(hex[1] + hex[1], 16),
      b: Number.parseInt(hex[2] + hex[2], 16),
      a: 1,
    };
  }

  if (hex.length === 6 || hex.length === 8) {
    return {
      r: Number.parseInt(hex.slice(0, 2), 16),
      g: Number.parseInt(hex.slice(2, 4), 16),
      b: Number.parseInt(hex.slice(4, 6), 16),
      a: hex.length === 8 ? Number.parseInt(hex.slice(6, 8), 16) / 255 : 1,
    };
  }

  return undefined;
}

function blendOverWhite(color: RgbColor): RgbColor {
  if (color.a >= 1) {
    return color;
  }

  return {
    r: Math.round(color.r * color.a + 255 * (1 - color.a)),
    g: Math.round(color.g * color.a + 255 * (1 - color.a)),
    b: Math.round(color.b * color.a + 255 * (1 - color.a)),
    a: 1,
  };
}

function channelToLinear(value: number) {
  const normalized = value / 255;

  if (normalized <= 0.03928) {
    return normalized / 12.92;
  }

  return ((normalized + 0.055) / 1.055) ** 2.4;
}

function relativeLuminance(color: RgbColor) {
  return (
    0.2126 * channelToLinear(color.r) +
    0.7152 * channelToLinear(color.g) +
    0.0722 * channelToLinear(color.b)
  );
}

function contrastRatio(a: RgbColor, b: RgbColor) {
  const luminanceA = relativeLuminance(a);
  const luminanceB = relativeLuminance(b);
  const lighter = Math.max(luminanceA, luminanceB);
  const darker = Math.min(luminanceA, luminanceB);

  return (lighter + 0.05) / (darker + 0.05);
}

export function getReadableTextColor(
  backgroundColor: string,
  fallback = 'var(--color-text)',
) {
  const parsedColor = parseHexColor(backgroundColor);

  if (!parsedColor) {
    return fallback;
  }

  const background = blendOverWhite(parsedColor);
  const white = { r: 255, g: 255, b: 255, a: 1 };
  const dark = { r: 31, g: 37, b: 45, a: 1 };

  return contrastRatio(background, white) >= contrastRatio(background, dark)
    ? lightText
    : darkText;
}
