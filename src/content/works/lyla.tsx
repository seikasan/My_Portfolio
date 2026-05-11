import { YouTubeEmbed } from '../../components/YouTubeEmbed';
import styles from './WorkRichContent.module.css';

const overviewParagraphs = [
  'Lyla は、雨の降った夜の都会をアニメ調のキャラクターが歩き回る実験的な3D散策ゲームです。ツールの使い方を学ぶための作品として制作しました。',
];

const productionParagraphs = [
  '制作では QFramework を使い、Unity 上での構成や実装フローを試しました。キャラクター操作やシーンの見え方を組み立てながら、フレームワークを使った開発の感触を確かめることができました。',
  'Lyla の 3D モデルは VRoid Studio で制作しました。Unity ではトゥーンレンダリングを使い、現代的な見え方を目指しました。',
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
          caption="雨の降った夜の都会を歩くプレイ映像"
        />
      </section>
    </article>
  );
}
