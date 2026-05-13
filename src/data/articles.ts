export type Article = {
    title: string;
    description: string;
    slug: string;
    href: string;
    tag: string;
    publishedAt: string;
    updatedAt: string;
    readingTime: string;
    image: string;
    keywords: string[];
  };
  
  export const articles: Article[] = [
    {
      title:
        "未経験・実務浅め向け｜Web系転職完全ロードマップ【学習・ポートフォリオ・応募戦略】",
      description:
        "未経験・実務浅めからWeb系エンジニア転職を目指す人向けに、HTML/CSS/JavaScript、React、TypeScript、API、DB、ポートフォリオ、GitHub、README、応募、面接対策までの流れを解説します。",
      slug: "web-career-roadmap",
      href: "/articles/web-career-roadmap",
      tag: "ロードマップ",
      publishedAt: "2026-05-12",
      updatedAt: "2026-05-12",
      readingTime: "9分",
      image: "/ogp.png",
      keywords: [
        "未経験 Web系エンジニア 転職 ロードマップ",
        "実務浅め Web系転職",
        "Web系転職 学習ロードマップ",
        "エンジニア転職 ポートフォリオ",
        "React TypeScript 転職",
      ],
    },
    {
      title:
        "未経験・実務浅めがWeb系エンジニアに転職するには？まず知っておくべき現実と準備",
      description:
        "未経験・実務浅めからWeb系エンジニアを目指す人向けに、転職の現実、必要なスキル、作るべきポートフォリオを解説します。",
      slug: "web-engineer-career-reality",
      href: "/articles/web-engineer-career-reality",
      tag: "転職準備",
      publishedAt: "2026-05-12",
      updatedAt: "2026-05-12",
      readingTime: "7分",
      image: "/ogp.png",
      keywords: [
        "未経験 Web系エンジニア 転職",
        "実務浅め エンジニア 転職",
        "Web系転職 準備",
        "Web系エンジニア ポートフォリオ",
        "未経験エンジニア 必要スキル",
      ],
    },
    {
      title:
        "Web系転職ポートフォリオ作成チェックリスト｜未経験・実務浅めが作る前に確認すべきこと",
      description:
        "Web系エンジニア転職を目指す未経験・実務浅めの人向けに、ポートフォリオ作成前に確認すべき目的、機能、DB、デプロイ、GitHub、README、面接対策を解説します。",
      slug: "portfolio-checklist",
      href: "/articles/portfolio-checklist",
      tag: "ポートフォリオ",
      publishedAt: "2026-05-12",
      updatedAt: "2026-05-12",
      readingTime: "8分",
      image: "/ogp.png",
      keywords: [
        "Web系転職 ポートフォリオ チェックリスト",
        "未経験エンジニア ポートフォリオ",
        "実務浅め エンジニア ポートフォリオ",
        "ポートフォリオ README 書き方",
        "エンジニア転職 GitHub",
      ],
    },
    {
      title:
        "未経験・実務浅め向け｜Web系転職で評価されるポートフォリオ設計テンプレート",
      description:
        "未経験・実務浅めからWeb系転職を目指す人向けに、評価されやすいポートフォリオの設計テンプレート、README例、面接での説明テンプレートを紹介します。",
      slug: "portfolio-design-template",
      href: "/articles/portfolio-design-template",
      tag: "設計テンプレート",
      publishedAt: "2026-05-12",
      updatedAt: "2026-05-12",
      readingTime: "9分",
      image: "/ogp.png",
      keywords: [
        "Web系転職 ポートフォリオ 設計",
        "ポートフォリオ 設計テンプレート",
        "未経験エンジニア README",
        "エンジニア転職 面接 ポートフォリオ",
        "Webアプリ ポートフォリオ 作り方",
      ],
    },
    {
      title:
        "Web系転職ポートフォリオ完全設計例｜未経験・実務浅めにおすすめのアプリ案5選",
      description:
        "未経験・実務浅めのWeb系転職向けに、学習記録アプリ、掲示板アプリ、レビュー投稿アプリ、予約管理アプリ、ポートフォリオ投稿サービスの設計例を紹介します。",
      slug: "portfolio-ideas",
      href: "/articles/portfolio-ideas",
      tag: "アプリ案",
      publishedAt: "2026-05-12",
      updatedAt: "2026-05-12",
      readingTime: "9分",
      image: "/ogp.png",
      keywords: [
        "Web系転職 ポートフォリオ 例",
        "未経験エンジニア ポートフォリオ 案",
        "ポートフォリオ アプリ案",
        "Webアプリ ポートフォリオ 例",
        "実務浅め エンジニア ポートフォリオ",
      ],
    },
    {
      title: "未経験エンジニア転職、ポートフォリオなしは厳しい",
      description:
        "未経験・実務浅めからWeb系エンジニア転職を目指すなら、なぜポートフォリオが重要なのか。職務経歴だけでは伝わりにくい実装力をどう見せるかを解説します。",
      slug: "no-portfolio-hard",
      href: "/articles/no-portfolio-hard",
      tag: "ポートフォリオ",
      publishedAt: "2026-05-10",
      updatedAt: "2026-05-10",
      readingTime: "5分",
      image: "/ogp.png",
      keywords: [
        "未経験エンジニア 転職",
        "ポートフォリオ なし 厳しい",
        "Web系転職 ポートフォリオ",
        "SES Web系転職",
        "エンジニア ポートフォリオ 作り方",
      ],
    },
  ];
  
  export const featuredArticles = articles.slice(0, 3);
  
  export const getArticleBySlug = (slug: string): Article | undefined => {
    return articles.find((article) => article.slug === slug);
  };