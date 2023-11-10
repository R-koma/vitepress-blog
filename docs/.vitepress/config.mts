import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "ja",
  title: "Blog",
  description: "portfolio-blog",
  base: "/vitepress-blog/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [{ text: "Home", link: "https://portfolio-site-indol.vercel.app/" }],

    sidebar: [
      {
        items: [{ text: "ブログ記事一覧", link: "/posts/postList" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/R-koma" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Ryoma",
    },
  },
});
