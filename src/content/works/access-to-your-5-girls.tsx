import { SoundCloudEmbed } from '../../components/SoundCloudEmbed';
import { YouTubeEmbed } from '../../components/YouTubeEmbed';
import { WorkSpoilerSection } from './WorkSpoilerSection';
import styles from './WorkRichContent.module.css';

const soundCloudProfile = {
  url: 'https://soundcloud.com/seika-461144239',
  label: 'seika',
};

const overviewParagraphs = [
  '幼なじみの佐藤真白との再会をきっかけに、主人公が5人の女性と関わっていく恋愛ADVゲームです。ヒロインたちとの交流を重ねるにつれて、それぞれの悩みや執着、隠された過去が次第に浮き彫りとなり、物語は甘い恋愛劇からサイコサスペンスへと変貌していきます。',
  '日常会話や選択肢を通じて違和感と手がかりを丹念に積み重ね、終盤に向けて伏線が一筋の線へと結実する構成を目指しました。',
  '私はシナリオライター兼コンポーザーとして、プロット設計・シナリオ構成から20万字以上のテキスト執筆、およびBGM全6曲（通常1曲・ヒロイン固有5曲）の制作を担当しました。シナリオと音楽の双方を一貫して手掛けた強みを活かし、キャラクターの内面や作品に張り巡らせた伏線を、文章と楽曲の双方から綿密に同期させています。',
  '表向きの印象と内面のギャップ、ルート進行によって意味合いが変容するモチーフ、終盤で交錯する人間関係の構造などを、テキストとサウンドの双方に反映させました。',
];

const scenarioParagraphs = [
  'シナリオでは、キャラクター名や舞台名に花のモチーフを取り入れています。単なる命名にとどまらず、花言葉が人物像や関係性、さらには各ルートの結末とも共鳴するように設計しました。',
  '一見すると明るく親しみやすい人物であっても、花言葉を紐解くと執着や別離の予兆が織り込まれているなど、名前そのものが物語の伏線として機能する構成にしています。',
];

const scenarioSpoilerParagraphs = [
  '本作における花のモチーフは、キャラクターの表層的な印象だけでなく、終盤で明かされる本質や役割とも密接に対応しています。',
  '例えば真白は、序盤こそ世話焼きで距離の近い幼なじみとして描かれますが、終盤では主人公の行動や交友関係を長年観測し、物語全体を裏から誘導していた存在であることが判明します。白藤の花言葉である「懐かしい思い出」「決して離れない」は、幼なじみ特有の親愛だけでなく、主人公を見守り続けていた執着や監視の視線をも象徴しています。',
  '日葵は明るく元気な後輩として登場するものの、実際には家族の病気や犯罪への加担によって精神的に追い詰められ、「普通の大学生」としての日常を渇望している人物です。そのため、ひまわりの花言葉である「憧れ」「情熱」は、まっすぐな好意であると同時に、依存へと傾倒していく切迫した感情の強さを表しています。',
  'らむねは、極端な独占欲と情緒の不安定さを抱えたキャラクターです。桃の花言葉「チャーミング」「私はあなたのとりこ」は彼女の対人姿勢そのものを端的に示していますが、特に後者は甘い恋愛感情というより、相手に呑み込まれ執着していく危うさを孕んだ意味合いを持たせています。',
  '萩香は理性的で感情を律する人物ですが、主人公との関わりを通じて強固な秩序が徐々に崩れていきます。萩の花言葉「思案」「内気」は、常に思考を巡らせる理知的な側面と、自身の感情を表に出せない不器用さの双方を投影したものです。',
  '紫苑は物静かで落ち着いた大人の女性として登場しますが、作中で「月下志穂」という本名と過酷な過去を持つことが明かされます。紫苑の花言葉「時が経つのを忘れて」は、彼女と過ごす穏やかな時間を想起させる一方で、過去に囚われて止まったままの人生を暗喩しています。対して本名に対応する月下美人の花言葉「強い意志」「ただ一度だけ会いたくて」は、奪われた人生を取り戻そうとする内に秘めた決意を表現しています。',
  'また、舞台設定にも同様の意図を込めています。物語の拠点となる「喫茶スイートピー」は、主人公にとって新たな出会いや事件の起点であると同時に、各キャラクターがそれまでの歪んだ自分から脱却していく契機となる場所でもあります。そのため、スイートピーの花言葉「門出」「別離」を、日常の始まりと「過去の自分との決別」の双方に重ね合わせました。',
];

