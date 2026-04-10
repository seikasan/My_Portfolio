import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GalleryTabs } from '../components/GalleryTabs';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { WorkCard } from '../components/WorkCard';
import { galleryItems, siteProfile, works } from '../data/siteContent';
import { useReducedMotion } from '../hooks/useReducedMotion';
import styles from './HomePage.module.css';

interface LocationState {
  scrollTo?: string;
}

export function HomePage() {
  const featuredWorks = works.filter((work) => work.featured);
  const location = useLocation();
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const state = location.state as LocationState | null;
    const targetId = state?.scrollTo;

    if (!targetId) {
      return;
    }

    const timer = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });

      navigate(location.pathname, { replace: true, state: null });
    }, 60);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.state, navigate, reducedMotion]);

  const scrollToWorks = () => {
    document.getElementById('works')?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <div className={styles.page}>
      <Reveal as="section" className={styles.hero}>
        <div className={styles.heroPanel}>
          <p className={styles.heroEyebrow}>Creative Portfolio</p>
          <h1 className={styles.heroName}>{siteProfile.name}</h1>
          <p className={styles.heroTitle}>{siteProfile.heroTitle}</p>
          <p className={styles.heroBody}>{siteProfile.heroBody}</p>
          <button type="button" className={styles.heroButton} onClick={scrollToWorks}>
            代表作品を見る
          </button>
        </div>
        <div className={styles.heroStats}>
          <article className={styles.statCard}>
            <span className={styles.statValue}>{works.length.toString().padStart(2, '0')}</span>
            <span className={styles.statLabel}>Works</span>
          </article>
          <article className={styles.statCard}>
            <span className={styles.statValue}>{galleryItems.length.toString().padStart(2, '0')}</span>
            <span className={styles.statLabel}>Gallery</span>
          </article>
          <article className={styles.statCard}>
            <span className={styles.statValue}>{siteProfile.links.length.toString().padStart(2, '0')}</span>
            <span className={styles.statLabel}>Contact</span>
          </article>
        </div>
      </Reveal>

      <Reveal as="section" className={styles.introStrip}>
        <p>{siteProfile.intro}</p>
      </Reveal>

      <section id="works" className={styles.section}>
        <Reveal className={styles.sectionHeader}>
          <SectionHeading
            eyebrow="Featured"
            title="作品の魅力を先に見せる"
            description="最初に視線を集める代表作を大きく配置し、その下に一覧を続けることで、体験型とカタログ型の中間を狙っています。"
          />
        </Reveal>
        <div className={styles.featuredGrid}>
          {featuredWorks.map((work) => (
            <Reveal key={work.slug}>
              <WorkCard work={work} featured />
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.sectionHeader}>
          <SectionHeading
            eyebrow="Works"
            title="一覧から詳細へ自然につなぐ"
            description="カードでは比較しやすく、詳細ページでは役割と工夫が読めるように整理しています。画像や文言は `src/data/siteContent.ts` から差し替えられます。"
          />
        </Reveal>
        <div className={styles.worksGrid}>
          {works.map((work) => (
            <Reveal key={work.slug}>
              <WorkCard work={work} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="gallery" className={styles.section}>
        <Reveal className={styles.sectionHeader}>
          <SectionHeading
            eyebrow="Gallery"
            title="Illustration / 3DCG を分けて見せる"
            description="画像だけを並べるのではなく、カテゴリごとに切り替えて視線を整理しています。実画像へ差し替えても構造はそのまま使えます。"
          />
        </Reveal>
        <Reveal>
          <GalleryTabs items={galleryItems} />
        </Reveal>
      </section>

      <section id="contact" className={styles.section}>
        <Reveal className={styles.contactCard}>
          <div className={styles.contactBody}>
            <p className={styles.contactEyebrow}>Contact</p>
            <h2 className={styles.contactTitle}>連絡先</h2>
            <p className={styles.contactText}>{siteProfile.contactNote}</p>
          </div>
          <div className={styles.contactLinks}>
            {siteProfile.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className={styles.contactLink}
                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.url.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                <span>{link.label}</span>
                <span className={styles.contactArrow}>↗</span>
              </a>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
