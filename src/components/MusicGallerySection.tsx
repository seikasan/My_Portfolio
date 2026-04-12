import type { MusicItem } from '../types/content';
import { NiconicoEmbed } from './NiconicoEmbed';
import styles from './MusicGallerySection.module.css';

interface MusicGallerySectionProps {
  items: MusicItem[];
}

export function MusicGallerySection({ items }: MusicGallerySectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>Music</h3>
        <p className={styles.meta}>{items.length}曲</p>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <article key={item.id} className={styles.card}>
            <h4 className={styles.cardTitle}>{item.title}</h4>
            <NiconicoEmbed embedSrc={item.embedSrc} title={item.title} />
          </article>
        ))}
      </div>
    </section>
  );
}
