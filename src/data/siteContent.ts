import { createPosterAsset } from '../lib/placeholders';
import type { GalleryItem, SiteProfile, WorkEntry } from '../types/content';

export const siteProfile: SiteProfile = {
  name: 'seikasan',
  heroTitle: 'Game / Illustration / 3DCG',
  heroBody:
    '作品そのものの魅力と、制作の考え方がどちらも伝わる構成を目指したポートフォリオです。現在は差し替えしやすい仮データで、公開導線まで実装しています。',
  intro:
    'プロフィール、作品一覧、詳細ページ、ギャラリー、連絡先までをデータ駆動で整理しています。画像・文言・外部リンクは `src/data/siteContent.ts` を差し替えるだけで更新できます。',
  contactNote:
    '案件相談、共同制作、ポートフォリオへのフィードバックはメールから受け付けています。SNS や GitHub の導線も同じデータ定義に追加できます。',
  links: [
    {
      label: 'Email',
      url: 'mailto:seika8738@gmail.com',
      kind: 'email',
    },
  ],
};

export const works: WorkEntry[] = [
  {
    slug: 'case-01',
    title: 'Case 01 / Narrative Game',
    category: 'Game Prototype',
    period: '2025.01 - 2025.03',
    role: ['企画', 'プログラム', 'UI'],
    tools: ['Unity', 'C#', 'FMOD'],
    teamSize: '1〜3名想定',
    summary:
      '探索と会話を軸にした短編ゲームのレイアウトサンプルです。サムネイル、区分、技術、要約を一覧で比較しやすく整理しています。',
    challenge:
      '詳細ページでは「どの課題に対して、何を考え、どう実装したか」を短く区切って読める構成にしています。長文でも視線が迷わないよう、見出しと余白で情報を分けています。',
    result:
      '成果欄は公開リンク、制作メモ、デモ動画などに接続できます。現在は仮データですが、成果指標やリンクが増えても情報が埋もれない構成です。',
    coverImage: createPosterAsset({
      title: 'Narrative',
      subtitle: 'Story-led exploration layout',
      accent: '#E0A95B',
      surface: '#241b17',
      detail: '#7CC6D3',
    }),
    gallery: [
      createPosterAsset({
        title: 'Scene',
        subtitle: 'Key visual placeholder',
        accent: '#E0A95B',
        surface: '#1C1513',
        detail: '#8ED6E4',
      }),
      createPosterAsset({
        title: 'UI Flow',
        subtitle: 'Conversation & navigation',
        accent: '#7CC6D3',
        surface: '#13181A',
        detail: '#E0A95B',
      }),
    ],
    externalLinks: [],
    featured: true,
  },
  {
    slug: 'case-02',
    title: 'Case 02 / Puzzle System',
    category: 'System Design',
    period: '2025.04 - 2025.05',
    role: ['ゲームデザイン', '実装'],
    tools: ['C++', 'OpenGL', 'GLSL'],
    teamSize: '個人制作',
    summary:
      'ロジック中心の作品を想定したケースです。視覚表現だけでなく、処理設計を見せたい作品でも成立する見せ方にしています。',
    challenge:
      '要点の多い技術作品でも、一覧では情報を絞り、詳細ページで段階的に深掘りできるようにしました。比較しやすさと読みやすさを両立しています。',
    result:
      '技術検証、研究寄りの試作、ツール系の作品なども同じフォーマットで掲載できます。外部リンクが無い場合でも本文だけで内容が伝わる構成です。',
    coverImage: createPosterAsset({
      title: 'Puzzle',
      subtitle: 'System-first case study',
      accent: '#7CC6D3',
      surface: '#151A1E',
      detail: '#E0A95B',
    }),
    gallery: [
      createPosterAsset({
        title: 'State',
        subtitle: 'Interaction rules',
        accent: '#7CC6D3',
        surface: '#101719',
        detail: '#D79A52',
      }),
      createPosterAsset({
        title: 'Logic',
        subtitle: 'Readable breakdown',
        accent: '#E0A95B',
        surface: '#231A17',
        detail: '#77C1CD',
      }),
    ],
    externalLinks: [],
    featured: true,
  },
  {
    slug: 'case-03',
    title: 'Case 03 / Visual Experiment',
    category: 'Visual Research',
    period: '2025.06 - 2025.07',
    role: ['アートディレクション', 'シェーダー'],
    tools: ['Three.js', 'GLSL', 'Blender'],
    teamSize: '個人制作',
    summary:
      '映像やシェーダー研究のように雰囲気が重要な作品向けのケースです。静止画中心でも情報が先に読める構成にしています。',
    challenge:
      '視覚的な印象を保ちながら、本文の読みやすさと余白の整理を優先しました。画像点数が少なくても概要と意図が先に伝わる密度にしています。',
    result:
      'イラスト、映像、UI コンセプトなど、完成形が静止画中心の作品でもそのまま流用できます。作品の背景説明を補いやすい詳細構成です。',
    coverImage: createPosterAsset({
      title: 'Visual',
      subtitle: 'Mood-driven presentation',
      accent: '#CBA9FF',
      surface: '#18121E',
      detail: '#7CC6D3',
    }),
    gallery: [
      createPosterAsset({
        title: 'Frame 01',
        subtitle: 'Composition study',
        accent: '#CBA9FF',
        surface: '#160F1B',
        detail: '#7CC6D3',
      }),
      createPosterAsset({
        title: 'Frame 02',
        subtitle: 'Light & motion direction',
        accent: '#E0A95B',
        surface: '#1B1412',
        detail: '#CBA9FF',
      }),
    ],
    externalLinks: [],
    featured: false,
  },
  {
    slug: 'case-04',
    title: 'Case 04 / Interactive Tool',
    category: 'Creative Tool',
    period: '2025.08 - 2025.09',
    role: ['設計', 'フロントエンド'],
    tools: ['React', 'TypeScript', 'Vite'],
    teamSize: '個人制作',
    summary:
      'Web ツールやインタラクティブ作品を掲載するためのケースです。今回のポートフォリオ自体も同じ構造で管理できます。',
    challenge:
      '短い導入で価値を伝えつつ、必要であれば詳細まで掘れる情報設計にしています。採用向けにも一般公開向けにも寄りすぎない構成です。',
    result:
      '作品数が増えても `src/data` だけで一覧と詳細を一元管理できます。GitHub Pages 配下でも動くルーティングに固定しています。',
    coverImage: createPosterAsset({
      title: 'Tool',
      subtitle: 'Interactive web case',
      accent: '#89D0A2',
      surface: '#152019',
      detail: '#E0A95B',
    }),
    gallery: [
      createPosterAsset({
        title: 'Route',
        subtitle: 'HashRouter detail page',
        accent: '#89D0A2',
        surface: '#122117',
        detail: '#7CC6D3',
      }),
      createPosterAsset({
        title: 'Data',
        subtitle: 'Typed content source',
        accent: '#E0A95B',
        surface: '#211A14',
        detail: '#89D0A2',
      }),
    ],
    externalLinks: [],
    featured: false,
  },
  {
    slug: 'case-05',
    title: 'Case 05 / Art Direction',
    category: 'Concept Series',
    period: '2025.10 - 2025.11',
    role: ['コンセプト設計', 'ビジュアル制作'],
    tools: ['Clip Studio', 'Photoshop', 'After Effects'],
    teamSize: '個人制作',
    summary:
      'シリーズ作品や世界観ボード向けのケースです。サムネイルを見せつつ、カード内の文字量は要点だけに絞っています。',
    challenge:
      '作品タイトルが長くても崩れないカードレイアウトにし、一覧では比較、詳細では補足説明を読めるようにしています。',
    result:
      'ギャラリーだけでは伝わりにくい制作意図を詳細ページで補えるため、アートワーク主体のポートフォリオにも使えます。',
    coverImage: createPosterAsset({
      title: 'Direction',
      subtitle: 'Series & world-building',
      accent: '#F08AA6',
      surface: '#201117',
      detail: '#E0A95B',
    }),
    gallery: [
      createPosterAsset({
        title: 'Board 01',
        subtitle: 'Tone & references',
        accent: '#F08AA6',
        surface: '#1E1216',
        detail: '#7CC6D3',
      }),
      createPosterAsset({
        title: 'Board 02',
        subtitle: 'Palette & motifs',
        accent: '#E0A95B',
        surface: '#201814',
        detail: '#F08AA6',
      }),
    ],
    externalLinks: [],
    featured: false,
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
