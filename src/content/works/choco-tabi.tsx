import chocoTabiEndingPhoto from '../../assets/works/choco-tabi/EndingPhoto.png';
import chocoTabiGameOverPhoto from '../../assets/works/choco-tabi/GameOverPhoto.png';
import chocoTabiTitlePhoto from '../../assets/works/choco-tabi/TitlePhoto.png';
import { SoundCloudEmbed } from '../../components/SoundCloudEmbed';
import { YouTubeEmbed } from '../../components/YouTubeEmbed';
import styles from './WorkRichContent.module.css';

const soundCloudProfile = {
  url: 'https://soundcloud.com/seika-461144239',
  label: 'seika',
};

const overviewParagraphs = [
  'ちょこ旅は、8人チームで開発しているアクションゲームです。チョコの「溶ける」「他の食べ物をコーティングできる」といった特徴を遊びに取り入れ、お菓子の世界を旅するようなポップな雰囲気を目指しています。',
  '私は主にプログラム、モデリング、サウンドを担当しました。ゲーム内の仕組みだけでなく、ステージ制作を支えるマップエディターや、世界観を形にする小物モデル、BGM を担当しています。',
];

const programmingParagraphs = [
  '本編外のプログラムでは、ちょこ旅に適したステージを作成できる「ちょこ旅マップエディター」を AI を活用しながら制作しました。専用の制作環境を用意することで、ゲーム本編の実装だけでなく、ステージを作る工程そのものも扱いやすくすることを意識しています。',
  'ゲーム本編で特に大きく担当したのは、敵・投擲物・ギミックなどを同一視して扱えるアクタースクリプト群です。アクターは内部にステートマシンを持ち、アクションや遷移条件を Inspector から設定することで、コードを書かずに敵の動きを作れるようにしました。',
  'View や Module も選択式にし、必要な能力だけを付与できる構成にしています。敵ごとに専用コードを書き足すのではなく、共通の仕組みを組み合わせて動きを作れるようにしたかったためです。',
  'そのほか、プレイヤーのロジック、手前と奥の二層構造になっているステージの仕組み、レーン切り替え、チャット機能、ゴール演出なども担当しました。',
];

const artParagraphs = [
  'モデリングでは、お菓子の世界観に合うように、ホイップクリーム、ぺろぺろキャンディー、クッキー、ケーキブロックなどを制作しました。形だけでなく、Unity Shader Graph を使った色付けや質感作りも行っています。',
  'わたあめシェーダーでは、ふわふわした柔らかさが出るように調整しました。水面シェーダーも作成し、激辛ソースのようなステージギミックにも使える表現として組み込んでいます。',
  'デザイン面では、タイトル画面、ゲームオーバー画面、ゲームクリア画面で使う3Dモデル群の配置を一部担当しました。ステージ1のレベルデザインでは、マリオの1-1を参考にしながら、最初のステージとして遊び方を自然に伝える構成を意識しています。',
];

const soundParagraphs = [
  'サウンドでは、お菓子の世界観に合うような約3分のループBGM「テンパリング・タイム！！」を制作しました。タイトルはびっくりマーク2つです。',
  'テーマとして、甘さ、軽さ、優美さを軸に据えて、お菓子作りをしているかのような曲を目指しました。楽曲は三部構成の入れ子になっており、チョコの様々な一面を見せるため、楽器、リズム、雰囲気が変わるようにしています。',
  'マリンバやシロフォンなどの木琴ではチョコの甘さやクッキーの質感を、クラリネット、フルート、オーボエなどの木管ではチョコソースのとろける感じを表現しました。',
  'ティンパニはお菓子作り中に発生する物音、ハープの上昇・下降音は時間経過のイメージです。第二部でメインメロディを奏でるピアノとシンセは、電子レンジの機械音や流水を意識しています。楽曲全体で鳴っているストリングスは、ハケやゴムヘラのイメージです。',
  'プログラム、モデル、音楽を横断して担当したことで、ゲームの仕組みと見た目、雰囲気をそれぞれ別々に作るのではなく、同じ方向に揃えることを意識できた作品です。',
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

const designImages = [
  {
    src: chocoTabiTitlePhoto,
    alt: 'ちょこ旅 タイトル画面',
    caption: 'タイトル画面の3Dモデル群の配置',
  },
  {
    src: chocoTabiGameOverPhoto,
    alt: 'ちょこ旅 ゲームオーバー画面',
    caption: 'ゲームオーバー画面のパネルと3Dモデル配置',
  },
  {
    src: chocoTabiEndingPhoto,
    alt: 'ちょこ旅 ゲームクリア画面',
    caption: 'ゲームクリア画面のパネルと3Dモデル配置',
  },
];

function InlineImageGrid() {
  return (
    <div className={styles.imageGrid}>
      {designImages.map((image) => (
        <figure key={image.src} className={styles.imageFigure}>
          <img src={image.src} alt={image.alt} className={styles.inlineImage} loading="lazy" />
          <figcaption className={styles.imageCaption}>{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function ChocoTabiSoundCloud() {
  return (
    <div className={styles.trackList}>
      <section className={styles.trackSection}>
        <h3 className={styles.subheading}>テンパリング・タイム！！</h3>
        <SoundCloudEmbed
          embedSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2318378432&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          title="テンパリング・タイム！！"
          entryUrl="https://soundcloud.com/seika-461144239/tenparingutaimu-1"
          entryLabel="テンパリング・タイム！！"
          profileUrl="https://soundcloud.com/seika-461144239"
          profileLabel="seika"
          height={360}
        />
      </section>

      <section className={styles.trackSection}>
        <h3 className={styles.subheading}>Goal Bgm</h3>
        <SoundCloudEmbed
          embedSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2318378429&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          title="Goal Bgm"
          entryUrl="https://soundcloud.com/seika-461144239/goal-bgm-2"
          entryLabel="Goal Bgm"
          profileUrl="https://soundcloud.com/seika-461144239"
          profileLabel="seika"
          height={360}
        />
      </section>
    </div>
  );
}

export function ChocoTabiContent() {
  return (
    <article className={styles.content}>
      <section className={styles.section}>
        <h2 className={styles.heading}>作品概要</h2>
        <Paragraphs paragraphs={overviewParagraphs} />
        <YouTubeEmbed
          videoUrl="https://youtu.be/jh9Zs1xLvSM"
          title="ちょこ旅 プレイ映像"
          entryLabel="プレイ映像をYouTubeで開く"
          caption="プレイ映像"
        />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>プログラム</h2>
        <Paragraphs paragraphs={programmingParagraphs} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>モデリング・演出</h2>
        <Paragraphs paragraphs={artParagraphs} />
        <InlineImageGrid />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>サウンド</h2>
        <Paragraphs paragraphs={soundParagraphs} />
        <ChocoTabiSoundCloud />
      </section>
    </article>
  );
}
