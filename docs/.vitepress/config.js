import { readFileSync } from 'fs'
import { resolve } from 'path'

const data = JSON.parse(readFileSync(resolve(__dirname, '../../data/projects.json'), 'utf-8'))

export default {
  title: '纪年',
  description: '开源项目展示',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]],

  themeConfig: {
    nav: [
      { text: '后台管理', link: '/admin/' }
    ]
  },

  // Pass data to pages via global computed
  vite: {
    define: {
      __PROJECTS__: JSON.stringify(data.projects),
      __SITE_INFO__: JSON.stringify(data.siteInfo)
    }
  }
}
