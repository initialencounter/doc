import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '航海日志',
  tagline: 'A docs website of Initialencounter',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://doc.initencunter.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'initialencounter', // Usually your GitHub org/user name.
  projectName: 'doc', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        indexDocs: true,
        indexBlog: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: 'blog',
        
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '首页',
      logo: {
        alt: '首页',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '文档大杂烩',
        },
        {to: '/docs/tutorial/SUMMARY', label: '教程', position: 'left'},
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/initialencounter/doc',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '帮助文档首页',
              to: '/docs/intro',
            },
            {to: '/docs/tutorial/SUMMARY', label: '教程'},
            {
              label: '博客',
              to: '/blog',
            },
          ],
        },
        {
          title: '联系我',
          items: [
            {
              label: 'b站',
              href: 'https://space.bilibili.com/225995995',
            },
            {
              label: 'Telegram 频道',
              href: 'https://t.me/obstorm',
            }
          ],
        },
        {
          title: '友链',
          items: [
            {
              label: '音铃的博客',
              href: 'https://blog.twiyin0.cn',
            },
            {
              label: 'vlssu公益服',
              href: 'https://vlssu.cn',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} initialencouter, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
