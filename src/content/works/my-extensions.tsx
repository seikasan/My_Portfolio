import styles from './WorkRichContent.module.css';

export function MyExtensionsContent() {
  return (
    <article className={styles.content}>
      <section className={styles.section}>
        <h2 className={styles.heading}>作品概要</h2>
        <p className={styles.paragraph}>
          MyExtensionsは、自身のUnity開発で使う拡張を集めたリポジトリです。
          ゲーム制作で繰り返し書く処理や、既存APIで少し書きづらい部分を、自分の使い方に合わせてまとめています。
          R3、InputSystem.R3、Scenes、UniTaskの拡張を用意しています。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>R3：購読の破棄管理</h2>
        <p className={styles.paragraph}>
          MonoBehaviour以外のクラスでもAddTo(this)を使えるよう、DisposableObjectを用意しました。
          Pure C#のクラスでも購読をオブジェクトの寿命に紐づけ、破棄管理をまとめられます。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>InputSystem.R3：入力のObservable化</h2>
        <p className={styles.paragraph}>
          ジャンプや決定のような単発入力には、Input Actionのperformedを通知するPerformedAsObservableを使います。
          これは押下中の連続処理を表すAPIではないため、入力の瞬間と継続状態を分けています。
        </p>
        <p className={styles.paragraph}>
          押している間の処理にはWhilePressedAsObservable、移動値の継続取得にはReadValueAsObservableを用意しました。
          同じ値が続く場合でも現在値を通知し、押下状態そのものはIsPressedAsObservableで取得できます。
          値の変化だけが必要な場合は、R3のDistinctUntilChangedと組み合わせられます。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>Scenes：シーンの参照と読み込み</h2>
        <p className={styles.paragraph}>
          シーンを文字列で管理する代わりに、ScriptableObjectのSceneReferenceで参照します。
          ISceneLoaderを通して非同期の読み込み・アンロードを扱い、
          事前読み込みしたシーンの準備状態を確認して、有効化または破棄する機能も用意しています。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>UniTask：非同期処理の記述を整える</h2>
        <p className={styles.paragraph}>
          UniTaskの拡張では、CancellationTokenを起点にNextFrame、Delay、WaitUntilなどを呼べるようにし、
          非同期処理のキャンセル指定を簡潔に書けるようにしています。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>制作での利用</h2>
        <p className={styles.paragraph}>
          用途ごとに分けたパッケージは、Git URLからUnityのPackage Managerで導入できます。
          自身のプロジェクトで使い、必要になった拡張を追加しながら更新しています。
        </p>
      </section>
    </article>
  );
}
