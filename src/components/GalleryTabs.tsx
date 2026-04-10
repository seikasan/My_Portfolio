import { startTransition, useDeferredValue, useMemo, useState } from 'react';
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
  const [active, setActive] = useState<GalleryCategory>('illustration');
  const deferredActive = useDeferredValue(active);

  const filteredItems = useMemo(
    () => items.filter((item) => item.category === deferredActive),
    [deferredActive, items],
  );

  const handleTabClick = (category: GalleryCategory) => {
    startTransition(() => {
      setActive(category);
    });
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.tabList} role="tablist" aria-label="ギャラリーカテゴリ">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={active === category.id}
            className={`${styles.tab} ${active === category.id ? styles.active : ''}`}
            onClick={() => handleTabClick(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {filteredItems.map((item) => (
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
    </div>
  );
}
