import { SoundCloudEmbed } from '../../components/SoundCloudEmbed';
import styles from './WorkRichContent.module.css';

const soundCloudProfile = {
  url: 'https://soundcloud.com/seika-461144239',
  label: 'seika',
};

const overviewParagraphs = [
  '幼なじみの佐藤真白との再会をきっかけに、主人公が5人の女性と関わっていく恋愛ADVゲームです。各ヒロインとの交流を重ねるうちに、それぞれの悩みや執着、過去が少しずつ明らかになり、物語は恋愛劇からサイコサスペンスへと変化していきます。',
  '会話や選択肢を通して違和感と手がかりを積み重ね、終盤で伏線が一本の線につながる構成を目指しました。',
  '私はシナリオライター兼コンポーザーとして、プロット設計、シナリオ構成、キャラクター会話・テキストなど計20万字以上の執筆、通常BGM1曲とヒロイン固有BGM5曲の制作を担当しました。シナリオと楽曲の両方を担当したことで、キャラクターの内面や伏線を文章と音楽の両面から揃えて設計しています。',
  'たとえば、表向きの印象と内面のずれ、ルート進行後に意味が変わるモチーフ、複数キャラクターの関係性が終盤で接続される構造を、会話文とBGMの両方に反映しています。',
];

const scenarioParagraphs = [
  'シナリオでは、キャラクター名や舞台名に花のモチーフを取り入れています。単なる命名ではなく、花言葉が人物像や関係性、各ルートの結末と共鳴するように設計しました。',
  'たとえば、表向きは明るく親しみやすい人物でも、花言葉を踏まえると執着や別離の気配が先に埋め込まれているというように、名前そのものが小さな伏線として機能する構成にしています。',
];

