import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MusicGallerySection } from '../components/MusicGallerySection';
import { Reveal } from '../components/Reveal';
import { WorkCard } from '../components/WorkCard';
import topVisual from '../assets/hero/top-visual.png';
import { musicItems, musicSectionMeta, siteProfile, works } from '../data/siteContent';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { getWorkPresentation } from '../lib/workPresentation';
import type { RouteLocationState } from '../lib/scrollRestoration';
import styles from './HomePage.module.css';

const tickerItems = [
  'Unity / C#',
  'Studio One 6yr',
  'Blender 4yr',
  'Scenario Writing',
  'Shader Graph',
  'QFramework',
  'VContainer',
  'Vocaloid',
  'Comiket Exhibitor',
  'Aizu University',
];

const stats = ['7+ Works', '6yr Studio One', '4yr Blender', 'Comiket Exhibitor'];

const galleryOrder = [
  'choco-tabi',
  'my-architecture',
  'access-to-your-5-girls',
  'lyla',
  'return-false',
  'lost-of-music',
  'choco-map-maker',
];

export function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();
  const workMap = new Map(works.map((work) => [work.slug, work]));
  const galleryWorks = galleryOrder
    .map((slug) => workMap.get(slug))
    .filter((work): work is (typeof works)[number] => Boolean(work));

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    const state = location.state as RouteLocationState | null;
    const targetId = state?.scrollTo;

    if (!targetId) {
      return;
    }

    const timer = window.setTimeout(() => {
      scrollToSection(targetId);
      navigate(location.pathname, { replace: true, state: null });
    }, 60);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.state, navigate, reducedMotion]);

  return (
    <div className={styles.page}>
      <Reveal as="section" className={styles.hero} id="top">
        <img
          className={styles.heroVisual}
          src={topVisual}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
        />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Portfolio — 2026</p>
          <div className={styles.signature}>
            <h1 className={styles.heroName}>
              <span>seika</span>
            </h1>
            <img
              className={styles.heroAvatar}
              src={siteProfile.avatar.src}
              alt={siteProfile.avatar.alt}
              width="56"
              height="56"
            />
          </div>
          <p className={styles.heroTitle}>Game / Music / 3DCG</p>
          <p className={styles.heroBody}>
            ゲーム、音楽、3D、物語をまたいで制作しています。<br />
            企画、実装、音、モデリング、シナリオをつなげて作品にします。
          </p>
          <div className={styles.heroActions}>
            <button
              type="button"
              className={styles.primaryButton}
              onClick={() => scrollToSection('works')}
            >
              View works
            </button>
            <button
              type="button"
              className={styles.secondaryButton}
              onClick={() => scrollToSection('music')}
            >
              Listen to music
            </button>
          </div>
        </div>
      </Reveal>

      <section className={styles.ticker} aria-label="Creative tools and activity">
        <div className={styles.tickerTrack}>
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`} className={styles.tickerItem}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <Reveal as="section" className={styles.aboutStrip}>
        <Link to="/about" className={styles.aboutStripLink}>
        <div>
          <p className={styles.sectionEyebrow}>About</p>
          <h2 className={styles.stripTitle}>制作領域を、ひとつの作品世界へ。</h2>
        </div>
        <p className={styles.stripText}>
          幼少期から作曲、プログラミング、3D制作、小説、漫画に親しみ、現在はそれらをゲーム制作に統合しています。
          作品のルールだけでなく、音、画面、会話、手触りまで含めて設計することを大切にしています。
        </p>
        <div className={styles.statList}>
          {stats.map((stat) => (
            <span key={stat} className={styles.statItem}>
              {stat}
            </span>
          ))}
        </div>
        </Link>
      </Reveal>

      <section id="works" className={styles.section}>
        <Reveal className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Works</h2>
          <p className={styles.sectionDescription}>
            作品ごとに、ゲーム、音楽、3D、シナリオ、設計のどこを担当したかが見えるように並べています。
          </p>
        </Reveal>
        <div className={styles.worksGallery}>
          {galleryWorks.map((work) => {
            const presentation = getWorkPresentation(work.slug);

            return (
              <Reveal
                key={work.slug}
                className={`${styles.workSlot} ${styles[`workSlot_${presentation.variant}`]}`}
              >
                <WorkCard
                  work={work}
                  variant={presentation.variant}
                  tone={presentation.tone}
                />
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="music" className={`${styles.section} ${styles.musicSection}`}>
        <Reveal className={styles.musicHeader}>
          <h2 className={styles.musicTitle}>Music</h2>
          <p className={styles.musicDescription}>
            ボカロ曲、インスト、ゲームBGMを、ページ内でそのまま聴けるようにまとめています。
          </p>
        </Reveal>
        <MusicGallerySection
          items={musicItems}
          sectionMeta={musicSectionMeta}
          showHeader={false}
        />
      </section>

      <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
        <Reveal className={styles.contactPanel}>
          <h2 className={styles.contactTitle}>Get in Touch</h2>
          <p className={styles.contactText}>{siteProfile.contactNote}</p>
          <div className={styles.contactList}>
            {siteProfile.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className={styles.contactItem}
                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.url.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                <span>{link.label}</span>
                <strong>{link.url.replace('mailto:', '')}</strong>
              </a>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