const flowerRows = [
  ['佐藤真白', '白藤', '懐かしい思い出・決して離れない'],
  ['中村日葵', 'ひまわり', '憧れ・情熱'],
  ['桃井らむね', '桃の花', 'チャーミング・私はあなたのとりこ'],
  ['芳賀萩香', '萩', '思案・内気'],
  ['水無瀬紫苑', '紫苑', '時が経つのを忘れて'],
  ['月下志穂', '月下美人', '強い意志・ただ一度だけ会いたくて'],
  ['喫茶スイートピー', 'スイートピー', '門出・別離'],
];

const spoilerSummary = '⚠️ ネタバレを含む解説を見る';

const scenarioSpoiler = {
  summary: spoilerSummary,
  paragraphs: scenarioSpoilerParagraphs,
  table: {
    headers: ['名前・舞台', 'モチーフの花', '花言葉'],
    rows: flowerRows,
  },
};

const musicIntroParagraphs = [
  '通常BGM1曲と、5人のヒロインそれぞれの固有BGM5曲の計6曲を制作しました。各楽曲では、キャラクターの第一印象のみならず、ルート進行によって明かされる内面や伏線までも音で表現しています。',
  'また、楽曲間でモチーフを引用し合う構成をとることで、物語上の結びつきが音楽面からも直感的に伝わるよう意識しました。',
];

