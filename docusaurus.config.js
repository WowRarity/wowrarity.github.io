const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Rarity Docs',
  tagline: '',
  url: 'https://wowrarity.github.io',
  baseUrl: '/',
  trailingSlash: true, // required for GitHub pages?
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/raritylogo_discordbg_9sP_icon.ico',
  organizationName: 'WowRarity',
  projectName: 'Documentation',
  themeConfig: {
    navbar: {
      title: 'Rarity Docs',
      logo: {
        alt: 'Rarity Logo',
        src: 'img/RarityLogo_DiscordBG.png',
      },
      items: [
        {
          href: "/manual/",
          position: 'left',
          label: 'User Manual',
        },
        {
          href: "/docs/",
          position: 'left',
          label: 'Developer Center',
        },
        {
          href: "/faq/",
          position: 'left',
          label: 'Questions and Answers',
        },
        {
          label: 'Discord',
          href: 'https://discord.gg/sQ3UqtSh6m',
          position: 'right',
        },
        {
          href: 'https://github.com/WowRarity/Rarity',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: "For Players",
          items: [
            {
              label: "Adding Custom Items",
              href: "/manual/custom-items"
            },
            {
              label: "Viewing Statistical Data",
              href: "/manual/accessing-historical-data"
            },
            {
              label: "Importing Item Strings",
              href: "/manual/importing-items"
            },
            {
              label: "Creating Item Packs",
              href: "/manual/creating-item-packs"
            },
            {
              label: "Troubleshooting",
              href: "/manual/troubleshooting"
            },
            {
              label: "FAQ",
              href: "/faq"
            },
          ]
        },
        {
          title: 'For Developers',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'API Reference',
              to: '/docs/api-reference',
            },
            {
              label: 'Item Database',
              to: '/docs/item-database',
            },
            {
              label: 'Quality Assurance',
              to: '/docs/quality-assurance',
            },
            {
              label: 'Localization',
              to: '/docs/localization',
            },
            {
              label: 'Tools',
              to: '/tools',
            },
          ],
        },
        {
          title: 'Project Site',
          items: [
            {
              label: 'CurseForge',
              href: 'https://www.curseforge.com/wow/addons/rarity',
            },
            {
              label: 'WowAce',
              href: 'https://www.wowace.com/projects/rarity',
            },
          ],
        },
        {
          title: 'Community Hubs',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/sQ3UqtSh6m',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/WowRarity/Rarity',
            },
          ],
        },
      ],
      copyright: `Copyright © 2011-${new Date().getFullYear()} Rarity Development Team and Contributors.`,
    },
    colorMode: {
      disableSwitch: true,
      respectPrefersColorScheme: false,
      defaultMode: 'dark'
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/WowRarity/Rarity/edit/main/docusaurus/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/WowRarity/Rarity/edit/main/docusaurus/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
