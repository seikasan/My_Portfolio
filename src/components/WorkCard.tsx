import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { saveHomeScrollPosition } from '../lib/scrollRestoration';
import type { WorkCardVariant, WorkTone } from '../lib/workPresentation';
import type { WorkEntry } from '../types/content';
import styles from './WorkCard.module.css';

interface WorkCardProps {
  work: WorkEntry;
  variant?: WorkCardVariant;
  tone?: WorkTone;
}

export function WorkCard({ work, variant = 'standard', tone }: WorkCardProps) {
  const style = tone
    ? ({
        '--work-accent': tone.accent,
        '--work-accent-2': tone.accent2,
        '--work-soft': tone.soft,
        '--work-surface': tone.surface,
        '--work-gradient': tone.gradient,
      } as CSSProperties)
    : undefined;

  return (
    <article className={`${styles.card} ${styles[variant]}`} style={style}>
      <Link
        to={`/works/${work.slug}`}
        state={{ fromHome: true }}
        className={styles.mainLink}
        onClick={saveHomeScrollPosition}
      >
        <div className={styles.imageWrap}>
          <img
            src={work.coverImage.src}
            alt={work.coverImage.alt}
            className={styles.image}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={styles.body}>
          <div className={styles.kickerRow}>
            <span className={styles.period}>{work.period}</span>
            <span className={styles.category}>{work.category}</span>
          </div>
          <h3 className={styles.title}>{work.title}</h3>
          <p className={styles.summary}>{work.summary}</p>
          <div className={styles.metaList}>
            <span>{work.role.join(' / ')}</span>
            <span>{work.teamSize}</span>
          </div>
        </div>
      </Link>

      <div className={styles.footer}>
        <div className={styles.tagList} aria-label="Tools">
          {work.tools.map((tool) => (
            <span key={tool} className={styles.tag}>
              {tool}
            </span>
          ))}
        </div>
        <div className={styles.actionRow}>
          <Link
            to={`/works/${work.slug}`}
            state={{ fromHome: true }}
            className={styles.detailLink}
            onClick={saveHomeScrollPosition}
          >
            Read work
          </Link>
        </div>
      </div>
    </article>
  );
}
