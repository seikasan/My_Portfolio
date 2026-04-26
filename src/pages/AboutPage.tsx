import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { SkillLogo } from '../components/SkillLogo';
import {
  aboutSummary,
  activityHistory,
  educationHistory,
  sectionHeadingTones,
  siteProfile,
  skillGroups,
} from '../data/siteContent';
import styles from './AboutPage.module.css';

export function AboutPage() {
  return (
    <div className={styles.page}>
      <Reveal as="section" className={styles.hero}>
        <div className={styles.heroCopy}>
          <SectionHeading
            eyebrow="About"
            title="About"
            description={aboutSummary}
            tone={sectionHeadingTones.about}
          />
          <Link to="/" className={styles.backLink}>
            トップに戻る
          </Link>
        </div>

        <div className={styles.heroCard}>
          <p className={styles.heroLabel}>Profile</p>
          <h2 className={styles.heroName}>{siteProfile.name}</h2>
          <p className={styles.heroTitle}>{siteProfile.heroTitle}</p>
          <p className={styles.heroBody}>{siteProfile.heroBody}</p>
        </div>
      </Reveal>

      <section className={styles.section}>
        <Reveal className={styles.sectionHeader}>
          <SectionHeading
            eyebrow="Skills"
            title="Skills"
            description="継続して使っているものと、授業で少し触れたものです。"
            tone={sectionHeadingTones.skills}
          />
        </Reveal>
        <div className={styles.skillGrid}>
          {skillGroups.map((group) => (
            <Reveal key={group.title} className={styles.card}>
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
                      {item.note ? <span className={styles.skillNote}>{item.note}</span> : null}
                    </span>
                    {item.experience ? <span className={styles.skillMeta}>{item.experience}</span> : null}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <Reveal className={styles.sectionHeader}>
          <SectionHeading
            eyebrow="Education"
            title="Education"
            description=""
            tone={sectionHeadingTones.education}
          />
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
        <Reveal className={styles.sectionHeader}>
          <SectionHeading
            eyebrow="Activities"
            title="Activities"
            description=""
            tone={sectionHeadingTones.activities}
          />
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
