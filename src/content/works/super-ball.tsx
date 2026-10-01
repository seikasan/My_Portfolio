import styles from './WorkRichContent.module.css';

export function SuperBallContent() {
  return (
    <article className={styles.content}>
      <section className={styles.section}>
        <h2 className={styles.heading}>作品概要</h2>
        <p className={styles.paragraph}>
          SUPER BALL! は、ボールが自動的に上下へバウンドする1画面型のアクションゲームです。
          プレイヤーは左右のスワイプでボールを動かし、壊せるブロックやチェックポイントを経由してゴールを目指します。
          Androidでの操作を想定し、ゴールへの到達、コイン、ダイヤを評価要素として用意しました。
        </p>
        <p className={styles.paragraph}>
          CyberAgent Proto Sprint League 2026で、3人チーム・2日間で制作しました。
          私は設計、進行管理を担当し、個人賞を受賞しました。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>短期間で作るための準備</h2>
        <p className={styles.paragraph}>
          事前実装が禁止されていたため、1週間の事前期間はコードを書く代わりに詳細設計を進めました。
          最初に最低限盛り込む要素を決め、クラスの役割と依存関係、担当するタスク、実装する順番を整理しました。
          当日に仕様や分担を考える時間を減らし、限られた時間を実装に使うことが狙いです。
        </p>
        <p className={styles.paragraph}>
          ゲーム本編だけでなく、Title、Stage、Settingsの画面遷移、結果画面で表示する内容、
          セーブする情報も事前に整理しました。プレイ開始から結果の確認までの流れを揃えることで、
          各担当が別々に実装しても接続先を判断しやすくすることを意識しました。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>担当した設計と進行</h2>
        <p className={styles.paragraph}>
          作業の優先順位を決め、詳細クラス設計をタスクへ分割しました。
          結果画面、セーブ仕様、ゲームフローの設計を主導し、実装の順序をチームで共有しました。
          ゲーム全体はチームで制作した成果であり、私の主な担当は、短い開発時間の中で作業を進めるための設計と進行管理です。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>制作を通じて</h2>
        <p className={styles.paragraph}>
          この制作をきっかけに、ゲームのロジックだけでなく、操作に返すフィードバックをより重視するようになりました。
          音、視覚効果、カメラの動きなどを後から付け足すのではなく、制作の初期から遊びの手触りと一緒に考えるようにしています。
        </p>
      </section>
    </article>
  );
}
