// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Yuanji's Wiki",
  tagline: "Dinosaurs are cool",
  url: "https://yuanji.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "masakichi", // Usually your GitHub org/user name.
  projectName: "wiki", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/masakichi/wiki/tree/main/",
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Yuanji's Wiki",
        logo: {
          alt: "Yuanji's Wiki Logo",
          src: "img/logo.svg",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "resource",
          //   position: "left",
          //   label: "Tutorial",
          // },
          {
            href: "https://github.com/masakichi/wiki",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            label: "Blog",
            href: "https://blog.gimo.me",
          },
          {
            label: "Douban",
            href: "https://www.douban.com/people/masakichi",
          },
          {
            label: "Twitter",
            href: "https://twitter.com/gimo_me",
          },
          {
            label: "Telegram",
            href: "https://t.me/yuanji",
          },
          {
            label: "Email",
            href: "mailto:self@gimo.me",
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yuanji All Rights Resarved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
