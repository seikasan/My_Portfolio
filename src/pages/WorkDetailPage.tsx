import { Link, useLocation, useParams } from 'react-router-dom';
import { getWorkContent } from '../content/works';
import { Reveal } from '../components/Reveal';
import type { RouteLocationState } from '../lib/scrollRestoration';
import { works } from '../data/siteContent';
import styles from './WorkDetailPage.module.css';

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
          <p className={styles.missingEyebrow}>Not Found</p>
          <h1 className={styles.missingTitle}>作品が見つかりません</h1>
          <p className={styles.missingText}>URL が変わったか、まだデータに登録されていません。</p>
          <Link to="/" className={styles.backLink}>
            トップに戻る
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Reveal as="section" className={styles.headerBlock}>
        <Link
          to="/"
          state={detailState?.fromHome ? { restoreHomeScroll: true } : undefined}
          className={styles.backLink}
        >
          ← 作品一覧に戻る
        </Link>
        <p className={styles.category}>{work.category}</p>
        <h1 className={styles.title}>{work.title}</h1>
        <p className={styles.summary}>{work.summary}</p>
      </Reveal>

      <Reveal as="section" className={styles.infoBlock}>
        <h2 className={styles.sectionTitle}>基本情報</h2>
        <dl className={styles.infoList}>
          <div className={styles.infoRow}>
            <dt>期間</dt>
            <dd>{work.period}</dd>
          </div>
          <div className={styles.infoRow}>
            <dt>区分</dt>
            <dd>{work.category}</dd>
          </div>
          <div className={styles.infoRow}>
            <dt>役割</dt>
            <dd>{work.role.join(' / ')}</dd>
          </div>
          <div className={styles.infoRow}>
            <dt>使用技術</dt>
            <dd>{work.tools.join(' / ')}</dd>
          </div>
          <div className={styles.infoRow}>
            <dt>チーム</dt>
            <dd>{work.teamSize}</dd>
          </div>
          <div className={styles.infoRow}>
            <dt>外部リンク</dt>
            <dd>
              {work.externalLinks.length > 0 ? (
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
              ) : (
                <span className={styles.emptyNote}>未設定</span>
              )}
            </dd>
          </div>
        </dl>
      </Reveal>

      <Reveal as="section" className={styles.visualBlock}>
        <h2 className={styles.sectionTitle}>メインビジュアル</h2>
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

      {DetailContent ? (
        <Reveal as="section" className={styles.articleBlock}>
          <DetailContent />
        </Reveal>
      ) : (
        <div className={styles.detailStack}>
          <Reveal as="section" className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>概要</h2>
            <p className={styles.bodyText}>{work.summary}</p>
          </Reveal>

          <Reveal as="section" className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>担当と工夫</h2>
            <p className={styles.bodyText}>{work.challenge}</p>
          </Reveal>

          <Reveal as="section" className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>成果</h2>
            <p className={styles.bodyText}>{work.result}</p>
          </Reveal>
        </div>
      )}

      {work.gallery.length > 0 ? (
        <section className={styles.gallerySection}>
          <Reveal className={styles.galleryHeader}>
            <h2 className={styles.sectionTitle}>補足ビジュアル</h2>
            <p className={styles.bodyText}>
              詳細補足用の静止画を並べています。画像が少ない作品でも本文を先に読める構成です。
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
      ) : null}
    </div>
  );
}