const tracks = [
  {
    title: '佐藤真白BGM『白夜』',
    intro: [
      '幼なじみらしい親密さと安心感を軸にした楽曲です。長調をベースに、弾むようなリズムと軽快なフレーズを取り入れ、再会の明るさや自然体の距離感を表現しました。',
      'その一方で、明るいトーンが一貫して続く中にわずかな落ち着かなさを潜ませ、物語後半で露呈する彼女の特異な性質へ接続できるよう調整しています。',
    ],
    spoiler: [
      '真白は序盤、主人公を甲斐甲斐しく気遣う幼なじみとして振る舞いますが、終盤には主人公の眼鏡に小型カメラを仕込み、その視界を通して行動や人間関係を常時観測していたことが明かされます。さらに、他ヒロインとの出会いや事件解決の筋書きそのものも、彼女が裏側から整えていた事実が暴かれます。',
      'タイトルの『白夜』は、主人公の世界を常に見守り続ける彼女の視線を、夜になっても沈まない太陽になぞらえたものです。',
      '楽曲そのものも、単なる心温まる日常曲には留めていません。親しみやすい長調のメロディの裏にどこか気の休まらない緊張感を残し、優しさと監視欲が同居する彼女の歪な人間性を音で先取りして埋め込みました。',
      'さらに曲中には、他ヒロインのBGMで用いている旋律や音色の断片をコラージュのように散りばめています。これは「真白が主人公と各ヒロインの接点を裏で演出していた」事実を音楽面から暗示する仕掛けです。初見プレイでは明るい日常曲として響き、真相を知った後には、作品全体を俯瞰・掌握していた視点の曲へと意味合いが一変するように設計しています。',
    ],
    embedSrc:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2297280305&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    entryUrl: 'https://soundcloud.com/seika-461144239/bai-ye-midnight-sun-1',
    entryLabel: '白夜 / Midnight Sun',
  },
  {
    title: '桃井らむねBGM『シュガーピンク・オーバードーズ』',
    intro: [
      '地雷系女子・桃井らむねのテーマ曲です。甘美さと破滅的な危うさを共存させるため、ポップで愛らしい音色にあえて不穏な響きを大胆に重ねました。過剰な愛情と独占欲が、聴覚的にも伝わる音像を意識しています。',
    ],
    spoiler: [
      'らむねは序盤、距離感が近く強い好意と独占欲を向けてくる「危うくも可愛らしい地雷系ヒロイン」として登場します。しかし物語が進むにつれ、その執着は単なる甘えではなく、見捨てられることへの病的な恐怖と自己破壊衝動に根ざしていることが分かってきます。',
      '部屋に残された大量の市販薬や咳止めシロップ、そして「自分が壊れて重くなったら捨てられるのか」という問いかけから、彼女が一貫して生きることそのものに深い不安を抱えていたことが浮き彫りになります。',
      'やがて保護した捨て犬の世話をすることをきっかけに、彼女の心境は転換点を迎えます。主人公にしがみつくことでしか自分を保てなかった彼女が、誰かを守る側に回ることで、「死にたい」から「生きたい」へと少しずつ足を踏み出し始めます。このルートは独占と依存の暴走劇であると同時に、壊れかけていた魂が生きる動機を獲得する再生の物語でもあります。',
      '「愛らしさそのものが危険信号である」という彼女の本質を、楽曲タイトルにもそのまま反映させました。',
    ],
    embedSrc:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2297280302&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    entryUrl:
      'https://soundcloud.com/seika-461144239/siyugapinkuobadozu-sugar-pink-overdose-2',
    entryLabel: 'シュガーピンク・オーバードーズ / Sugar Pink Overdose',
  },
  {
    title: '水無瀬紫苑BGM『月下美人』',
    intro: [
      '大人の落ち着きと、その内側に潜む閉塞感を両立させた楽曲です。ローパスフィルターで高域を抑え、水底に沈んだようなこもった質感を作ることで、静けさの奥に息苦しさが残るアンビエントな響きに仕上げました。',
      '主人公と一緒にいる時間を通じて、少しずつ呼吸が楽になっていく彼女の心境変化に寄り添う音響設計としています。',
    ],
    spoiler: [
      '紫苑は、喫茶店で出会う穏やかな年上の女性として登場します。しかし物語が進むにつれ、本名は「月下志穂」であり、犯罪組織の幹部である夫によって名も生活の自由も奪われていた過酷な過去が明かされます。「水無瀬紫苑」は世を忍ぶための静かな仮面に過ぎず、「月下志穂」こそが抑圧され続けてきた本来の人格です。',
      'そのため、楽曲名にはあえて本名側のモチーフである「月下美人」を冠しました。プレイヤーの目には静かな喫茶店員として映る初期段階から、楽曲タイトルはすでに彼女の隠された核心へ踏み込んでいます。',
      'サウンド面でも、単なる癒やし曲にはしていません。高域を削った閉鎖的な音像は、包容力ではなく閉じ込められた息苦しさを象徴しています。それでいて救いのない暗さには落とさず、主人公との関わりを通じて本来の自己を取り戻していく余白を残しました。',
    ],
    embedSrc:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2297280311&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    entryUrl: 'https://soundcloud.com/seika-461144239/yue-xia-mei-ren-queen-of-the-night-3',
    entryLabel: '月下美人 / Queen of the Night',
  },
  {
    title: '中村日葵BGM『黄昏アンダーグラウンド』',
    intro: [
      '明るく行動的な第一印象を、疾走感あるビートで描いた楽曲です。前半・中盤・後半で構成を劇的に変化させ、序盤の勢いあるトーンから、進行に合わせて内面の脆さや情緒の揺らぎが露呈していく展開に仕立てました。',
      'DnBのビートから中盤で4つ打ちへと移行し、コード進行も大きく切り替えることで、表向きの元気さと内側で崩れかけている感情との落差を構成そのもので表現しています。',
    ],
    spoiler: [
      '日葵は親しみやすい元気な後輩として登場しますが、実際には精神的に極限まで追い詰められており、主人公の存在を心の命綱にしていたことが分かってきます。終盤では犯罪組織の出し子として利用されていた事実が発覚し、逮捕と贖罪を経て、自らの足で人生を再建する道を歩み始めます。',
      'この二面性を音で描くため、楽曲も単一のテンションで押し通さず途中で土台を大きく変えています。前半の軽快な疾走感は彼女が必死に保っている外面であり、そこからリズムとコードが変容していくことで、表面的な明るさでは覆い隠せない深淵の危うさを提示しました。',
      '中盤以降の展開では、まっすぐな明るさが救いにならず、無理に保っていた均衡が崩れていく感覚を狙っています。初見では快活なキャラクターソングとして響きつつも、真相を知った後には、冒頭から崩壊への予兆が刻まれていたことに気づく設計です。',
    ],
    embedSrc:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2297280299&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    entryUrl:
      'https://soundcloud.com/seika-461144239/huang-hun-andaguraundo-twilight-underground-4',
    entryLabel: '黄昏アンダーグラウンド / Twilight Underground',
  },
  {
    title: '芳賀萩香BGM『アクアレギア』',
    intro: [
      '合理的で機械的な佇まいを軸に据えた楽曲です。硬質な音色と規則性の強いフレーズで構築し、冷静沈着さの裏にある張り詰めた空気感を表現しました。',
      '感情を表に出さない彼女のパーソナリティを、感情的な起伏ではなく、構造の硬さや反復性によって象徴させています。',
    ],
    spoiler: [
      '萩香は序盤、知的でクールな先輩として登場し、主人公に対しても感情より観察と分析を優先する姿勢を崩しません。本を通して主人公の感性を読み解こうとしたり、対話そのものを実験のように扱ったりと、世界をすべて論理で理解しようとする人物として描かれます。',
      'しかし物語が進むにつれ、その強固な理性は主人公の存在によって少しずつ揺らぎ始めます。美術館でのやり取りでは、作品を論理で読み解く彼女と、光や温度などの直感で捉える主人公との対比が描かれ、彼女が築き上げてきた完璧な思考体系にほころびが生じます。主人公の何気ない言葉ひとつで優先順位が書き換わってしまう動揺を認め、理屈で保っていた均衡を失っていくのです。',
      '終盤では手帳の記述を解析し、犯罪組織の構造や会合の意図を読み解く重要なキーパーソンを担います。つまり彼女は感情に振り回されるだけの存在ではなく、物語の謎をロジックで解体していく知性を持った人物でもあります。その一方で、主人公に対しては理性だけでは立ち行かなくなり、自分でも制御できない感情の揺らぎを抱えるようになります。',
      '楽曲もこの二重性を踏まえ、硬質かつ規則的に仕上げました。冷静で隙のない構築美によって彼女の知的な輪郭を瞬時に印象づけつつ、反復の中にわずかな緊張と不穏さを滲ませることで、すでに内面で始まっている秩序の融解を暗示しています。',
    ],
    embedSrc:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2297280308&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    entryUrl: 'https://soundcloud.com/seika-461144239/akuaregia-aqua-regia-5',
    entryLabel: 'アクアレギア / Aqua Regia',
  },
  {
    title: '通常BGM',
    intro: [
      '各ヒロインの固有BGMに含まれるモチーフを順に変奏・再構成し、作品全体を貫くメインテーマとして仕上げました。',
    ],
    embedSrc:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2297280296&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    entryUrl: 'https://soundcloud.com/seika-461144239/mainbgm-6',
    entryLabel: 'mainBGM',
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

export function AccessToYour5GirlsContent() {
  return (
    <article className={styles.content}>
      <section className={styles.section}>
        <h2 className={styles.heading}>概要</h2>
        <Paragraphs paragraphs={overviewParagraphs} />
        <p className={styles.notice}>作品の性質上、一部の解説にはネタバレを含みます。</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>プレイ映像</h2>
        <YouTubeEmbed
          videoUrl="https://youtu.be/gw7KzXnXrf4"
          title="Access to your 5 Girls プレイ映像"
          entryLabel="プレイ映像をYouTubeで開く"
          caption="プレイ映像"
        />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>シナリオについて</h2>
        <Paragraphs paragraphs={scenarioParagraphs} />
        <WorkSpoilerSection data={scenarioSpoiler} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>楽曲について</h2>
        <Paragraphs paragraphs={musicIntroParagraphs} />
        <div className={styles.trackList}>
          {tracks.map((track) => (
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
              <Paragraphs paragraphs={track.intro} />
              {'spoiler' in track && track.spoiler ? (
                <WorkSpoilerSection
                  data={{
                    summary: spoilerSummary,
                    paragraphs: track.spoiler,
                  }}
                />
              ) : null}
            </section>
          ))}
        </div>
      </section>
    </article>
  );
}
