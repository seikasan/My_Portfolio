import type { CSSProperties } from 'react';
import { getReadableTextColor } from '../lib/colorContrast';
import type { HeadingTone } from '../types/content';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  tone?: HeadingTone;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone,
}: SectionHeadingProps) {
  const shouldShowEyebrow =
    eyebrow.trim().toLowerCase() !== title.trim().toLowerCase();
  const titleStyle: CSSProperties | undefined = tone
    ? {
        backgroundColor: tone.backgroundColor,
        color: tone.foregroundColor ?? getReadableTextColor(tone.backgroundColor),
      }
    : undefined;
  const titleClassName = tone
    ? `${styles.title} ${styles.titleTone}`
    : styles.title;

  return (
    <div className={styles.heading}>
      {shouldShowEyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={titleClassName} style={titleStyle}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
