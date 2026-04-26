import { useEffect, type CSSProperties } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GalleryTabs } from '../components/GalleryTabs';
import { MusicGallerySection } from '../components/MusicGallerySection';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { WorkCard } from '../components/WorkCard';
import {
  galleryItems,
  musicItems,
  musicSectionMeta,
  sectionHeadingTones,
  siteProfile,
  works,
} from '../data/siteContent';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { getReadableTextColor } from '../lib/colorContrast';
import type { RouteLocationState } from '../lib/scrollRestoration';
import styles from './HomePage.module.css';

export function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();
  const threeDcgItems = galleryItems.filter((item) => item.category === '3dcg');
  const profileEyebrowStyle: CSSProperties = {
    backgroundColor: sectionHeadingTones.profile.backgroundColor,
    color:
      sectionHeadingTones.profile.foregroundColor ??
      getReadableTextColor(sectionHeadingTones.profile.backgroundColor),
  };

  useEffect(() => {
    const state = location.state as RouteLocationState | null;
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
  return (
    <div className={styles.page}>
      <Reveal as="section" className={styles.profile}>
        <div className={styles.profileMain}>
          <p
            className={`${styles.profileEyebrow} ${styles.profileEyebrowTone}`}
            style={profileEyebrowStyle}
          >
            Profile
          </p>
          <h1 className={styles.profileName}>{siteProfile.name}</h1>
          <p className={styles.profileTitle}>{siteProfile.heroTitle}</p>
          <p className={styles.profileBody}>{siteProfile.heroBody}</p>
        </div>
        <div className={styles.profileAside}>
          <h2 className={styles.profileAsideTitle}>About</h2>
          <p className={styles.profileAsideText}>{siteProfile.intro}</p>
          <Link to="/about" className={styles.inlineButton}>
            Aboutページへ
          </Link>
        </div>
      </Reveal>

      <section id="works" className={styles.section}>
        <Reveal className={styles.sectionHeader}>
          <SectionHeading
            eyebrow="Game"
            title="Game"
            description="個人・チームで制作したゲームの一覧です。詳細ページで担当範囲などが確認できます。"
            tone={sectionHeadingTones.game}
          />
        </Reveal>
        <div className={styles.worksList}>
          {works.map((work) => (
            <Reveal key={work.slug}>
              <WorkCard work={work} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="music" className={styles.section}>
        <Reveal className={styles.sectionHeader}>
          <SectionHeading
            eyebrow="Music"
            title="Music"
            description="ニコニコ動画とSpotifyなどに公開した楽曲です。"
            tone={sectionHeadingTones.music}
          />
        </Reveal>
        <MusicGallerySection
          items={musicItems}
          sectionMeta={musicSectionMeta}
          showHeader={false}
        />
      </section>

      <section id="three-dcg" className={styles.section}>
        <Reveal className={styles.sectionHeader}>
          <SectionHeading
            eyebrow="3DCG"
            title="3DCG"
            description="3DCG やアニメーションなどの作品です。"
            tone={sectionHeadingTones.threeDcg}
          />
        </Reveal>
        <Reveal>
          <GalleryTabs items={threeDcgItems} showGroupHeader={false} />
        </Reveal>
      </section>

      <section id="contact" className={styles.section}>
        <Reveal className={styles.sectionHeader}>
          <SectionHeading
            eyebrow="Contact"
            title="Contact"
            description={siteProfile.contactNote}
            tone={sectionHeadingTones.contact}
          />
        </Reveal>
        <Reveal className={styles.contactList}>
          {siteProfile.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className={styles.contactItem}
              target={link.url.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.url.startsWith('mailto:') ? undefined : 'noreferrer'}
            >
              <span className={styles.contactItemLabel}>{link.label}</span>
              <span className={styles.contactItemValue}>{link.url.replace('mailto:', '')}</span>
            </a>
          ))}
        </Reveal>
      </section>
    </div>
  );
}
