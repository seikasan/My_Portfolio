import type { MusicItem, MusicSectionMeta } from '../types/content';
import { NiconicoEmbed } from './NiconicoEmbed';
import { SpotifyEmbed } from './SpotifyEmbed';
import styles from './MusicGallerySection.module.css';

interface MusicGallerySectionProps {
  items: MusicItem[];
  sectionMeta: MusicSectionMeta[];
}

const providerOrder: MusicSectionMeta['provider'][] = ['niconico', 'spotify'];

export function MusicGallerySection({
  items,
  sectionMeta,
}: MusicGallerySectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>Music</h3>
        <p className={styles.meta}>{items.length} items</p>
      </div>

      <div className={styles.groupList}>
        {providerOrder.map((provider) => {
          const meta = sectionMeta.find((entry) => entry.provider === provider);
          const providerItems = items.filter((item) => item.provider === provider);

          if (!meta || providerItems.length === 0) {
            return null;
          }

          return (
            <section key={provider} className={styles.group}>
              <div className={styles.groupHeader}>
                <h4 className={styles.groupTitle}>{meta.title}</h4>
                <p className={styles.groupDescription}>{meta.description}</p>
              </div>

              <div className={styles.grid}>
                {providerItems.map((item) => (
                  <article key={item.id} className={styles.card}>
                    <h5 className={styles.cardTitle}>{item.title}</h5>
                    {item.provider === 'spotify' ? (
                      <SpotifyEmbed embedSrc={item.embedSrc} title={item.title} />
                    ) : (
                      <NiconicoEmbed embedSrc={item.embedSrc} title={item.title} />
                    )}
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
