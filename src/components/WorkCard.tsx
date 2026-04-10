import { Link } from 'react-router-dom';
import type { WorkEntry } from '../types/content';
import styles from './WorkCard.module.css';

interface WorkCardProps {
  work: WorkEntry;
  featured?: boolean;
}

export function WorkCard({ work, featured = false }: WorkCardProps) {
  return (
    <Link
      to={`/works/${work.slug}`}
      className={`${styles.card} ${featured ? styles.featured : ''}`}
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
        <div className={styles.meta}>
          <span className={styles.category}>{work.category}</span>
          <span className={styles.period}>{work.period}</span>
        </div>
        <h3 className={styles.title}>{work.title}</h3>
        <p className={styles.summary}>{work.summary}</p>
        <dl className={styles.details}>
          <div>
            <dt>Role</dt>
            <dd>{work.role.join(' / ')}</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>{work.tools.join(' / ')}</dd>
          </div>
        </dl>
      </div>
    </Link>
  );
}
