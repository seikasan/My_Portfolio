import { useMemo } from 'react';
import type { GalleryCategory, GalleryItem } from '../types/content';
import styles from './GalleryTabs.module.css';

interface GalleryTabsProps {
  items: GalleryItem[];
}

const categories: { id: GalleryCategory; label: string }[] = [
  { id: 'illustration', label: 'Illustration' },
  { id: '3dcg', label: '3DCG' },
];

export function GalleryTabs({ items }: GalleryTabsProps) {
  const groupedItems = useMemo(
    () =>
      categories.map((category) => ({
        ...category,
        items: items.filter((item) => item.category === category.id),
      })),
    [items],
  );

  return (
    <div className={styles.wrap}>
      {groupedItems.map((group) => (
        <section key={group.id} className={styles.group}>
          <div className={styles.groupHeader}>
            <h3 className={styles.groupTitle}>{group.label}</h3>
            <p className={styles.groupMeta}>{group.items.length}点</p>
          </div>
          <div className={styles.grid}>
            {group.items.map((item) => (
              <article key={item.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className={styles.image}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={styles.body}>
                  <p className={styles.caption}>{item.caption}</p>
                  <p className={styles.tools}>{item.tools.join(' / ')}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
