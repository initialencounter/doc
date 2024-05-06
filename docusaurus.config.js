// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '航海日志',
  tagline: 'A docs website of Initialencounter',
  url: 'https://doc.initencunter.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Github/Initialencounter', // Usually your GitHub org/user name.
  projectName: 'DocsOfWMD', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
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
        translations: {
            "search_placeholder": "搜索",
            "see_all_results": "查看所有结果",
            "no_results": "没有结果。",
            "search_results_for": "搜索结果\"{{ keyword }}\" ",
            "search_the_documentation": "搜索文档",
            "count_documents_found": "{{ count }} 个文档找到",
            "count_documents_found_plural": " {{ count }} 个文件找到",
            "no_documents_were_found": "没有找到文件"
        }
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
