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
      { text: '首页', link: '/' },
      { text: '季节系统', link: '/seasons/#' }
    ],

    search: {
      provider: 'local'
    },
    
    sidebar: [
      {
        text: '服务器详情',
        items: [
          { text: 'Work In Progress', link: '#' },
        ]
      },
      {
        text: 'RealisticSeasons',
        items: [
          { text: '季节系统', link: '/seasons/#' },
        ]
      },
      {
        text: '写作格式示例',
        items: [
          { text: 'Markdown', link: '/markdown-examples' },
          { text: 'Runtime API', link: '/api-examples' }
        ]
      }
    ],

    outline: [2, 3],

    logo: {
      src: '/icon.svg'
    },


    //editLink: {
      //pattern: 'https://github.com/brenoepics/vitepress-carbon/edit/main/demo/src/:path',
      //text: 'Edit this page on GitHub'
    //},

    lastUpdated: {
      formatOptions: { dateStyle: 'short', timeStyle: 'short' }
    },

    //socialLinks: [
      //{ icon: 'github', link: 'https://github.com/brenoepics/vitepress-carbon' }
    //]

    footer: {
      message: `Join our <a href="https://qm.qq.com/q/puJ6VONMSQ">QQ-Group</a> | 点击 <a href="https://qm.qq.com/q/puJ6VONMSQ">此处</a> 加入我们的QQ群 `,
      copyright:
        'Copyright © 2024 <a href="https://github.com/RainyHallways">RainyHallways/雨廊</a> & 砚花庭(IFC) 服务器,All Rights Reserved.',
    },
  }
})
