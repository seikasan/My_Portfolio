import { createPosterAsset } from '../lib/placeholders';
import type {
  GalleryItem,
  HeadingTone,
  HistoryEntry,
  MusicItem,
  MusicSectionMeta,
  SkillGroup,
  SiteProfile,
  WorkEntry,
} from '../types/content';
import accessToYour5GirlsCover from '../assets/works/access-to-your-5-girls/cover.png';
import returnFalseCover from '../assets/works/return-false/cover.png';
import lostOfMusicCover from '../assets/works/lost-of-music/cover.png';
import chocoTabiTitle from '../assets/works/choco-tabi/title.png';
import chocoMapMakerTitle from '../assets/works/choco-tabi-map-editor/title.png';
import lylaTitle from '../assets/works/lyla/title.png';
import profileIcon from '../assets/profile/icon.jpg';

export const siteProfile: SiteProfile = {
  name: 'seika',
  avatar: {
    src: profileIcon,
    alt: 'seika profile icon',
  },
  heroTitle: 'Game / Music / 3DCG',
  heroBody:
    'Unityでのゲーム制作を中心に、プログラミング、音楽、3D制作に取り組んでいます。',
  intro:
    'ゲームクライアントエンジニアを志望する会津大学生です。チーム制作では設計や進行管理も担当し、遊びの手触りを大切にしています。',
  contactNote:
    '下記のアドレスにお気軽にご連絡ください。',
  links: [
    {
      label: 'Email',
      url: 'mailto:s1320103@u-aizu.ac.jp',
      kind: 'email',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/seikasan',
      kind: 'social',
    },
    {
      label: 'SoundCloud',
      url: 'https://soundcloud.com/seika-461144239',
      kind: 'social',
    },
  ],
};

type SectionHeadingToneKey =
  | 'profile'
  | 'game'
  | 'music'
  | 'threeDcg'
  | 'contact'
  | 'about'
  | 'skills'
  | 'education'
  | 'activities';

export const sectionHeadingTones: Record<SectionHeadingToneKey, HeadingTone> = {
  profile: { backgroundColor: '#315F86' },
  game: { backgroundColor: '#91483A' },
  music: { backgroundColor: '#2F6F5E' },
  threeDcg: { backgroundColor: '#8A6F2A' },
  contact: { backgroundColor: '#53606A' },
  about: { backgroundColor: '#2F5D7C' },
  skills: { backgroundColor: '#66733E' },
  education: { backgroundColor: '#7D5A2F' },
  activities: { backgroundColor: '#8C3F55' },
};

export const aboutSummary =
  '会津大学3年・CG系研究室所属。ゲームクライアントエンジニアを志望し、Unityでのチーム制作と自作ライブラリの開発に取り組んでいます。';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    description: '制作や授業で使用している言語です。',
    items: [
      { name: 'C', experience: '2年', logoId: 'c' },
      { name: 'C#', experience: '2年', logoId: 'csharp' },
      { name: 'Java', note: '授業・SpringによるWebアプリ制作', logoId: 'java' },
      { name: 'C++', note: '授業で少し使用', logoId: 'cplusplus' },
      { name: 'HTML', note: '授業で少し使用', logoId: 'html5' },
      { name: 'CSS', note: '授業で少し使用', logoId: 'css' },
      { name: 'JavaScript', note: '授業で少し使用', logoId: 'javascript' },
      { name: 'TypeScript', note: '授業で少し使用', logoId: 'typescript' },
      { name: 'VBA', note: '趣味で少し使用', logoId: 'vba' },
    ],
  },
  {
    title: 'Tools',
    description: '制作環境として継続的に使っているツールです。',
    items: [
      { name: 'Studio One', experience: '7年', logoId: 'studioOne' },
      { name: 'Blender', experience: '4年', logoId: 'blender' },
      { name: 'Unity', note: 'ゲーム・演出・UI・制作支援ツールの開発に使用。', logoId: 'unity' },
      { name: 'GitHub', experience: '2年', logoId: 'github' },
    ],
  },
  {
    title: 'Unity Development',
    description: '実際のゲーム制作と自作基盤で使っている技術です。',
    items: [
      { name: 'VContainer / UniTask / R3', note: '依存関係の組み立て、非同期処理、入力・状態の購読に使用。', logoId: 'unity' },
      { name: 'Input System / Addressables', note: '入力とシーン・アセットの読み込みに使用。Input SystemとR3の連携拡張も自作。', logoId: 'unity' },
      { name: 'Cinemachine / LitMotion / FMOD', note: 'カメラ、UIアニメーション、音のフィードバックに使用。', logoId: 'unity' },
      { name: 'Entities / Burst / Job System', note: 'EntitiesEventStreamでメモリ配置と並列書き込みを設計・実装。', logoId: 'unity' },
    ],
  },
];

