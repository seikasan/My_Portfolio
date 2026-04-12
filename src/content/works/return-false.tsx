import { SoundCloudEmbed } from '../../components/SoundCloudEmbed';
import { WorkSpoilerSection } from './WorkSpoilerSection';
import styles from './WorkRichContent.module.css';

const soundCloudProfile = {
  url: 'https://soundcloud.com/seika-461144239',
  label: 'seika',
};

const overviewParagraphs = [
  '学祭を3日後に控えたゲーム開発サークルを舞台に、制作データ消失事件の真相を追う推理ADVゲームです。',
  'プレイヤーはサークルの一員として、部室内の痕跡やメンバーの証言を集め、出来事の流れを整理しながら、犯人とその動機を突き止めていきます。',
  '限られた時間の中で情報を積み上げていく構成にすることで、学祭前特有の焦りや切迫感と、身近な人間関係の中で疑いが生まれていく緊張感を両立させることを目指しました。単に証拠を並べるだけでなく、誰が何を見ていたのか、どの証言が食い違っているのかを少しずつ接続していくことで、プレイヤー自身が状況を読み解いている感覚を持てるよう設計しています。',
  '私はシナリオライター兼コンポーザーとして、事件の導入から解決までのシナリオ構成、ミステリーのロジック、証言・会話テキストの執筆、楽曲制作を担当しました。シナリオと音楽の両方を担当したことで、日常の延長にある部活動の空気と、そこに入り込む不穏さを、文章と音の両面から揃えて表現しています。',
];

const scenarioParagraphs = [
  '派手な事件ではなく、サークル活動という身近な場で起きたデータ消失事件を扱っています。そのため、大きな陰謀を前に出すのではなく、誰かの発言の違和感や、場に残された小さな痕跡、メンバー同士のいざこざから不穏さが立ち上がっていく構成を意識しました。また、シリアスなだけではなく、小コントを挟むなどしてクスっと笑えるようなシナリオにしました。',
  '作品制作に追われる時期だからこそ、善意、責任感、保身といった感情が混ざり合い、同じ出来事でも人によって見え方が変わる状態を描けるようにしました。',
  '推理ゲームとしては、証拠そのものの強さだけでなく、証言との噛み合い方を重視しています。一つひとつの手がかりは小さくても、並べた時に意味が分かるようにすることで、情報が線としてつながる感覚を出すことを狙いました。プレイヤーが受け身で真相を聞かされるのではなく、自分で状況を組み立てた先に結論へ到達できる構成を意識しています。',
];

const spoilerSummary = '⚠️ ネタバレを含む解説を見る';

const scenarioSpoiler = {
  summary: spoilerSummary,
  paragraphs: [
      'ゲームタイトル『return false;』は、推理の前提条件を証言してくれたきりゅあ先輩が嘘の証言を返したこと、チームの和のために最終的に主人公が嘘をつくことの２つの意味があります。',
      'きりゅあ先輩と主人公が嘘をつく理由は、事件の真相を知れば自然です。',
      'ナイルという人物が事故でデータを消去してしまい、きりゅあ先輩がそれを庇い嘘の証言をしました。',
      '主人公が真相に辿り着いたときには既にデータが復旧されていて、わざわざ犯人を公表する必要はなかったということです。',
  ],
};

const musicTracks = [
  {
    title: '通常BGM『夜明け』',
    paragraphs: [
      'メインで流れているBGMです。',
      'データの消失という大変な事件が起きているのに、部室の雰囲気は静かで心地よい情景をイメージして作りました。',
    ],
    embedSrc:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2301069032&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    entryUrl:
      'https://soundcloud.com/seika-461144239/0b95b563-58e6-4630-a897-b0db6b788f32',
    entryLabel: '夜明け',
  },
  {
    title: '推理中BGM',
    paragraphs: [
      '最終推理中に流れるBGMです。',
      '緊迫した雰囲気を出せるようにしました。',
    ],
    embedSrc:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2301069029&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    entryUrl: 'https://soundcloud.com/seika-461144239/tui-li-zhong-2',
    entryLabel: '推理中',
  },
  {
    title: 'はちゃめちゃなBGM',
    paragraphs: [
      'はちゃめちゃな先輩の襲来BGMです。',
      'この先輩のモデルになった人物をイメージして制作しました。',
    ],
    embedSrc:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2301069026&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    entryUrl: 'https://soundcloud.com/seika-461144239/hatiyametiyanabgm-3',
    entryLabel: 'はちゃめちゃなBGM',
  },
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

export function ReturnFalseContent() {
  return (
    <article className={styles.content}>
      <section className={styles.section}>
        <SoundCloudEmbed
          embedSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2220873161&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          title="return false; Playlist"
          entryUrl="https://soundcloud.com/seika-461144239/sets/return-false"
          entryLabel="return false;"
          profileUrl={soundCloudProfile.url}
          profileLabel={soundCloudProfile.label}
          height={450}
        />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>概要</h2>
        <Paragraphs paragraphs={overviewParagraphs} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>シナリオについて</h2>
        <Paragraphs paragraphs={scenarioParagraphs} />
        <WorkSpoilerSection data={scenarioSpoiler} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>楽曲について</h2>
        <div className={styles.trackList}>
          {musicTracks.map((track) => (
            <section key={track.title} className={styles.trackSection}>
              <h3 className={styles.subheading}>{track.title}</h3>
              <SoundCloudEmbed
                embedSrc={track.embedSrc}
                title={track.title}
                entryUrl={track.entryUrl}
                entryLabel={track.entryLabel}
                profileUrl={soundCloudProfile.url}
                profileLabel={soundCloudProfile.label}
              />
              <Paragraphs paragraphs={track.paragraphs} />
            </section>
          ))}
        </div>
      </section>
    </article>
  );
}
