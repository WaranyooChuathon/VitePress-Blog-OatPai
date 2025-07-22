import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OatPaiBlog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {text: 'error', link: '/Error/vercel-deploy-permision'},
      {text: ' test', link: '/test'},
    ],

 sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/markdown-examples': [
        {
          text: 'Examples',
          collapsed: true,
          items: [
            { text: 'Index', link: '/markdown-examples' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `config` directory.
      '/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ],
            
      
      '/test': [
        {
        text: 'Level 1',
        items: [
          {
            text: 'Level 2',
            items: [
              {
                text: 'Level 3',
                items: [
                  { text: 'Level 4', link: '/test' },
                  { text: 'Level 4', link: '/test' }
                ]
              }
            ]
          }
        ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