export const educationHistory: HistoryEntry[] = [
  {
    period: '2021 - 2024',
    title: '福島県立福島高校',
    description: '2021年入学 / 2024年卒業',
  },
  {
    period: '2024 -',
    title: '会津大学',
    description: '2024年入学 / 3年・CG系研究室所属',
  },
];

export const activityHistory: HistoryEntry[] = [
  {
    period: '2026/10 予定',
    title: '会津大学 学祭展示に向けて制作中',
    description: '3Dリズムアクション × ローグライト作品を制作中。',
  },
  {
    period: '2026/08/29 - 30',
    title: 'CyberAgent Proto Sprint League 2026 個人賞受賞',
    description: '3人チーム・2日間で『SUPER BALL!』を制作。リーダー・設計・進行管理を担当。',
  },
  {
    period: '2026/08/17 - 21',
    title: 'インターン',
    description: '5日間のインターンで、Java / Spring / MySQLによるWebアプリを制作。',
  },
  {
    period: 'サークル活動',
    title: 'Unity勉強会 講師',
    description: 'チーム制作の相談役と、全3回のUnity勉強会の講師を担当。',
  },
  {
    period: '2026/08',
    title: '夏コミ',
    description: '『ちょこ旅』を頒布。',
  },
  {
    period: '2024/10',
    title: '会津大学 文化祭',
    description: '展示',
  },
  {
    period: '2024/12',
    title: 'コミックマーケット105',
    description: '自主制作ゲーム展示・頒布',
  },
  {
    period: '2025/08',
    title: 'コミックマーケット106',
    description: '自主制作ゲーム展示・頒布',
  },
  {
    period: '2025/10',
    title: '会津大学 文化祭',
    description: '展示',
  },
  {
    period: '2025/12',
    title: 'コミックマーケット107',
    description: '自主制作ゲーム展示・頒布',
  },
];

