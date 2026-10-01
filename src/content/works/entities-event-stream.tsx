import styles from './WorkRichContent.module.css';

export function EntitiesEventStreamContent() {
  return (
    <article className={styles.content}>
      <section className={styles.section}>
        <h2 className={styles.heading}>作品概要</h2>
        <p className={styles.paragraph}>
          EntitiesEventStreamは、Unity ECS / Job Systemでunmanagedイベントを扱うためのライブラリです。
          イベントを書き込む側と読み取る側を分け、並列Jobからの生成と複数のSystemによる読み取りを支える基盤として設計しました。
        </p>
        <p className={styles.paragraph}>
          CPUキャッシュ、メモリレイアウト、並列処理について学んだ内容を、
          データの保存方法、公開タイミング、Writerの安全性へ結び付けた制作です。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>制作の経緯</h2>
        <p className={styles.paragraph}>
          当初はannulusgamesさんの
          <a href="https://github.com/annulusgames/EntitiesEvents" target="_blank" rel="noreferrer">EntitiesEvents</a>
          をフォークして改良する方針でした。
          その後、最初から作った方がよいと判断し、EntitiesEventStreamを新たに設計・実装しました。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>並列書き込みとメモリ配置</h2>
        <p className={styles.paragraph}>
          並列書き込みではworkerごとにlaneを分けています。
          全workerが1つの書き込み位置を更新する共有atomic append counterを使わず、
          それぞれの領域へイベントを書き込む構成です。書き込み先を分けることで、共有位置の更新で競合する構造を避けました。
        </p>
        <p className={styles.paragraph}>
          メインスレッド用のストレージ、segmentの管理領域、readerの容量は必要に応じて確保します。
          一方、並列workerの書き込み容量はあらかじめ設定する方式とし、
          動的に増やす領域とJobから書き込む領域の扱いを分けています。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>コピーを伴わない公開と読み取り</h2>
        <p className={styles.paragraph}>
          書き込んだイベントは、ペイロードを別の配列へコピーせず、変更されないsegmentとして公開します。
          readerは公開されたデータを参照して読み取り、消費後に自身のcursorを進めます。
          データを移動する処理と、利用可能な範囲を決める処理を分けた設計です。
        </p>
        <p className={styles.paragraph}>
          cursorはreaderごとに独立しています。あるSystemが読み取ったことで、別のSystemの読み取り位置が進むことはありません。
          通常のスコープ付き読み取りに加え、読み取り範囲と確定を明示するAPIも用意し、部分的な消費を扱えるようにしています。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>登録とライフサイクル</h2>
        <p className={styles.paragraph}>
          イベント型の登録とライフサイクルSystemの生成にはSource Generatorを使用しています。
          公開したフレームの末尾まで保持する方式と、もう1フレーム保持する方式を用意し、
          イベントの用途に応じて寿命を選べるようにしました。
        </p>
        <p className={styles.paragraph}>
          読み取りや公開の前には関連するJobの依存関係を完了させます。
          イベントの保持期間だけでなく、書き込みJobが終了する時点と読み取れる時点を揃えることを重視しました。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>不正な書き込みの検出</h2>
        <p className={styles.paragraph}>
          通常のWriteでは、公開後に失効したWriter、不正なworker lane、容量超過を検出します。
          検証に失敗した場合はイベントを書き込まず、結果を返すことで呼び出し側が対処できるようにしています。
          高速化だけでなく、不正なメモリアクセスを防ぐことも設計の対象にしました。
        </p>
        <p className={styles.paragraph}>
          検証を省くWriteUncheckedも用意していますが、利用側が寿命と容量を保証する必要があります。
          サンプルとProfilerで、書き込み・公開・読み取りなど処理ごとの負荷を測定できるようにしています。
        </p>
      </section>
    </article>
  );
}
