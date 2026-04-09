export const siteMeta = {
  title: "seikasan Portfolio",
  description:
    "ゲーム実装を軸に、サウンド・シナリオ・3Dまで横断して担当する学生ゲーム制作者のポートフォリオ。",
  name: "seikasan",
  roleLine: "ゲーム実装 / サウンド / シナリオ / 3D",
  heroSummary:
    "Unity と Siv3D を中心に、チーム制作の中で実装を主軸としながらサウンド、シナリオ、3D まで横断して担当しています。作品ごとの担当範囲と成果物が短時間で伝わる構成に整理しています。",
  contactEmail: "your-mail@example.com"
} as const;

export const heroTechStack = ["Unity", "C#", "Siv3D", "C++", "Blender", "Studio One"] as const;

export const heroMetrics = [
  { label: "Game Works", value: "4本" },
  { label: "Main Roles", value: "実装 / 音楽 / シナリオ" },
  { label: "Exhibition", value: "文化祭・コミケ" }
] as const;

export const strengths = [
  {
    title: "Program",
    summary:
      "ゲームプレイの基盤を共通化し、敵やギミックを追加しやすい形まで設計してから実装します。",
    proof: "『ちょこ旅』で敵制作をノーコードに近づける共通基盤を構築。"
  },
  {
    title: "Sound",
    summary:
      "BGM を雰囲気づくりだけで終わらせず、設定や進行を補強する情報として組み込みます。",
    proof: "『Access to your 5 Girls』でメイン BGM とキャラ別 BGM を含む 6 曲を制作。"
  },
  {
    title: "Scenario",
    summary:
      "短編ミステリーから長編 ADV まで、プレイ体験に合わせて情報量と展開速度を調整できます。",
    proof: "『return false;』と『Access to your 5 Girls』で謎解き短編と 10 万字規模の ADV を担当。"
  },
  {
    title: "3D",
    summary:
      "Blender で見た目を作るだけでなく、ゲーム内の可読性や運用まで考えて組み込みます。",
    proof: "『ちょこ旅』でお菓子モデル、ボーン設定、アニメーション対応まで担当。"
  }
] as const;

export const skillGroups = [
  {
    label: "Core",
    items: [
      { name: "C", years: "2y" },
      { name: "C#", years: "2y" },
      { name: "Unity", years: "2y" },
      { name: "Blender", years: "4y" },
      { name: "Studio One", years: "6y" },
      { name: "GitHub", years: "2y" }
    ]
  },
  {
    label: "Sub / Exposure",
    items: [
      { name: "VBA", years: "1m" },
      { name: "Java", years: "授業利用" },
      { name: "HTML / CSS / JavaScript", years: "授業利用" },
      { name: "Siv3D", years: "1作品" }
    ]
  }
] as const;

export const activities = [
  { date: "2024/10", title: "文化祭 展示", description: "自主制作ゲームを展示。" },
  { date: "2024/12", title: "コミックマーケット105", description: "自主制作ゲームを展示・頒布。" },
  { date: "2025/08", title: "コミックマーケット106", description: "自主制作ゲームを展示・頒布。" },
  { date: "2025/10", title: "文化祭 展示", description: "自主制作ゲームを展示。" },
  { date: "2025/12", title: "コミックマーケット107", description: "自主制作ゲームを展示・頒布。" }
] as const;

export const profileTimeline = [
  "ゲーム実装を軸に、作品ごとに必要な役割を引き受けながら完成度を上げる形で制作しています。",
  "サウンドとシナリオは単独要素ではなく、演出と進行を支えるレイヤーとして設計しています。",
  "3D は見た目づくりに留めず、ゲーム内の可読性や運用まで実装側と往復しながら扱っています。"
] as const;

export const contactLinks = [
  {
    label: "GitHub",
    url: "https://github.com/seikasan",
    note: "公開できるコードや制作物を掲載"
  },
  {
    label: "SoundCloud",
    note: "URL を設定するとゲームサウンドの導線として表示"
  },
  {
    label: "ニコニコ",
    note: "URL を設定すると個人作品の導線として表示"
  },
  {
    label: "ゲーム配布ページ",
    note: "サークルサイトや頒布ページの URL を設定"
  }
] as const;