export const works: WorkEntry[] = [
  {
    slug: 'super-ball',
    title: 'SUPER BALL!',
    category: '1画面アクションゲーム',
    period: '2026/08/29 - 30',
    role: ['設計・実装', '進行管理'],
    tools: ['Unity', 'VContainer', 'UniTask', 'R3', 'Cinemachine', 'FMOD'],
    teamSize: '3人',
    summary:
      'バウンドするボールを左右スワイプで操作するアクションゲーム。Proto Sprint League 2026で3人チーム・2日間で制作し、個人賞を受賞しました。',
    challenge:
      'クラス設計、タスク分割、実装順序を整理。事前実装禁止のため、事前期間は詳細設計に充て、当日の判断を減らしました。',
    result:
      '2日間でチームとしてゲームを制作し、個人賞を受賞。結果画面、セーブ仕様、画面遷移の設計も担当しました。',
    coverImage: {
      ...createPosterAsset({ title: 'SUPER BALL!', subtitle: 'Proto Sprint League 2026 / Individual Award', accent: '#D47A35', surface: '#172333', detail: '#7CC6D3', eyebrow: '3 PEOPLE / 2 DAYS' }),
      alt: 'SUPER BALL! 紹介用タイトル画像（ゲーム画面ではありません）',
    },
    gallery: [],
    externalLinks: [],
    featured: true,
  },
  {
    slug: 'entities-event-stream',
    title: 'Entities Event Stream',
    category: 'Unity Library',
    period: '2026/07',
    role: ['設計・実装'],
    tools: ['Unity', 'Entities', 'C#', 'Burst', 'Job System', 'Source Generator'],
    teamSize: '個人制作',
    summary:
      'Unity Entities向けのイベントストリーム。並列書き込みと、イベントをコピーせずに読み取れる仕組みを実装しています。',
    challenge:
      'workerごとに書き込み領域を分け、読み手ごとに独立した読み取り位置を管理。メモリ配置と並列処理を意識して設計しました。',
    result:
      'Source Generatorによる登録・ライフサイクル生成と、不正な書き込みの検出を実装。Unity Entities向けに公開・開発しています。',
    coverImage: {
      ...createPosterAsset({ title: 'EntitiesEventStream', subtitle: 'Unity Entities / Parallel Event Stream', accent: '#315F86', surface: '#101820', detail: '#89D0A2', eyebrow: 'UNITY LIBRARY / IN DEVELOPMENT' }),
      alt: 'EntitiesEventStream 紹介用タイトル画像',
    },
    gallery: [],
    externalLinks: [{ label: 'GitHub Repository', url: 'https://github.com/seikasan/EntitiesEventStream', kind: 'source' }],
    featured: true,
  },
  {
    slug: 'my-extensions',
    title: 'My Extensions',
    category: 'Unity Library / 拡張集',
    period: '2026/07 - 開発中',
    role: ['設計・実装'],
    tools: ['Unity', 'C#', 'Input System', 'R3', 'UniTask'],
    teamSize: '個人制作',
    summary: '自身のUnity開発で使う拡張の詰め合わせ。入力、購読管理、シーン読み込み、非同期処理を扱いやすくする機能をまとめています。',
    challenge: 'ゲーム制作で繰り返し使う処理や、既存APIで書きづらい部分を、自分の使い方に合わせた拡張として整理しています。',
    result: 'R3、InputSystem.R3、Scenes、UniTaskの拡張を公開。自身のプロジェクトで使いながら更新しています。',
    coverImage: createPosterAsset({ title: 'MyExtensions', subtitle: 'Extensions for My Unity Projects', accent: '#315F86', surface: '#101820', detail: '#7CC6D3', eyebrow: 'UNITY LIBRARY' }),
    gallery: [],
    externalLinks: [{ label: 'GitHub Repository', url: 'https://github.com/seikasan/MyExtensions', kind: 'source' }],
    featured: false,
  },
  {
    slug: 'clean-foundation',
    title: 'CleanFoundation',
    category: 'Unity Library',
    period: '2026/09',
    role: ['設計・実装'],
    tools: ['Unity', 'C#'],
    teamSize: '個人制作',
    summary: 'Domain層をUnityEngineに依存させずに、Vector3などの値型を使うためのライブラリです。',
    challenge: 'Domain層で必要なベクトルや回転などの値型・数学処理を、Pure C#で実装しています。',
    result: 'Domain層ではCleanFoundationの型を使用し、Unityとの接続箇所では対応するUnityEngine型へ変換できます。',
    coverImage: createPosterAsset({ title: 'CleanFoundation', subtitle: 'Shared Foundation for Unity Projects', accent: '#2F6F5E', surface: '#132018', detail: '#E0A95B', eyebrow: 'UNITY LIBRARY' }),
    gallery: [],
    externalLinks: [{ label: 'GitHub Repository', url: 'https://github.com/seikasan/CleanFoundation', kind: 'source' }],
    featured: false,
  },
  {
    slug: 'my-architecture',
    title: 'MyArchitecture',
    category: 'GitHub Repository / Architecture',
    period: '2026/05 - 2026/07',
    role: ['企画・実装'],
    tools: ['Unity', 'C#', 'VContainer', 'MessagePipe', 'UniTask', 'R3', 'QFramework', 'Roslyn'],
    teamSize: '個人制作',
    summary:
      'Unity向けの自作アーキテクチャ。責務分割とコード生成によって、チームで読みやすく、誤操作を防ぎやすいコードを目指しました。',
    challenge:
      'QFramework や VContainer を使う中で、規約としては分かっていても実装上できてしまう操作が事故につながると感じました。Presenter に読み取り専用 interface を渡すなど、間違えにくい構造をコード側で作ることを意識しています。',
    result:
      '読み取り専用Modelの生成、Command / Query、購読のライフタイム管理などを検証。2026年7月に開発を終了しました。',
    coverImage: createPosterAsset({
      title: 'MyArchitecture',
      subtitle: 'GitHub Repository',
      accent: '#315F86',
      surface: '#101820',
      detail: '#E0A95B',
      eyebrow: 'UNITY ARCHITECTURE',
    }),
    gallery: [],
    externalLinks: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/seikasan/MyArchitecture',
        kind: 'source',
      },
    ],
    featured: true,
  },
  {
    slug: 'choco-tabi',
    title: 'ちょこ旅',
    category: '2.5D横スクロールゲーム / お菓子',
    period: '2026/02 - 2026/08',
    role: ['企画', 'PM補佐', '設計・プログラム', 'モデリング', 'コンポーザー'],
    tools: ['Unity', 'C#', 'Blender', 'Shader Graph', 'Studio One', 'UniRx'],
    teamSize: '8人',
    summary:
      'チョコの形態切り替えを使ってお菓子の世界を冒険する、8人チーム制作の2.5D横スクロールゲーム。企画・PM補佐・設計・プログラム・音楽などを担当しました。',
    challenge:
      'プログラムでは、ノーコードで敵やギミックを作れるアクタースクリプト群を主に担当しました。ステートマシン、View、Module を Inspector から組み替えられるようにし、二層構造ステージやレーン切り替え、専用マップエディターなども制作しています。',
    result:
      '2026年8月に開発終了し、夏コミで頒布。配布ページも公開されています。小物モデルやシェーダー、BGM「テンパリング・タイム！！」も制作しました。',
    coverImage: {
      src: chocoTabiTitle,
      alt: 'ちょこ旅 タイトル画面',
    },
    gallery: [],
    externalLinks: [
      {
        label: '配布ページ',
        url: 'https://panddclub.org/games',
        kind: 'demo',
      },
      {
        label: 'SoundCloud Playlist',
        url: 'https://soundcloud.com/seika-461144239/sets/syzq352z22qn',
        kind: 'demo',
      },
    ],
    featured: true,
  },
  {
    slug: 'lyla',
    title: 'Lyla',
    category: '3D散策ゲーム / 実験作',
    period: '2026/04',
    role: ['企画・実装', '3Dモデル制作', 'プログラマー'],
    tools: ['Unity', 'C#', 'QFramework', 'VRoid Studio'],
    teamSize: '個人制作',
    summary:
      '雨の降る夜の街をアニメ調のキャラクターが歩く、実験的な3D散策ゲーム。QFrameworkの練習として制作しました。',
    challenge:
      'QFrameworkを使い、キャラクター操作とシーンの構成を試しました。VRoid Studioのモデルをトゥーンレンダリングし、夜の街の雰囲気を検証しました。',
    result:
      'VRoid Studio で制作した 3Dモデルを Unity でトゥーンレンダリングし、夜の街の空気感とキャラクターの見え方をまとめました。詳細ページではプレイ映像を掲載しています。',
    coverImage: {
      src: lylaTitle,
      alt: 'Lyla タイトル画面',
    },
    gallery: [],
    externalLinks: [],
    featured: true,
  },
  {
    slug: 'choco-map-maker',
    title: '🍫ちょこ旅マップエディター',
    category: '制作支援ツール / ステージ構想',
    period: '2026/03',
    role: ['企画・実装'],
    tools: ['JavaScript', 'HTML', 'CSS', 'Gemini', 'ChatGPT'],
    teamSize: '個人制作',
    summary:
      'アクションゲーム「ちょこ旅」の手前と奥の二層構造を考えるために作った、ステージ案整理用の専用マップエディターです。',
    challenge:
      'ちょこ旅のステージは二層構造という特殊な仕様のため、既存ツールではアイデアを整理しづらく、自分で専用エディターを作りました。手前と奥を切り替えて作成でき、保存と読み込みは JSON で行えます。',
    result:
      'Unity との互換性を持つ実装ツールではなく、構想をまとめるためのツールとして制作しました。どうやら他のプロジェクトでも使われているようです。',
    coverImage: {
      src: chocoMapMakerTitle,
      alt: 'ちょこ旅マップエディター 画面',
    },
    gallery: [],
    externalLinks: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/seikasan/ChocoMapMaker',
        kind: 'source',
      },
    ],
    featured: true,
  },
  {
    slug: 'access-to-your-5-girls',
    title: 'Access to your 5 Girls💜🩷💛🩵🤍',
    category: '恋愛ADVゲーム / サイコサスペンス',
    period: '2025/08 - 2025/12',
    role: ['シナリオライター', 'コンポーザー'],
    tools: ['Unity', 'C#', 'Studio One'],
    teamSize: '8人',
    summary:
      '幼なじみとの再会をきっかけに、主人公が5人の女性と関わっていく恋愛ADVゲームです。恋愛劇からサイコサスペンスへ変化する構成で、シナリオと楽曲の両面を担当しました。',
    challenge:
      'プロット設計、シナリオ構成、キャラクター会話・テキストなど計20万字以上の執筆に加え、通常BGM1曲とヒロイン固有BGM5曲を制作しました。表向きの印象と内面のずれ、伏線、キャラクター間の接続を文章と音楽の両方で揃えて設計しています。',
    result:
      '詳細ページでは、花のモチーフによる伏線設計、各ヒロインBGMの意図、ネタバレ付き解説、楽曲試聴を掲載しています。',
    coverImage: {
      src: accessToYour5GirlsCover,
      alt: 'Access to your 5 Girls💜🩷💛🩵🤍 メインビジュアル',
    },
    gallery: [],
    externalLinks: [
      {
        label: 'PandD 2025 Winter をダウンロード',
        url: 'https://pandd.sakura.ne.jp/games/comiket/PandD2025Winter.zip',
        kind: 'demo',
      },
      {
        label: 'SoundCloud Playlist',
        url: 'https://soundcloud.com/seika-461144239/sets/access-to-your-5-girls',
        kind: 'demo',
      },
    ],
    featured: true,
  },
  {
    slug: 'return-false',
    title: 'return false;',
    category: '2D推理ADVゲーム / ミステリー',
    period: '2025/03 - 2025/08',
    role: ['シナリオライター', 'コンポーザー'],
    tools: ['Siv3D', 'C++', 'Studio One'],
    teamSize: '7人',
    summary:
      '学祭を3日後に控えたゲーム開発サークルを舞台に、制作データ消失事件の真相を追う推理ADVゲームです。事件の導入から解決までのシナリオ構成と楽曲制作を担当しました。',
    challenge:
      '部室内の痕跡やメンバーの証言を少しずつ接続し、誰が何を見ていたのか、どの証言が食い違っているのかをプレイヤー自身が読み解ける構成を目指しました。学祭前特有の焦りや切迫感と、身近な人間関係の不穏さを文章と音の両面から揃えています。',
    result:
      '詳細ページでは、推理ADVとしてのシナリオ設計に加え、SoundCloud のプレイリストと各BGMの試聴、シナリオ解説、外部配布リンクをまとめて確認できます。',
    coverImage: {
      src: returnFalseCover,
      alt: 'return false; メインビジュアル',
    },
    gallery: [],
    externalLinks: [
      {
        label: 'PandD 2025 Summer をダウンロード',
        url: 'https://pandd.sakura.ne.jp/games/comiket/PandD2025Summer.zip',
        kind: 'demo',
      },
      {
        label: 'SoundCloud Playlist',
        url: 'https://soundcloud.com/seika-461144239/sets/return-false',
        kind: 'demo',
      },
    ],
    featured: true,
  },
  {
    slug: 'lost-of-music',
    title: 'Lost of Music',
    category: '2Dアクションゲーム / アドベンチャー',
    period: '2024/08 - 2024/12',
    role: ['コンポーザー'],
    tools: ['Unity', 'C#', 'Studio One'],
    teamSize: '7人',
    summary:
        '音楽が無くなってしまった世界で楽器を集めながら進む2Dアクションゲームです。初めてのチーム開発で、楽曲制作を担当しました。',
    challenge:
        '徐々に楽器が増えていく通常BGM1曲とプロローグBGMを制作しました。',
    result:
        '詳細ページでは、BGMの苦労、SoundCloud の埋め込み再生を確認できます。',
    coverImage: {
      src: lostOfMusicCover,
      alt: 'Lost of Music メインビジュアル',
    },
    gallery: [],
    externalLinks: [
      {
        label: 'PandD 2024 Winter をダウンロード',
        url: 'https://pandd.sakura.ne.jp/games/comiket/PandD2024Winter.zip',
        kind: 'demo',
      },
      {
        label: 'SoundCloud Playlist',
        url: 'https://soundcloud.com/seika-461144239/sets/lost-of-music',
        kind: 'demo',
      },
    ],
    featured: true,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'illust-01',
    category: 'illustration',
    image: createPosterAsset({
      title: 'Illustration 01',
      subtitle: 'Key art placeholder',
      accent: '#E0A95B',
      surface: '#1D1513',
      detail: '#7CC6D3',
    }),
    caption: '世界観を見せる一枚絵用のプレースホルダー',
    tools: ['Clip Studio', 'Photoshop'],
  },
  {
    id: '3dcg-01',
    category: '3dcg',
    image: createPosterAsset({
      title: '3DCG 01',
      subtitle: 'Prop study placeholder',
      accent: '#89D0A2',
      surface: '#132018',
      detail: '#7CC6D3',
    }),
    caption: '小物モデリングの差し替え先',
    tools: ['Blender', 'Substance 3D Painter'],
  },
];

