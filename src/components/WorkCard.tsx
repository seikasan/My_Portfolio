import { Link } from 'react-router-dom';
import { saveHomeScrollPosition } from '../lib/scrollRestoration';
import type { WorkEntry } from '../types/content';
import styles from './WorkCard.module.css';

interface WorkCardProps {
  work: WorkEntry;
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <Link
      to={`/works/${work.slug}`}
      state={{ fromHome: true }}
      className={styles.card}
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
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{work.title}</h3>
          <span className={styles.period}>{work.period}</span>
        </div>
        <p className={styles.category}>{work.category}</p>
        <dl className={styles.infoRow}>
          <dt>使用技術</dt>
          <dd>{work.tools.join(' / ')}</dd>
        </dl>
        <p className={styles.summary}>{work.summary}</p>
        <span className={styles.linkLabel}>詳細を見る</span>
      </div>
    </Link>
  );
}
