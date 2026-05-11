import styles from './WorkRichContent.module.css';

const overviewParagraphs = [
  'MyArchitecture は、Unity でゲームを作るときに読みやすいコードになるように作っている自分用の軽量アーキテクチャです。',
  'View / Presenter / GameService / Model / Utility という役割に分け、状態変更は Command、状態取得は Query、通知は Event、View から Presenter への入力は ViewSignal として扱います。DI には VContainer を使い、UniTask や MessagePipe と組み合わせる前提で設計しています。',
];

const backgroundParagraphs = [
  'きっかけは、QFramework や VContainer を使ったときに感じた不満でした。Controller は Command を通じて Model を変更するはずが、実装上は Model を直接変更できてしまうなど、規約だけでは防ぎきれない事故の余地が残る場面があります。',
  '特にチーム制作では、全員が同じ設計思想を同じ深さで理解しているとは限りません。',
  'そこで MyArchitecture では、Presenter に Model 本体ではなく、ジェネレーターで自動生成した読み取り専用 Model を渡す方針にしています。状態を変えるときは Command を通す、状態を読むときは ReadOnlyModel や Query を使う、という流れをコード上でも自然に守れるようにしたかったからです。',
];

const designParagraphs = [
  '設計で重視しているのは、できることとできないことを明確にロジックで分離することです。View は表示、入力、演出に集中し、Presenter は View とアプリケーション側をつなぎ、GameService はゲームルールや Model の変更を担当します。',
  'pure C# の event や R# の Observable は便利ですが、購読破棄を忘れるとバグの原因になります。そのため SubscribeTo や SubscribeEvent を用意し、購読をライフタイムに紐づけて安全に使えるようにしています。',
  'また、敵、弾、ノーツ、NPC のように実行中に複数生成されるものを扱うために Entity の仕組みも用意しています。Unity らしい Prefab 生成や Scene 上の View と、アプリケーション側の状態管理をどう同期させるかも、このリポジトリで試しているテーマです。',
];

const usageParagraphs = [
  '実装者向けには、普段どの層でどのメソッドを使うかを usage にまとめています。ドキュメントは単なる API 一覧ではなく、チーム内で「この場面ではこう書く」を共有するためのメモとして作っています。',
  'VContainer、MessagePipe、R3、UniTask と組み合わせる前提で、Command / Query / GameService / Model / Presenter を同じ DI の仕組みに乗せています。Unity6.3 以降で動作確認しながら、実際に使って困る部分を直していく予定です。',
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
        <h2 className={styles.heading}>今後の位置づけ</h2>
        <Paragraphs paragraphs={usageParagraphs} />
      </section>
    </article>
  );
}
