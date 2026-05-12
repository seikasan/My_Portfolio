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

const skillUsage: Record<string, string> = {
  Unity: 'ゲーム制作、ステージ実装、演出、UI、ギミック制作に使用。',
  'C#': 'Unityゲームのプレイヤー、敵、アクター、ツール連携の実装に使用。',
  Blender: 'ちょこ旅の小物、背景素材、タイトル周りの3D素材制作に使用。',
  'Studio One': 'ゲームBGM、ボカロ曲、場面に合わせた編曲制作に使用。',
  GitHub: 'チーム開発、自作アーキテクチャ、制作ツールの管理に使用。',
  TypeScript: 'ReactポートフォリオやWebツールの実装に使用。',
  JavaScript: 'チョコ旅マップエディターなど、軽量な制作支援ツールに使用。',
  HTML: 'Webツールやポートフォリオの画面構成に使用。',
  CSS: 'ポートフォリオや制作支援ツールのUI表現に使用。',
  'C++': 'Siv3D作品などのゲーム制作で使用。',
};

function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className={styles.heading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
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
          eyebrow="Creative Background"
          title="複数の表現を、ゲームの中で接続する。"
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
        </div>
      </Reveal>

      <section className={styles.section}>
        <Reveal>
          <PageHeading
            eyebrow="Skills"
            title="Tools in Context"
            description="使える技術の羅列ではなく、どの制作でどう使っているかが見えるように整理しています。"
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
                        {skillUsage[item.name] ?? item.note ?? '制作の中で必要に応じて使用。'}
                      </span>
                    </span>
                    {item.experience ? (
                      <span className={styles.skillMeta}>{item.experience}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <Reveal>
          <PageHeading eyebrow="Education" title="Education" />
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
          <PageHeading eyebrow="Activities" title="Activities" />
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
