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
        text: 'A Projekt dokumentációja',
        items: [
          { text: 'A Projektről', link: '/a-projektrol' },
          { text: 'Komponensek', link: '/komponensek' },
          { text: 'Dokumentáció', link: '/dokumentacio' },
          { text: 'Installás', link: '/installalas' }
        ]
        
      },
      {
        text: 'Fejlesztői naplók',
        items: [
          { text: 'Teszáry Péter', link: 'fejlesztoi-naplok/teszary-peter-fn' },
        ]
        
      },
      {
        text: 'Tesztelési naplók',
        items: [
          { text: 'Teszáry Péter', link: 'tesztelesi-naplok/teszary-peter-tn' },
        ]
        
      },
      {
        text: 'Letöltések',
        items: [
          { text: 'ProductBridge', link: 'https://github.com/2023e-vp-vizsgaremek/e-commerce/tree/master/Forr%C3%A1sk%C3%B3d/ProductBridge' },
          { text: 'WooSync', link: 'https://github.com/CommerceSync-Hub/WooSync' },
          { text: 'CommerceSync Theme', link: 'https://github.com/CommerceSync-Hub/eCommerce-Sync-Theme' },
          { text: 'Vizsgaremek Repo', link: 'https://github.com/2023e-vp-vizsgaremek/e-commerce/' },
        ]
        
      }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/2023e-vp-vizsgaremek/e-commerce/' }
    ]
  }
})
