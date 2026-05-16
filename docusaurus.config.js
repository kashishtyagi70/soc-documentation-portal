// @ts-check

// Import syntax highlighting themes
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {

  // ================================
  // WEBSITE BASIC INFORMATION
  // ================================

  title: 'Cybrovate Documentation Portal',

  tagline:
    'Detection Engineering • Threat Hunting • Incident Response',

  // Website favicon
  favicon: 'images/download.jpg',

  // ================================
  // WEBSITE URL SETTINGS
  // ================================

  // Your website URL
  url: 'http://192.168.1.19:3000',

  // Base URL path
  baseUrl: '/',

  // ================================
  // GITHUB / PROJECT SETTINGS
  // ================================

  organizationName: 'cybrovate',

  projectName: 'soc-docs',

  // ================================
  // ERROR HANDLING
  // ================================

  onBrokenLinks: 'throw',

  // ================================
  // LANGUAGE SETTINGS
  // ================================

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // ================================
  // PRESETS CONFIGURATION
  // ================================

  presets: [
    [
      'classic',
      ({
        // ================================
        // DOCUMENTATION SETTINGS
        // ================================

        docs: {

          // Sidebar file location
          sidebarPath: './sidebars.js',
        },

        // ================================
        // BLOG SETTINGS
        // ================================

        // Disable blog completely
        blog: false,

        // ================================
        // CUSTOM CSS SETTINGS
        // ================================

        theme: {

          // Custom theme CSS file
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // ================================
  // THEME CONFIGURATION
  // ================================

  themeConfig:
    ({

      // Social sharing image
      image: 'img/docusaurus-social-card.jpg',

      // ================================
      // DARK MODE SETTINGS
      // ================================

      colorMode: {

        // Default theme mode
        defaultMode: 'dark',

        // Allow user to switch themes
        disableSwitch: false,

        // Use system dark/light preference
        respectPrefersColorScheme: true,
      },

      // ================================
      // NAVBAR SETTINGS
      // ================================

      navbar: {

        // Navbar title
        title: 'Cybrovate Documentation',

        // ================================
        // NAVBAR LOGO
        // ================================

        logo: {

          // Alt text for accessibility

          // Logo file location
          src: 'images/download.jpg',
        },

        // ================================
        // NAVBAR ITEMS
        // ================================

        items: [

          // Documentation sidebar button
          {
            type: 'docSidebar',

            sidebarId: 'tutorialSidebar',

            position: 'left',

            label: 'Documentation',
          },

          // External website button
          {
            href: 'https://www.cybrovate.com/',

            label: 'Cybrovate',

            position: 'right',
          },
        ],
      },

      // ================================
      // FOOTER SETTINGS
      // ================================

     footer: {
  style: 'dark',

  links: [
    {
      title: 'Documentation',
      items: [
        {
          label: '📘 SOC Docs',
          to: '/docs/custom-soc-page',
        },
      ],
    },

    {
      title: 'Community',
      items: [
        {
          label: '🌐 Website',
          href: 'https://www.cybrovate.com/',
        },
      ],
    },

    {
      title: 'Security',
      items: [
        {
          label: '🛡️ Threat Hunting',
          to: '/docs/threat-hunting',
        },
      ],
    },
  ],
},

      // ================================
      // CODE BLOCK THEMES
      // ================================

      prism: {

        // Light mode code theme
        theme: prismThemes.github,

        // Dark mode code theme
        darkTheme: prismThemes.dracula,
      },
    }),
};

// Export configuration
export default config;