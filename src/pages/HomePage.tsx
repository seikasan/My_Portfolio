import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GalleryTabs } from '../components/GalleryTabs';
import { MusicGallerySection } from '../components/MusicGallerySection';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { WorkCard } from '../components/WorkCard';
import {
  galleryItems,
  musicItems,
  musicSectionMeta,
  siteProfile,
  works,
} from '../data/siteContent';
import { useReducedMotion } from '../hooks/useReducedMotion';
import type { RouteLocationState } from '../lib/scrollRestoration';
import styles from './HomePage.module.css';

export function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();

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

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <div className={styles.page}>
      <Reveal as="section" className={styles.profile}>
        <div className={styles.profileMain}>
          <p className={styles.profileEyebrow}>Profile</p>
          <h1 className={styles.profileName}>{siteProfile.name}</h1>
          <p className={styles.profileTitle}>{siteProfile.heroTitle}</p>
          <p className={styles.profileBody}>{siteProfile.heroBody}</p>
        </div>
        <div className={styles.profileAside}>
          <h2 className={styles.profileAsideTitle}>About</h2>
          <p className={styles.profileAsideText}>{siteProfile.intro}</p>
          <div className={styles.profileActions}>
            <button
              type="button"
              className={styles.inlineButton}
              onClick={() => scrollToSection('works')}
            >
              作品一覧へ
            </button>
            <button
              type="button"
              className={styles.inlineButton}
              onClick={() => scrollToSection('contact')}
            >
              連絡先を見る
            </button>
          </div>
        </div>
      </Reveal>

      <section id="works" className={styles.section}>
        <Reveal className={styles.sectionHeader}>
          <SectionHeading
            eyebrow="Works"
            title="作品"
            description="タイトル、期間、区分、使用技術、概要が一覧で比較できる構成です。詳細ページでは担当範囲と工夫を確認できます。"
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

      <section id="gallery" className={styles.section}>
        <Reveal className={styles.sectionHeader}>
          <SectionHeading
            eyebrow="Gallery"
            title="Illustration / 3DCG"
            description="Gallery も Works と同じ重要度で残し、カテゴリを隠さず常時一覧できる構成にしています。"
          />
        </Reveal>
        <Reveal>
          <GalleryTabs items={galleryItems} />
        </Reveal>
        <Reveal>
          <MusicGallerySection items={musicItems} sectionMeta={musicSectionMeta} />
        </Reveal>
      </section>

      <section id="contact" className={styles.section}>
        <Reveal className={styles.sectionHeader}>
          <SectionHeading
            eyebrow="Contact"
            title="連絡先"
            description={siteProfile.contactNote}
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
