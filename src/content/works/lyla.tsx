import { YouTubeEmbed } from '../../components/YouTubeEmbed';
import styles from './WorkRichContent.module.css';

const overviewParagraphs = [
  'Lyla は、雨の降る夜の街をアニメ調のキャラクターが歩く、実験的な3D散策ゲームです。QFrameworkの練習として制作し、開発を終了しました。',
];

const productionParagraphs = [
  'QFrameworkを使い、キャラクター操作やシーンの構成を試しました。フレームワークを使った開発の流れを学ぶよい練習になりました。',
  'Lyla の 3Dモデルは VRoid Studio で制作しました。Unity ではトゥーンレンダリングを使い、現代的な見え方を目指しました。',
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

export function LylaContent() {
  return (
    <article className={styles.content}>
      <section className={styles.section}>
        <h2 className={styles.heading}>作品概要</h2>
        <Paragraphs paragraphs={overviewParagraphs} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>制作について</h2>
        <Paragraphs paragraphs={productionParagraphs} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>プレイ映像</h2>
        <YouTubeEmbed
          videoUrl="https://youtu.be/nGjPQEkK-gQ"
          title="Lyla プレイ映像"
          entryLabel="プレイ映像をYouTubeで開く"
          caption="雨の降る夜の街を歩くプレイ映像"
        />
      </section>
    </article>
  );
}
