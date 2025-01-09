import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Nodelpers",
  tagline: "Write it once, use it everywhere",
  favicon: "img/favicon.ico",
  url: "https://karanBRAVO.github.io/",
  baseUrl: "/nodelpers/",
  organizationName: "karanBRAVO",
  projectName: "nodelpers",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/karanBRAVO/nodelpers",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: "img/nodelpers.png",
    navbar: {
      title: "Nodelpers",
      logo: {
        alt: "Nodelpers",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/karanBRAVO/nodelpers",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting started",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/nodelpers",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/nodelpers",
            },
            {
              label: "X",
              href: "https://x.com/nodelpers",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/karanBRAVO/nodelpers",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nodelpers.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
