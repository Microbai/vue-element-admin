/*
 * @Description: Vuepress的配置文件
 * @Author: Erich
 * @Date: 2020-09-10 02:30:24
 * @LastEditors: Erich
 * @LastEditTime: 2020-09-10 08:24:52
 */
module.exports = {
  // 标题
  title:'天谷云中文文档',
  // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
  repo: 'vuejs/vuepress',
  // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
  // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
  repoLabel: '查看源码',
 
  // 以下为可选的编辑链接选项
 
  // 假如你的文档仓库和项目本身不在一个仓库：
  docsRepo: 'vuejs/vuepress',
  // 假如文档不是放在仓库的根目录下：
  docsDir: 'docs',
  // 假如文档放在一个特定的分支下：
  docsBranch: 'master',
  // 默认是 false, 设置为 true 来启用
  editLinks: true,
  // 默认为 "Edit this page"
  editLinkText: '帮助我们改善此页面！',
  // 自定义head标签内容，加入自定义favicon.ico
  head: [
    ['link', { rel: 'icon', href: '/assets/img//favicon.ico' }]
  ],
  // 默认主题设置
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/frontend/' },
      { text: '后端', link: '/backend' },
      { text: '设计思路', link: '/ideal' },
      { text: '关于我', link: '/about' },  
    ],
    sidebar: 'auto',
    smoothScroll: true
  }
}