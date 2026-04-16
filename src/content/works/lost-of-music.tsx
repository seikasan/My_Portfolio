import { SoundCloudEmbed } from '../../components/SoundCloudEmbed';
import { WorkSpoilerSection } from './WorkSpoilerSection';
import styles from './WorkRichContent.module.css';

const soundCloudProfile = {
  url: 'https://soundcloud.com/seika-461144239',
  label: 'seika',
};

const overviewParagraphs = [
  '音楽が無くなってしまった世界で楽器を集めながら進む2Dアクションゲームです。',
  '私はコンポーザーとして、楽器が徐々に増えていくBGMの制作を担当しました。各楽器に平等な機会を与えるのに苦労しました。',
];

const scenarioParagraphs = [
  'シナリオでは、キャラクター名や舞台名に花のモチーフを取り入れています。単なる命名ではなく、花言葉が人物像や関係性、各ルートの結末と共鳴するように設計しました。',
  'たとえば、表向きは明るく親しみやすい人物でも、花言葉を踏まえると執着や別離の気配が先に埋め込まれているというように、名前そのものが小さな伏線として機能する構成にしています。',
];

const musicIntroParagraphs = [
  '通常BGM1曲とそのオルゴールアレンジ、プロローグBGMを制作しました。',
  '通常BGMは楽器が徐々に増えていっても破綻がないように、メロディを交互に担当させました。',
];

const tracks = [
  {
    title: '通常BGM',
    embedSrc:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2301016646&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    entryUrl: 'https://soundcloud.com/seika-461144239/toututei-2',
    entryLabel: '通常BGM',
  },
];

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={`${paragraph.slice(0, 16)}-${index}`} className={styles.paragraph}>
          {paragraph}
        </p>
      ))}
    </>
  );
}

export function LostOfMusicContent() {
  return (
    <article className={styles.content}>
      <section className={styles.section}>
        <h2 className={styles.heading}>概要</h2>
        <Paragraphs paragraphs={overviewParagraphs} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>楽曲について</h2>
        <Paragraphs paragraphs={musicIntroParagraphs} />
        <div className={styles.trackList}>
          {tracks.map((track) => (
            <section key={track.title} className={styles.trackSection}>
              <h3 className={styles.subheading}>{track.title}</h3>
              <SoundCloudEmbed
                embedSrc={track.embedSrc}
                title={track.title}
                entryUrl={track.entryUrl}
                entryLabel={track.entryLabel}
                profileUrl={soundCloudProfile.url}
                profileLabel={soundCloudProfile.label}
              />
            </section>
          ))}
        </div>
      </section>
    </article>
  );
}
