import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  lang: 'zh-CN',
  title: "砚花庭:JE 插件使用文档",
  description: "砚花庭:JE-1.21.1 服务器插件使用文档",
  srcDir: 'src',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  //base: '/vitepress-carbon-template/', if running on github-pages, set repository name here

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    search: {
      provider: 'local'
    },
    
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    outline: [2, 3],

    logo: {
      src: '/icon.svg'
    },


    editLink: {
      pattern: 'https://github.com/brenoepics/vitepress-carbon/edit/main/demo/src/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      formatOptions: { dateStyle: 'short', timeStyle: 'short' }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/brenoepics/vitepress-carbon' }
    ]
  }
})
