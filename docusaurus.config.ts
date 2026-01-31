import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: "Amazonas DataHub",
  tagline: "Dados do estado do Amazonas para aplicar Deep Learning",
  // favicon: "img/favicon.ico",
  favicon: "img/logo_amazonasdatahub.png",

  // Set the production url of your site here
  // url: "https://your-docusaurus-site.example.com",
  url: "https://github.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: "/",
  baseUrl: "/amazonasdatahubsite",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "onelsoncarvalho", // Usually your GitHub org/user name.
  projectName: "amazonasdatahubsite", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br", "en"],
  },

  plugins: [
    tailwindPlugin,
    // Google Analytics Plugin
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-V8XCSGBSKS',
        anonymizeIP: true,
      },
    ],

  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },

        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
        },
      },
      } satisfies Preset.Options,
    ],
    // [
    // '@docusaurus/preset-classic',
    // {
    //   gtag: {
    //     trackingID: 'G-V8XCSGBSKS',
    //     anonymizeIP: true,
    //   },
    // },
    // ],


  ],

  themeConfig: {
    metadata: [
      {name: 'google-site-verification', content: '6MCkcHoAPuxo8EpKWzrPaHT6cjxvbXF0wBjIIebps74' }
    ],
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Amazonas DataHub",
      logo: {
        alt: "Logo do Amazonas DataHub",
        src: "img/logo_amazonasdatahub.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentação",
        },
        {
          type: "localeDropdown",
          position: "right"
        },
        //{
        //  type: "search",
        //  position: "right",
        //},
        {
          href: "https://github.com/onelsoncarvalho/amazonasdatahub",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["r"]
    },

    //algolia: {
    //  appId: "0CMHNGVUX0",
    //  apiKey: "fb8a8bf7f10a789e5c28ae7be4f70512",
    //  indexName: "test_index",
    //},
  } satisfies Preset.ThemeConfig,
};

export default config;
