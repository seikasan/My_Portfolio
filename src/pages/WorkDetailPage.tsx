import { Link, useParams } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { works } from '../data/siteContent';
import styles from './WorkDetailPage.module.css';

export function WorkDetailPage() {
  const { slug } = useParams();
  const work = works.find((entry) => entry.slug === slug);

  if (!work) {
    return (
      <div className={styles.page}>
        <section className={styles.missing}>
          <p className={styles.missingEyebrow}>Not Found</p>
          <h1 className={styles.missingTitle}>作品が見つかりません</h1>
          <p className={styles.missingText}>
            URL が変わったか、まだデータに登録されていません。
          </p>
          <Link to="/" className={styles.backButton}>
            トップに戻る
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Reveal as="section" className={styles.hero}>
        <div className={styles.heroHeader}>
          <Link to="/" className={styles.backLink}>
            ← Top に戻る
          </Link>
          <p className={styles.category}>{work.category}</p>
          <h1 className={styles.title}>{work.title}</h1>
          <p className={styles.summary}>{work.summary}</p>
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
            <img
              className={styles.media}
              src={work.coverImage.src}
              alt={work.coverImage.alt}
              loading="eager"
              decoding="async"
            />
          )}
        </div>
      </Reveal>

      <Reveal as="section" className={styles.metaGrid}>
        <article className={styles.metaCard}>
          <p className={styles.metaLabel}>Period</p>
          <p className={styles.metaValue}>{work.period}</p>
        </article>
        <article className={styles.metaCard}>
          <p className={styles.metaLabel}>Team</p>
          <p className={styles.metaValue}>{work.teamSize}</p>
        </article>
        <article className={styles.metaCard}>
          <p className={styles.metaLabel}>Role</p>
          <div className={styles.chipList}>
            {work.role.map((role) => (
              <span key={role} className={styles.roleChip}>
                {role}
              </span>
            ))}
          </div>
        </article>
        <article className={styles.metaCard}>
          <p className={styles.metaLabel}>Tools</p>
          <div className={styles.chipList}>
            {work.tools.map((tool) => (
              <span key={tool} className={styles.toolChip}>
                {tool}
              </span>
            ))}
          </div>
        </article>
      </Reveal>

      <div className={styles.body}>
        <Reveal as="section" className={styles.detailCard}>
          <p className={styles.detailEyebrow}>Overview</p>
          <h2 className={styles.detailTitle}>概要</h2>
          <p className={styles.detailText}>{work.summary}</p>
        </Reveal>

        <Reveal as="section" className={styles.detailCard}>
          <p className={styles.detailEyebrow}>Challenge</p>
          <h2 className={styles.detailTitle}>担当と工夫</h2>
          <p className={styles.detailText}>{work.challenge}</p>
        </Reveal>

        <Reveal as="section" className={styles.detailCard}>
          <p className={styles.detailEyebrow}>Result</p>
          <h2 className={styles.detailTitle}>成果と導線</h2>
          <p className={styles.detailText}>{work.result}</p>
          {work.externalLinks.length > 0 ? (
            <div className={styles.actions}>
              {work.externalLinks.map((link) => (
                <a
                  key={`${link.label}-${link.url}`}
                  href={link.url}
                  className={styles.actionLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
            <p className={styles.pendingNote}>
              外部リンクはまだ設定されていません。`src/data/siteContent.ts` の `externalLinks`
              に追加するとここに表示されます。
            </p>
          )}
        </Reveal>
      </div>

      <section className={styles.gallerySection}>
        <Reveal className={styles.galleryHeader}>
          <p className={styles.detailEyebrow}>Gallery</p>
          <h2 className={styles.detailTitle}>補足ビジュアル</h2>
          <p className={styles.detailText}>
            静止画だけでも成立するように、メインビジュアルの下に補足用の並びを置いています。
          </p>
        </Reveal>
        <div className={styles.galleryGrid}>
          {work.gallery.map((image) => (
            <Reveal key={image.alt}>
              <div className={styles.galleryCard}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={styles.galleryImage}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
