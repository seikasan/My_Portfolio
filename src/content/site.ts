export const siteMeta = {
  title: "seikasan Portfolio",
  description: "ゲーム実装を軸に、サウンド・シナリオ・3Dまで担当する学生ゲーム制作者のポートフォリオ。",
  name: "seikasan",
  roleLine: "ゲーム実装 / サウンド / シナリオ / 3D",
  heroSummary:
    "Unity と Siv3D を中心に、チーム制作の中で実装を主軸としながらサウンド、シナリオ、3D まで横断して担当しています。作品ごとに何を担当したかが短時間で伝わるように整理しています。",
  contactEmail: "your-mail@example.com"
} as const;

export const heroTechStack = ["Unity", "C#", "Siv3D", "C++", "Blender", "Studio One"] as const;

export const aboutLines = [
  {
    title: "主担当領域",
    text: "ゲーム実装を軸に、作品に応じてサウンド、シナリオ、3D まで担当しています。ゲームサウンド制作も行っており、詳細は音楽ページにまとめています。"
  },
  {
    title: "主に使う技術",
    text: "ゲーム開発は Unity と Siv3D が中心です。補助的に Blender、Studio One、GitHub を使って制作を進めています。"
  },
  {
    title: "展示・頒布実績",
    text: "文化祭展示とコミックマーケットでの展示・頒布を継続して行っています。学内制作だけでなく、外部展示を前提にした見せ方も意識しています。"
  }
] as const;

export const contactLinks = [
  {
    label: "GitHub",
    url: "https://github.com/seikasan"
  }
] as const;
