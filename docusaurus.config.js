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
          href: "/docs/manual/",
          position: 'left',
          label: 'User Manual',
        },
        {
          href: "/docs/",
          position: 'left',
          label: 'Developer Center',
        },
        {
          href: "/docs/faq/",
          position: 'left',
          label: 'Questions and Answers',
        },
        {
          href: "/docs/known-issues/",
          position: 'left',
          label: 'Known Issues',
        },
        {
          href: '/docs/changelogs',
          position: 'left',
          label: 'Changelogs',
        },
        {
          href: "/docs/reporting-a-problem",
          position: 'left',
          label: 'Report a Problem',
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
              href: "/docs/manual/custom-items"
            },
            {
              label: "Viewing Statistical Data",
              href: "/docs/manual/accessing-historical-data"
            },
            {
              label: "Importing Item Strings",
              href: "/docs/manual/importing-items"
            },
            {
              label: "Creating Item Packs",
              href: "/docs/manual/creating-item-packs"
            },
            {
              label: "Troubleshooting",
              href: "/docs/manual/troubleshooting"
            },
            {
              label: "FAQ",
              href: "/docs/faq"
            },
          ]
        },
        {
          title: 'For Developers',
          items: [
            {
              label: 'Getting Started Guide',
              to: '/docs/getting-started',
            },
            {
              label: 'Item Database Schema',
              to: '/docs/item-database',
            },
            {
              label: 'Localization System',
              to: '/docs/localization',
            },
            {
              label: 'Quality Assurance',
              to: '/docs/quality-assurance',
            },
            {
              label: 'API Reference',
              to: '/docs/api-reference',
            },
            {
              label: 'Tools',
              to: '/docs/tools',
            },
          ],
        },
        {
          title: 'Community Hubs',
          items: [
            {
              label: 'CurseForge',
              href: 'https://www.curseforge.com/wow/addons/rarity',
            },
            {
              label: 'WowAce',
              href: 'https://www.wowace.com/projects/rarity',
            },
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
        {
          title: 'Support Us',
          items: [
            {
              label: 'Read This First',
              href: '/docs/about-donations',
            },
            {
              label: 'Patreon',
              href: 'https://www.patreon.com/RDevW',
            },
            {
              label: 'PayPal',
              href: 'https://www.paypal.com/donate?hosted_button_id=3798L8QNTARJ6',
            },
          ],
        },
      ],
      copyright: `<small>Copyright © 2011-${new Date().getFullYear()} Rarity Development Team and contributors.</small>`,
    },
    colorMode: {
      disableSwitch: true,
      respectPrefersColorScheme: false,
      defaultMode: 'dark'
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['lua'],
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
