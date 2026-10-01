import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SkillLogo } from '../components/SkillLogo';
import {
  aboutSummary,
  activityHistory,
  educationHistory,
  siteProfile,
  skillGroups,
} from '../data/siteContent';
import styles from './AboutPage.module.css';
import type { ReactNode } from 'react';

function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className={styles.heading}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.headingTitle}>{title}</h2>
      {description ? <p className={styles.headingDescription}>{description}</p> : null}
    </div>
  );
}

export function AboutPage() {
  return (
    <div className={styles.page}>
      <Reveal as="section" className={styles.hero}>
        <div className={styles.profileBlock}>
          <img
            className={styles.avatar}
            src={siteProfile.avatar.src}
            alt={siteProfile.avatar.alt}
            width="120"
            height="120"
          />
          <div className={styles.profileCopy}>
            <p className={styles.eyebrow}>Profile</p>
            <h1 className={styles.name}>{siteProfile.name}</h1>
            <p className={styles.title}>{siteProfile.heroTitle}</p>
          </div>
        </div>
        <p className={styles.lead}>{aboutSummary}</p>
        <Link to="/" className={styles.backLink}>
          Back to Home
        </Link>
      </Reveal>

      <Reveal as="section" className={styles.creativeBackground}>
        <PageHeading
          eyebrow=""
          title={
            <>
              表現を、
              <br />
              ゲームへ。
            </>
          }
        />
        <div className={styles.textStack}>
          <p>
            幼少期から作曲、プログラミング、3D制作、小説、漫画に触れてきました。
            それぞれを別々の趣味としてではなく、現在はゲーム制作の中でつなげています。
          </p>
          <p>
            画面の見え方、BGMの空気、キャラクターの会話、遊びのルールを同じ作品世界の一部として扱い、
            自分で作れる範囲を広げながら制作しています。
          </p>
          <p>
            ゲームの設計だけでなく、入力に対する音や画面の反応を制作初期から考え、遊びの手触りを大切にしています。
          </p>
          <p>
            自作ライブラリの開発では、メモリ配置や並列処理にも取り組んでいます。
          </p>
        </div>
      </Reveal>

      <section className={styles.section}>
        <Reveal>
          <PageHeading
            eyebrow=""
            title="Languages / Tools"
            description=""
          />
        </Reveal>
        <div className={styles.skillGrid}>
          {skillGroups.map((group) => (
            <Reveal key={group.title} as="article" className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{group.title}</h3>
                {group.description ? (
                  <p className={styles.cardDescription}>{group.description}</p>
                ) : null}
              </div>
              <ul className={styles.skillList}>
                {group.items.map((item) => (
                  <li key={item.name} className={styles.skillItem}>
                    <SkillLogo logoId={item.logoId} label={item.name} />
                    <span className={styles.skillContent}>
                      <span className={styles.skillName}>{item.name}</span>
                      <span className={styles.skillNote}>
                        {item.note ?? '制作の中で必要に応じて使用。'}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <Reveal>
          <PageHeading eyebrow="" title="Education" />
        </Reveal>
        <Reveal className={styles.timeline}>
          {educationHistory.map((entry) => (
            <article key={`${entry.period}-${entry.title}`} className={styles.timelineItem}>
              <p className={styles.timelinePeriod}>{entry.period}</p>
              <div className={styles.timelineBody}>
                <h3 className={styles.timelineTitle}>{entry.title}</h3>
                {entry.description ? (
                  <p className={styles.timelineDescription}>{entry.description}</p>
                ) : null}
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      <section className={styles.section}>
        <Reveal>
          <PageHeading eyebrow="" title="Activities" />
        </Reveal>
        <Reveal className={styles.timeline}>
          {activityHistory.map((entry) => (
            <article key={`${entry.period}-${entry.title}`} className={styles.timelineItem}>
              <p className={styles.timelinePeriod}>{entry.period}</p>
              <div className={styles.timelineBody}>
                <h3 className={styles.timelineTitle}>{entry.title}</h3>
                {entry.description ? (
                  <p className={styles.timelineDescription}>{entry.description}</p>
                ) : null}
              </div>
            </article>
          ))}
        </Reveal>
      </section>
    </div>
  );
}
