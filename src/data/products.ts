export type Product = {
    title: string;
    description: string;
    price: string;
    href: string;
    badge: string;
    features: string[];
    recommendedFor: string;
  };
  
  export const products: Product[] = [
    {
      title: "入門版｜Next.js CRUD体験キット 学習ログ管理アプリ編",
      description:
        "Next.js / TypeScript / Tailwind CSS / Prisma / SQLiteで作られた、学習ログ管理アプリの入門版テンプレートです。登録・表示・編集・削除のCRUDを体験できます。",
      price: "980円",
      href: "https://portfolio.booth.pm/items/8482638",
      badge: "まず試したい人向け",
      features: [
        "学習ログの登録",
        "学習ログの一覧表示",
        "学習ログの編集・削除",
        "カテゴリ絞り込み",
        "簡易ダッシュボード",
      ],
      recommendedFor:
        "Next.jsで小さなCRUDアプリを動かしてみたい人、ポートフォリオ制作の入口を作りたい人におすすめです。",
    },
    {
      title: "完成版｜Next.js 学習・転職準備管理アプリテンプレート CareerLog Lite",
      description:
        "学習ログだけでなく、転職準備タスク、スキル管理、プロフィール編集、ポートフォリオ表示ページ、READMEメモ管理まで含めた完成版テンプレートです。",
      price: "2,980円",
      href: "https://portfolio.booth.pm/items/8481340",
      badge: "本格的に作りたい人向け",
      features: [
        "学習ログ管理",
        "転職準備タスク管理",
        "スキル管理",
        "プロフィール編集",
        "ポートフォリオ表示ページ",
        "READMEメモ管理",
      ],
      recommendedFor:
        "転職準備に使える形のアプリテンプレートを参考にしたい人、自分用にカスタムしてポートフォリオ化したい人におすすめです。",
    },
  ];