const scenarioSpoilerParagraphs = [
  'この作品では、名前に使った花のモチーフが、その人物の表面的な印象だけでなく、終盤で明かされる本質や役割にも対応しています。',
  'たとえば真白は、序盤では世話焼きで距離の近い幼なじみとして描かれますが、終盤では主人公の行動や交友関係を長く観測し、裏側から物語全体を誘導していた存在だと明かされます。そこで白藤の花言葉である「懐かしい思い出」「決して離れない」が、幼なじみらしい親密さだけでなく、離れず見続けていた執着にも重なるようにしています。',
  '日葵は、明るく元気な後輩として登場しますが、実際には家族の病気と犯罪行為によって精神的に不安定で、「普通の大学生」を求める人物です。そのため、ひまわりの「憧れ」「情熱」は、まっすぐな好意であると同時に、依存へ傾いていく感情の強さも示しています。',
  'らむねは、極端な独占欲と不安定さを抱えています。桃の花の「チャーミング」「私はあなたのとりこ」は、彼女の対人関係そのものを端的に表しています。特に後者は、恋愛的な甘さではなく、相手に呑み込まれていく危うさを含む意味として使っています。',
  '萩香は理性的で感情を制御している人物ですが、主人公と関わることで、その秩序が少しずつ崩れていきます。萩の「思案」「内気」は、彼女の思考中心の人格と、感情を表に出すことへの不器用さの両方に対応しています。',
  '紫苑は、落ち着いた大人の女性として登場しますが、物語の中で「月下志穂」という別の名と過去を持つことが明かされます。紫苑の花言葉である「時が経つのを忘れて」は、彼女と過ごす静かな時間の印象を支える一方で、止まってしまった人生の時間にも重ねています。さらに本名に対応する月下美人の「強い意志」「ただ一度だけ会いたくて」は、奪われた人生の中でもなお自分を取り戻そうとする意思を表しています。',
  '舞台名にも同様の意味づけを行っています。たとえば「喫茶スイートピー」は、主人公にとって新しい人間関係や事件の入口となる場所であり、同時に各キャラクターがそれまでの自分から少しずつ離れていく場所でもあります。そのため、スイートピーの「門出」「別離」という花言葉を、日常の始まりと、それまでの自分からの離脱の両方に重ねています。',
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

const musicIntroParagraphs = [
  '通常BGM1曲と、5人のヒロインそれぞれの固有BGM5曲、計6曲を制作しました。各曲では、キャラクターの第一印象だけでなく、ルート進行によって見えてくる内面や伏線も音で表現しています。',
  'また、楽曲同士でモチーフを引用し合う構成にすることで、物語上のつながりが音楽面でも伝わるよう意識しました。',
];

const tracks = [
  {
    title: '佐藤真白BGM『白夜』',
    intro: [
      '幼なじみらしい親しさと安心感を軸にした楽曲です。長調をベースに、跳ねるようなリズムと軽やかなフレーズを用いることで、再会の明るさや距離の近さが自然に伝わるようにしました。',
      '一方で、明るさが続きすぎることで落ち着かなさも残るようにし、物語後半で見えてくる彼女の性質に接続できるよう調整しています。',
    ],
    spoiler: [
      '真白は序盤では、主人公を気にかける世話焼きの幼なじみとして振る舞います。しかし終盤で、彼女は主人公のメガネに小型カメラを仕込み、主人公の視界を通して行動や人間関係を観測していたことが明かされます。さらに、他ヒロインとの出会いや事件解決の流れそのものも、真白が裏側から整えていたと判明します。',
      'この構造を踏まえて、曲名は『白夜』にしました。これは、主人公の世界を見守り続ける真白の視線を、沈まない太陽になぞらえたものです。',
      'また、楽曲そのものも、ただ安心感のある幼なじみ曲にはしていません。明るい長調と軽やかな動きで親しみやすさを出しつつ、休まらなさがわずかに残るようにして、やさしさと監視が同居する人物像を先に埋め込んでいます。',
      'さらにこの曲には、他ヒロインのBGMで使っているメロディや音色の断片を部分的に混ぜています。これは、真白が主人公と他ヒロインたちの接点を裏側で作っていたことを、音楽面でも先に示すための設計です。初回プレイでは明るい再会曲として機能し、真相を知ったあとに聴くと、作品全体を包む俯瞰の視点を持った曲として意味が変わるようにしています。',
    ],
    embedSrc:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2297280305&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    entryUrl: 'https://soundcloud.com/seika-461144239/bai-ye-midnight-sun-1',
    entryLabel: '白夜 / Midnight Sun',
  },
  {
    title: '桃井らむねBGM『シュガーピンク・オーバードーズ』',
    intro: [
      '地雷系女子・桃井らむねのBGMです。甘さと危うさが同時に立ち上がるよう、かわいらしい音色の上に不穏な響きをガツンと重ねました。過剰な愛情や独占欲が、聴感としても伝わることを意識しています。',
    ],
    spoiler: [
      'らむねは、序盤では距離の近い地雷系のヒロインとして登場し、主人公に対して強い好意と独占欲を隠さず向けてきます。その段階では、危ういがかわいらしい人物として見えますが、物語が進むと、彼女の執着の強さが単なる恋愛感情ではなく、見捨てられることへの極端な恐怖と自己破壊衝動に根ざしていることが分かってきます。',
      '特に、主人公が彼女の部屋で大量の薬や咳止めシロップを目にする場面では、彼女がかなり危うい状態にいたことがはっきり示されます。さらに、自分が壊れて重くなったら捨てられるのかと問いかける台詞からも、らむねが最初から一貫して、生きることそのものに不安を抱えていた人物だったことが見えてきます。',
      'その後、捨て犬を保護し、世話をするようになったことをきっかけに、彼女の感情は少しずつ変化します。それまでは主人公にしがみつくことでしか自分を保てなかった彼女が、誰かを守る側に回ることで、死にたい側から生きたい側へと向かい始めます。つまりらむねのルートは、独占と依存が暴走する物語であると同時に、壊れかけた人物がようやく生きる理由を持つまでの物語でもあります。',
      'らむねというキャラクターの、かわいらしさがそのまま危険信号でもある、という構造をタイトルにも反映しました。',
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
      '大人びた落ち着きと、内側にある閉塞感を両立させることを目指した楽曲です。ローパスフィルターで高域を抑え、水の中に沈んだような質感を作ることで、静かさの奥に息苦しさが残るよう調整しました。',
      '主人公と一緒にいる時だけ少しずつ呼吸がしやすくなる、という彼女の変化を受け止められる音の設計にしています。',
    ],
    spoiler: [
      '紫苑は、喫茶店で出会う穏やかな年上の女性として登場します。しかし物語が進むと、彼女の本名は「月下志穂」であり、犯罪組織の幹部である夫によって名前や生活の自由を奪われていた過去が明かされます。つまり「水無瀬紫苑」は現在の彼女を包む静かな外殻であり、「月下志穂」は押し込められていた本来の人格です。',
      'そのため、楽曲名には本名側のモチーフである「月下美人」を使いました。プレイヤーが最初に見るのは静かな喫茶店員の姿ですが、曲名の時点ではすでに、後半で明かされる彼女の本質へ踏み込んでいます。',
      '音作りでも、落ち着きだけで終わらないようにしています。高域を抑えた少しくぐもった質感は、包容力ではなく閉じ込められた息苦しさを表しています。そのうえで、完全に暗い曲調にはせず、主人公と関わることで少しずつ自分を取り戻していく余地が残るようにしました。',
    ],
    embedSrc:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2297280311&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    entryUrl: 'https://soundcloud.com/seika-461144239/yue-xia-mei-ren-queen-of-the-night-3',
    entryLabel: '月下美人 / Queen of the Night',
  },
  {
    title: '中村日葵BGM『黄昏アンダーグラウンド』',
    intro: [
      '明るく行動的な第一印象を、疾走感のあるリズムで表現した楽曲です。前半・中盤・後半で構成を大きく変え、最初は勢いのある印象を強く出しながら、進行に合わせて内面の不安定さがにじみ出るようにしています。',
      '前半ではDnBのリズム、中盤では4つ打ちへ移行し、コード進行も大きく切り替えています。外から見える元気さと、内側で崩れかけている感情の差を、展開そのもので表現しました。',
    ],
    spoiler: [
      '日葵は、最初は距離の近い元気な後輩として登場しますが、物語が進むにつれて、精神的に追い詰められており、主人公との関わりを心の支えにしていることが分かってきます。さらに終盤では、犯罪組織の下で出し子として動かされていたことが発覚し、逮捕を経て、自分の人生を立て直そうとする流れに入ります。',
      'この二重性を表現するために、楽曲も一つのテンションで押し通さず、途中で土台を大きく変えています。前半の勢いは、彼女が周囲に見せている明るさです。そこからリズムとコード進行を切り替えることで、表面だけでは支えきれない危うさが内部にあることを示しています。',
      '特に中盤以降では、前半のまっすぐさがそのまま救いにはならず、無理に保っていた明るさが崩れていく感覚を出すことを狙いました。明るい後輩キャラのテーマとして聴くと元気な曲ですが、ルートを知ったあとに聴くと、最初から崩壊の予兆が埋め込まれていた曲として聞こえる設計です。',
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
      '合理的で機械的な印象を軸にした楽曲です。硬い音色と規則性の強いフレーズで構成し、冷静さの中にある張りつめた空気感を表現しました。',
      '感情を前に出さない人物であるので、反復や構造の硬さで人物像を立てています。',
    ],
    spoiler: [
      '萩香は、序盤では知的でクールな先輩として登場し、主人公に対しても感情より観察と分析を優先する人物として描かれます。本を通して主人公の感性を読み解こうとしたり、会話そのものを検証対象のように扱ったりするため、最初は人を論理で理解しようとする人物に見えます。',
      'しかし物語が進むにつれて、彼女の理性は主人公の存在によって少しずつ揺らぎ始めます。美術館でのやり取りでは、作品を論理で読む彼女と、光や温度で読む主人公の差が強調され、そこで初めて、彼女の中にある完成された思考体系が崩れ始めます。さらに中盤以降では、主人公の何気ない言葉ひとつで自分の世界の優先順位が書き換わってしまうことを認め、理屈で保っていた均衡を失っていきます。',
      '終盤では、彼女は手帳の記述を解析し、犯罪組織の構造や定例会の意味を読み解く重要な役割を担います。つまり萩香は、感情に振り回されるだけのヒロインではなく、物語全体の謎を論理で解体していく人物でもあります。その一方で、主人公に対しては理性だけで立っていられなくなり、自分でも制御できない揺らぎを抱えるようになります。',
      'この二重性を踏まえて、楽曲は最初から硬質で規則的な作りにしています。冷静で隙のない印象を先に立てることで、彼女の思考中心の人格が一聴で伝わるようにしました。そのうえで、完全に無機質にはせず、繰り返しの中に少しずつ緊張や不安定さがにじむようにすることで、内側ではすでに揺らぎが始まっていることを示しています。',
    ],
    embedSrc:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2297280308&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    entryUrl: 'https://soundcloud.com/seika-461144239/akuaregia-aqua-regia-5',
    entryLabel: 'アクアレギア / Aqua Regia',
  },
  {
    title: '通常BGM',
    intro: ['各ヒロインのBGMに含まれるモチーフを順に変奏し、物語全体を通して流れる基調となる楽曲として構成しました。'],
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
        <SoundCloudEmbed
          embedSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2217704927&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          title="Access to your 5 Girls playlist"
          entryUrl="https://soundcloud.com/seika-461144239/sets/access-to-your-5-girls"
          entryLabel="Access to your 5 Girls"
          profileUrl={soundCloudProfile.url}
          profileLabel={soundCloudProfile.label}
          height={450}
        />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>概要</h2>
        <Paragraphs paragraphs={overviewParagraphs} />
        <p className={styles.notice}>作品の性質上、一部の解説にはネタバレを含みます。</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>シナリオについて</h2>
        <Paragraphs paragraphs={scenarioParagraphs} />
        <details className={styles.details}>
          <summary className={styles.detailsSummary}>⚠️ ネタバレを含む解説を見る</summary>
          <div className={styles.detailsBody}>
            <Paragraphs paragraphs={scenarioSpoilerParagraphs} />
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>名前・舞台</th>
                    <th>モチーフの花</th>
                    <th>花言葉</th>
                  </tr>
                </thead>
                <tbody>
                  {flowerRows.map((row) => (
                    <tr key={row[0]}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </details>
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
                <details className={styles.details}>
                  <summary className={styles.detailsSummary}>⚠️ ネタバレを含む解説を見る</summary>
                  <div className={styles.detailsBody}>
                    <Paragraphs paragraphs={track.spoiler} />
                  </div>
                </details>
              ) : null}
            </section>
          ))}
        </div>
      </section>
    </article>
  );
}
