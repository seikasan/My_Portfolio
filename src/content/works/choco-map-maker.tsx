import chocoMapMakerBack from '../../assets/works/choco-tabi-map-editor/back.png';
import { ImageLightbox } from '../../components/ImageLightbox';
import styles from './WorkRichContent.module.css';

const overviewParagraphs = [
  'ちょこ旅マップエディターは、アクションゲーム「ちょこ旅」のステージ案を整理するために作った専用ツールです。Unity に直接読み込ませるための互換ツールではなく、二層構造のステージを考えるためのアイデア整理ツールとして制作しました。',
  'ちょこ旅のステージは、手前と奥の二層構造になっています。この特殊な仕様を前提にステージを組めるエディターが見つからなかったため、自分で作ることにしました。',
];

const intentParagraphs = [
  'アクションゲームのステージは、地形やギミックの配置を何度も考え直す必要があります。ちょこ旅ではそこに奥行という要素も加わるため、普通のマップ案よりも整理が難しくなります。',
  '紙や一般的な作図ツールでも案は出せますが、二層を切り替えながら考えられないと、ちょこ旅らしいステージ構成を詰めにくいと感じました。そこで、ゲーム本編とは別に、ステージの構想をまとめるためのツールとして作りました。',
];

const implementationParagraphs = [
  'エディター上では、手前と奥のレイヤーを切り替えながらマップを作成できます。二層を別々に見て考えられるため、奥行きを使ったルートやギミック配置を整理しやすくしています。',
  '保存と読み込みは JSON で行えるようにしました。Unity との互換性は持たせていませんが、案を保存し、あとから読み直して調整できる形にしています。',
  '制作では AI も活用しました。ただ生成されたものをそのまま使うのではなく、ちょこ旅の仕様に合う道具として扱えるように、必要な機能と使い方を整理しました。',
];

const resultParagraphs = [
  'この制作を通して、ゲーム本編に直接組み込まれないツールでも、アイデアを整理しやすくすることで開発に貢献できると感じました。',
  'もともとはちょこ旅用に作ったものですが、どうやら他のプロジェクトでも使われているようです。特定のゲームのために作った道具が、別の制作にも使われる形になったのは面白い結果でした。',
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

function LayerImage() {
  return (
    <figure className={styles.imageFigure}>
      <ImageLightbox
        src={chocoMapMakerBack}
        alt="ちょこ旅マップエディター 奥レイヤー編集画面"
        className={styles.inlineImage}
      />
      <figcaption className={styles.imageCaption}>
        手前と奥の二層構造を切り替えながらステージ案を作成できます。
      </figcaption>
    </figure>
  );
}

export function ChocoMapMakerContent() {
  return (
    <article className={styles.content}>
      <section className={styles.section}>
        <h2 className={styles.heading}>作品概要</h2>
        <Paragraphs paragraphs={overviewParagraphs} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>作った理由</h2>
        <Paragraphs paragraphs={intentParagraphs} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>実装で意識したこと</h2>
        <Paragraphs paragraphs={implementationParagraphs} />
        <LayerImage />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>得たこと</h2>
        <Paragraphs paragraphs={resultParagraphs} />
      </section>
    </article>
  );
}
