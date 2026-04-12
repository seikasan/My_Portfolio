import type { MusicItem, MusicSectionMeta } from '../types/content';
import { NiconicoEmbed } from './NiconicoEmbed';
import { SpotifyEmbed } from './SpotifyEmbed';
import styles from './MusicGallerySection.module.css';

interface MusicGallerySectionProps {
  items: MusicItem[];
  sectionMeta: MusicSectionMeta[];
  showHeader?: boolean;
}

const providerOrder: MusicSectionMeta['provider'][] = ['niconico', 'spotify'];

export function MusicGallerySection({
  items,
  sectionMeta,
  showHeader = true,
}: MusicGallerySectionProps) {
  return (
    <section className={styles.section}>
      {showHeader ? (
        <div className={styles.header}>
          <h3 className={styles.title}>Music</h3>
          <p className={styles.meta}>{items.length} items</p>
        </div>
      ) : null}

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
                    {item.releasePeriod || item.role?.length ? (
                      <dl className={styles.cardMeta}>
                        {item.releasePeriod ? (
                          <div className={styles.metaRow}>
                            <dt className={styles.metaLabel}>
                              {'\u516c\u958b\u6642\u671f'}
                            </dt>
                            <dd className={styles.metaValue}>{item.releasePeriod}</dd>
                          </div>
                        ) : null}
                        {item.role?.length ? (
                          <div className={styles.metaRow}>
                            <dt className={styles.metaLabel}>{'\u62c5\u5f53'}</dt>
                            <dd className={styles.metaValue}>{item.role.join(' / ')}</dd>
                          </div>
                        ) : null}
                      </dl>
                    ) : null}
                    {item.description ? (
                      <p className={styles.cardDescription}>{item.description}</p>
                    ) : null}
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
