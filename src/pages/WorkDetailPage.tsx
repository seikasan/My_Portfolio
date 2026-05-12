import type { CSSProperties } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getWorkContent } from '../content/works';
import { ImageLightbox } from '../components/ImageLightbox';
import { Reveal } from '../components/Reveal';
import type { RouteLocationState } from '../lib/scrollRestoration';
import { works } from '../data/siteContent';
import { getWorkPresentation } from '../lib/workPresentation';
import styles from './WorkDetailPage.module.css';

function toneStyle(slug: string) {
  const { tone } = getWorkPresentation(slug);

  return {
    '--work-accent': tone.accent,
    '--work-accent-2': tone.accent2,
    '--work-soft': tone.soft,
    '--work-gradient': tone.gradient,
  } as CSSProperties;
}

export function WorkDetailPage() {
  const location = useLocation();
  const { slug } = useParams();
  const work = works.find((entry) => entry.slug === slug);
  const detailState = location.state as RouteLocationState | null;
  const DetailContent = slug ? getWorkContent(slug) : undefined;

  if (!work) {
    return (
      <div className={styles.page}>
        <section className={styles.missing}>
          <p className={styles.eyebrow}>Not Found</p>
          <h1 className={styles.title}>Work not found</h1>
          <p className={styles.summary}>URLを確認するか、作品一覧からもう一度選んでください。</p>
          <Link to="/" className={styles.backLink}>
            Back to works
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.page} style={toneStyle(work.slug)}>
      <Reveal as="section" className={styles.hero}>
        <Link
          to="/"
          state={detailState?.fromHome ? { restoreHomeScroll: true } : undefined}
          className={styles.backLink}
        >
          Back to works
        </Link>

        <div className={styles.titleBlock}>
            <p className={styles.eyebrow}>{work.category}</p>
            <h1 className={styles.title}>{work.title}</h1>
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.summary}>{work.summary}</p>
          </div>

          <aside className={styles.metaPanel} aria-label="Work information">
            <div className={styles.metaRow}>
              <span>Period</span>
              <strong>{work.period}</strong>
            </div>
            <div className={styles.metaRow}>
              <span>Role</span>
              <strong>{work.role.join(' / ')}</strong>
            </div>
            <div className={styles.metaRow}>
              <span>Team</span>
              <strong>{work.teamSize}</strong>
            </div>
            <div className={styles.toolList}>
              {work.tools.map((tool) => (
                <span key={tool} className={styles.toolTag}>
                  {tool}
                </span>
              ))}
            </div>
            {work.externalLinks.length > 0 ? (
              <div className={styles.externalBlock}>
                <h2 className={styles.externalTitle}>External Links</h2>
                <div className={styles.linkGroup}>
                  {work.externalLinks.map((link) => (
                    <a
                      key={`${link.label}-${link.url}`}
                      href={link.url}
                      className={styles.infoLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </Reveal>

      <Reveal as="section" className={styles.visualBlock}>
        <div className={styles.visualHeader}>
          <p className={styles.eyebrow}>Main Visual</p>
        </div>
        <div className={styles.mediaFrame}>
          {work.demoVideo ? (
            <video
              className={styles.media}
              src={work.demoVideo.src}
              poster={work.coverImage.src}
              controls
              preload="none"
            />
          ) : (
            <ImageLightbox
              className={styles.media}
              src={work.coverImage.src}
              alt={work.coverImage.alt}
              loading="eager"
              decoding="async"
            />
          )}
        </div>
      </Reveal>

      {DetailContent ? (
        <section className={styles.articleBlock}>
          <DetailContent />
        </section>
      ) : (
        <div className={styles.detailStack}>
          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <p className={styles.bodyText}>{work.summary}</p>
          </section>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Process</h2>
            <p className={styles.bodyText}>{work.challenge}</p>
          </section>

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Result</h2>
            <p className={styles.bodyText}>{work.result}</p>
          </section>
        </div>
      )}

      {work.gallery.length > 0 ? (
        <section className={styles.gallerySection}>
          <div className={styles.galleryHeader}>
            <p className={styles.eyebrow}>Additional Images</p>
            <h2 className={styles.sectionTitle}>Gallery</h2>
          </div>
          <div className={styles.galleryGrid}>
            {work.gallery.map((image) => (
              <div key={image.alt} className={styles.galleryCard}>
                <ImageLightbox
                  src={image.src}
                  alt={image.alt}
                  className={styles.galleryImage}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
