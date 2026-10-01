import styles from './WorkRichContent.module.css';

const overviewParagraphs = [
  'MyArchitecture は、Unity向けの自作アーキテクチャです。責務分割とコード生成を通じて、チームで読みやすく、誤操作を防ぎやすいコードを目指しました。',
  'View / Presenter / GameService / Model / Utilityに役割を分け、Command / Query / Event / ViewSignalで操作を整理する構成を検証しました。',
  '2026年5月から7月に制作し、開発を終了しました。',
];

const backgroundParagraphs = [
  'きっかけは、QFramework や VContainer を使ったときに感じた不満でした。Controller は Command を通じて Model を変更するはずが、実装上は Model を直接変更できてしまうなど、規約だけでは防ぎきれない事故の余地が残る場面があります。',
  '特にチーム制作では、全員が同じ設計思想を同じ深さで理解しているとは限りません。',
  'そこで、PresenterにModel本体ではなく、ジェネレーターで自動生成した読み取り専用Modelを渡す構成を試しました。状態変更と読み取りの区別をコード上でも守れるようにすることが当時の狙いでした。',
];

const designParagraphs = [
  '当時は、表示・入力・演出とゲームルールを分離し、購読をライフタイムに紐づける仕組みや、実行中に生成されるEntityの管理を検証しました。',
  '責務を分けることだけでなく、実際にコードの流れを追いやすいか、仕組みが問題に対して大きすぎないかを見直す必要があると考えています。',
];

const usageParagraphs = [
  'VContainer、MessagePipe、R3、UniTaskと組み合わせ、各層で使うAPIをドキュメントにまとめました。チーム内で実装の書き方を共有するための基盤として検証しました。',
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

export function MyArchitectureContent() {
  return (
    <article className={styles.content}>
      <section className={styles.section}>
        <h2 className={styles.heading}>作品概要</h2>
        <Paragraphs paragraphs={overviewParagraphs} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>作った背景</h2>
        <Paragraphs paragraphs={backgroundParagraphs} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>設計で意識したこと</h2>
        <Paragraphs paragraphs={designParagraphs} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>利用方法</h2>
        <Paragraphs paragraphs={usageParagraphs} />
      </section>
    </article>
  );
}
