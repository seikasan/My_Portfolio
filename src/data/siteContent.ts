import { createPosterAsset } from '../lib/placeholders';
import type {
  GalleryItem,
  MusicItem,
  MusicSectionMeta,
  SiteProfile,
  WorkEntry,
} from '../types/content';
import accessToYour5GirlsCover from '../assets/works/access-to-your-5-girls/cover.png';
import returnFalseCover from '../assets/works/return-false/cover.png';
import lostOfMusicCover from '../assets/works/lost-of-music/cover.png'

export const siteProfile: SiteProfile = {
  name: 'seika',
  heroTitle: 'Game / Music / 3DCG',
  heroBody:
    '作品そのものの魅力と、制作の考え方がどちらも伝わる構成を目指したポートフォリオです。現在は差し替えしやすい仮データで、公開導線まで実装しています。',
  intro:
    'プロフィール、Game、Music、3DCG、連絡先までをデータ駆動で整理しています。画像・文言・外部リンクは `src/data/siteContent.ts` を差し替えるだけで更新できます。',
  contactNote:
    '案件相談、共同制作、ポートフォリオへのフィードバックはメールから受け付けています。SNS や GitHub の導線も同じデータ定義に追加できます。',
  links: [
    {
      label: 'Email',
      url: 'mailto:s1320103@u-aizu.ac.jp',
      kind: 'email',
    },
  ],
};

export const works: WorkEntry[] = [
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
      '詳細ページでは、花のモチーフによる伏線設計、各ヒロインBGMの意図、ネタバレ付き解説、SoundCloud の埋め込み再生をまとめて確認できます。',
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
    category: '2D推理ADVゲーム・ミステリー',
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
        label: 'PandD 2024 Summer をダウンロード',
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
    id: 'illust-02',
    category: 'illustration',
    image: createPosterAsset({
      title: 'Illustration 02',
      subtitle: 'Character sheet placeholder',
      accent: '#F08AA6',
      surface: '#201217',
      detail: '#E0A95B',
    }),
    caption: 'キャラクターデザインの差し替え先',
    tools: ['Clip Studio'],
  },
  {
    id: 'illust-03',
    category: 'illustration',
    image: createPosterAsset({
      title: 'Illustration 03',
      subtitle: 'Color study placeholder',
      accent: '#7CC6D3',
      surface: '#12191B',
      detail: '#D9B36B',
    }),
    caption: '色設計や塗りの比較に使う枠',
    tools: ['Photoshop'],
  },
  {
    id: 'illust-04',
    category: 'illustration',
    image: createPosterAsset({
      title: 'Illustration 04',
      subtitle: 'Mood board placeholder',
      accent: '#CBA9FF',
      surface: '#18121E',
      detail: '#E0A95B',
    }),
    caption: 'シリーズ作品の雰囲気を並べるための枠',
    tools: ['Procreate'],
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
  {
    id: '3dcg-02',
    category: '3dcg',
    image: createPosterAsset({
      title: '3DCG 02',
      subtitle: 'Environment placeholder',
      accent: '#7CC6D3',
      surface: '#121A1D',
      detail: '#E0A95B',
    }),
    caption: '背景制作やライティング検証向け',
    tools: ['Blender'],
  },
  {
    id: '3dcg-03',
    category: '3dcg',
    image: createPosterAsset({
      title: '3DCG 03',
      subtitle: 'Material study placeholder',
      accent: '#E0A95B',
      surface: '#201915',
      detail: '#89D0A2',
    }),
    caption: '質感比較やレンダリング設定の見せ場',
    tools: ['Blender', 'Cycles'],
  },
  {
    id: '3dcg-04',
    category: '3dcg',
    image: createPosterAsset({
      title: '3DCG 04',
      subtitle: 'Animation placeholder',
      accent: '#F08AA6',
      surface: '#1E1417',
      detail: '#7CC6D3',
    }),
    caption: '短いループアニメーションの差し替え先',
    tools: ['Blender', 'After Effects'],
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
