export const siteMeta = {
  title: "Game Creator Portfolio",
  description:
    "Unityを中心に、ゲームの実装・音・物語・3Dを横断して制作する大学3年生のポートフォリオ。",
  name: "seikasan",
  roleLine: "ゲームプログラマー / サウンド / シナリオ / 3Dモデリング",
  heroSummary:
    "Unity を中心に、ゲームの実装・サウンド・シナリオ・3D モデリングを横断して制作しています。チーム開発では担当範囲を明確にしながら、作品全体の完成度を引き上げる役割を担ってきました。",
  contactEmail: "your-mail@example.com"
} as const;

export const heroMetrics = [
  { label: "Team Games", value: "4本" },
  { label: "Scenario", value: "10万字" },
  { label: "Events", value: "コミケ頒布" }
] as const;

export const strengths = [
  {
    title: "Program",
    summary: "Unity でゲームプレイの基盤を設計し、量産しやすい仕組みに落とし込めます。",
    proof: "『ちょこ旅』で敵生成をノーコード化する設計を担当。"
  },
  {
    title: "Sound",
    summary: "BGM を雰囲気づくりではなく、設定や進行を支える設計として組み込みます。",
    proof: "『Access to your 5 Girls』でメインBGMとヒロイン別BGMを制作。"
  },
  {
    title: "Scenario",
    summary: "ゲーム体験に合わせたテキスト量と展開設計を行えます。",
    proof: "『Access to your 5 Girls』で総文字数10万字のシナリオを担当。"
  },
  {
    title: "3D",
    summary: "Blender でモデルを作るだけでなく、ゲーム内運用まで見越して組み込みます。",
    proof: "『ちょこ旅』でお菓子モデル制作、ボーン設定、アニメーション対応を担当。"
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
    label: "Basic",
    items: [
      { name: "VBA", years: "1m" },
      { name: "Java", years: "授業で使用" },
      { name: "HTML / CSS / JavaScript", years: "授業で使用" },
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
  "幼稚園では漫画を描き、小学生からプログラミングと作曲を始めました。",
  "中学生で小説執筆と3Dモデリングを始め、高校では音楽制作に集中しました。",
  "大学ではこれまでの経験を活かし、チームでのゲーム制作に取り組んでいます。"
] as const;

export const contactLinks = [
  {
    label: "GitHub",
    url: "https://github.com/seikasan",
    note: "公開できるコードを掲載"
  },
  {
    label: "SoundCloud",
    note: "URLを設定するとゲームサウンドの導線として表示"
  },
  {
    label: "ニコニコ",
    note: "URLを設定すると個人作品の導線として表示"
  },
  {
    label: "ダウンロードページ",
    note: "ゲーム頒布ページのURLを設定"
  }
] as const;
