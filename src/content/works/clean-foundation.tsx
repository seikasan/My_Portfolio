import styles from './WorkRichContent.module.css';

export function CleanFoundationContent() {
  return (
    <article className={styles.content}>
      <section className={styles.section}>
        <h2 className={styles.heading}>作品概要</h2>
        <p className={styles.paragraph}>
          CleanFoundationは、Domain層をUnityEngineに依存させずにVector3などの値型を使うためのライブラリです。
          ゲームのルールを記述する際に必要なベクトルや回転などの値と計算を、Pure C#で扱えるようにしています。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>使い慣れたAPIをPure C#へ</h2>
        <p className={styles.paragraph}>
          Vector2、Vector3、Quaternion、Color、Mathfなど、Unityで使い慣れたAPIで値型と数学処理を用意しています。
          数学・幾何処理はPure C#で実装しているので、Unityなしでコンパイルできます。
        </p>
        <p className={styles.paragraph}>
          Unity環境では対応するUnityEngine型との暗黙変換を有効にしています。
          Domain層ではCleanFoundationの型を使用し、Unityと接続する箇所では暗黙にUnityEngine型と受け渡しできるようにしました。
          System.NumericsがなぜUnityに暗黙変換できないのか、できたら便利なのに。
        </p>
      </section>
    </article>
  );
}
