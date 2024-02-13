import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/commerce-sync-docs/',
  title: "Commerce Sync Docs",
  description: "A Projektünk dokumentációs oldala",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Kezdőlap', link: '/' },
      { text: 'Dokumentáció', link: '/dokumentacio' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'A projektről', link: '/a-projektrol' },
          { text: 'Dokumentáció', link: '/dokumentacio' },
          { text: 'Installás', link: '/installalas' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/2023e-vp-vizsgaremek/e-commerce/' }
    ]
  }
})