export const musicItems: MusicItem[] = [
  {
    id: 'music-01',
    provider: 'niconico',
    title: 'ベランダ',
    embedSrc: 'https://embed.nicovideo.jp/watch/sm43101136',
    description: '夜の寒いベランダでぽつぽつと独り言を呟く。',
    releasePeriod: '2023/12/03',
    role: ['作詞作曲/編曲/動画制作'],
  },
  {
    id: 'music-02',
    provider: 'niconico',
    title: 'カチカチカチカチ',
    embedSrc: 'https://embed.nicovideo.jp/watch/sm44662289',
    description: '秩序に囚われた少女が自由を求めて自らの血と肋骨を鍵にする物語。',
    releasePeriod: '2025/02/22',
    role: ['作詞作曲/編曲/動画制作/小説執筆'],
  },
  {
    id: 'music-03',
    provider: 'niconico',
    title: '罪の世界に戻りたいな',
    embedSrc: 'https://embed.nicovideo.jp/watch/sm41687351',
    description: 'とある界隈の衰退を嘆いた曲。',
    releasePeriod: '2023/01/22',
    role: ['作詞作曲/編曲/動画制作'],
  },
  {
    id: 'music-04',
    provider: 'niconico',
    title: '存在感覚実行',
    embedSrc: 'https://embed.nicovideo.jp/watch/sm42186160',
    description: '自分の存在を疑問視する恐怖症。',
    releasePeriod: '2023/05/06',
    role: ['作詞作曲/編曲/動画制作'],
  },
  {
    id: 'music-05',
    provider: 'niconico',
    title: 'ひとりだけの住処',
    embedSrc: 'https://embed.nicovideo.jp/watch/sm42337068',
    description: 'ひとりでも楽しいじゃないか。',
    releasePeriod: '2023/06/10',
    role: ['作詞作曲/編曲/動画制作'],
  },
  {
    id: 'music-06',
    provider: 'niconico',
    title: '星屑の記憶',
    embedSrc: 'https://embed.nicovideo.jp/watch/sm43840363',
    description: '大学に入学して友達と離れたけどそれって星座みたいだと。',
    releasePeriod: '2024/05/27',
    role: ['作詞作曲/編曲/動画制作'],
  },
  {
    id: 'music-07',
    provider: 'spotify',
    title: '森に眠る町',
    embedSrc:
      'https://open.spotify.com/embed/album/0SZNC23ADIi067A8BD0W1n?utm_source=generator',
  },
  {
    id: 'music-08',
    provider: 'spotify',
    title: '海中の額縁',
    embedSrc:
      'https://open.spotify.com/embed/album/2ZMNfxL6qcHfEU07KMyN6e?utm_source=generator',
  },
  {
    id: 'music-09',
    provider: 'spotify',
    title: '雲の透き間',
    embedSrc:
      'https://open.spotify.com/embed/album/5v8N0qBuLpv84E5OvATZZF?utm_source=generator',
  },
  {
    id: 'music-10',
    provider: 'spotify',
    title: '何処かの深淋浴',
    embedSrc:
      'https://open.spotify.com/embed/album/72Hj4enYEt42pPFYHoYGDX?utm_source=generator',
  },
];

export const musicSectionMeta: MusicSectionMeta[] = [
  {
    provider: 'niconico',
    title: 'Niconico',
    description: '高校生のときに上島美月として動画付きで公開したボカロ楽曲です。',
  },
  {
    provider: 'spotify',
    title: 'Spotify',
    description: '大学生になってからseikaとして公開したインスト楽曲です。',
  },
];
