import { YouTubeEmbed } from '../../components/YouTubeEmbed';
import styles from './WorkRichContent.module.css';

export function SuperBallContent() {
  return (
    <article className={styles.content}>
      <section className={styles.section}>
        <h2 className={styles.heading}>作品概要</h2>
        <p className={styles.paragraph}>
          「SUPER BALL!」は、上下に自動バウンドするボールをゴールへ導くアクションゲームです。
          プレイヤーは左右スワイプでボールではなくステージ側を動かし、壊れるブロックやチェックポイントを経由しながら進みます。
          Android端末でのプレイを想定し、ゴール到達やコイン・ダイヤの収集数を評価要素として設計しました。
        </p>
        <p className={styles.paragraph}>
          「CyberAgent プロトスプリントリーグ 2026夏」にて、3人チームで2日間のハッカソン形式で制作しました。
          私は設計と進行管理を担当し、個人賞を受賞しました。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>プレイ映像</h2>
        <YouTubeEmbed
          videoUrl="https://youtu.be/YdomJ41PSZs"
          title="SUPER BALL! プレイ映像"
          entryLabel="プレイ映像をYouTubeで開く"
        />
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>短期間で作るための準備</h2>
        <p className={styles.paragraph}>
          事前実装が禁止されていたため、本番前の1週間はコードを書く代わりに詳細設計へ注力しました。
          当日に仕様検討や分担で迷う時間をなくし、実装に集中できるよう、まずは最低限盛り込む要素を定義。
          その上で各クラスの責務や依存関係を整理し、タスクの分解と実装順序を明確にしました。
        </p>
        <p className={styles.paragraph}>
          また、メインゲームだけでなく、タイトル・ステージ・設定画面の遷移や、リザルト画面の表示項目、セーブ仕様も事前に策定しました。
          開始から結果確認までの全体フローを揃えておくことで、各自が並行して実装を進めてもスムーズに結合できるように工夫しました。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>担当した設計と進行</h2>
        <p className={styles.paragraph}>
          詳細クラス設計をもとに作業をタスクへ落とし込み、ゲームフロー、セーブ機能、リザルト画面の設計を主導しました。
          2日間という極めて短い開発期間でもチームが迷わず手を動かせるよう、依存関係を考慮した実装順序の共有や優先度の管理を徹底しました。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>制作を通じて</h2>
        <p className={styles.paragraph}>
          この開発を通じて、ゲームロジックだけでなく操作に対するフィードバックの重要性を強く実感しました。
          効果音やエフェクト、カメラワークなどを後から付け足すのではなく、制作の初期段階から手触りの良さの一部として設計に組み込む意識が身につきました。
        </p>
      </section>
    </article>
  );
}
