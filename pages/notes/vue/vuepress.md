---
title: VuePress 基础搭建
lang: zh-CN
date: 2019-08-09
sidebar: auto
---

# VuePress

## 关于

**VuePress** 是 尤大（`Vue.js` 框架作者）4月12日发布的一个基于 `Vue` 的静态网站生成器，实际上就是一个 `Vue` 的 `SPA` 应用，内置 `WebPack` 

[VuePress 官方文档](https://vuepress.vuejs.org/zh/guide/) [VuePress中文网](https://vuepress.docschina.org/)

## 优点

- 为技术文档而优化的 内置 **Markdown** 拓展
- 在 **Markdown** 文件中使用 Vue 组件的能力
- **Vue** 驱动的自定义主题系统
- 自动生成 **Service Worker**
- **Google Analytics** 集成
- 基于 **Git** 的 “最后更新时间”
- 多语言支持
- 默认主题包含：
    + 响应式布局
    + 可选的主页
    + 简洁的开箱即用的标题搜索
    + **Algolia** 搜索
    + 可自定义的导航栏 和侧边栏
    + 自动生成的 **GitHub** 链接和页面的编辑链接

## 开始

### 创建项目文件夹

``` bash
mkdir Blog
```

### 初始化项目

进入 `Blog`  文件夹, 使用 `npm` 或者 `yarn` 来进行项目初始化

``` bash
cd Blog
yarn init -y
```

### 安装 VuePress

可以全局进行安装, 这里推荐安装到当前项目, 方便后期维护

``` bash
# 安装到当前项目
yarn add vuepress
# 全局安装
yarn global add vuepress
```

### 创建 docs 文件夹

在 `Blog` 目录下 创建 `docs` 文件夹用来保存编写的 `Markdown` 文件 和 配置文件

``` bash
mkdir doc
```

### 创建 配置文件夹

进入 `doc` 目录下 创建 `.vuepress` 目录, 用来保存 `VuePress` 的相关配置文件

``` bash
mkdir .vuepress
```

### 创建 编写 配置文件

进入 `.vuepress` 目录, 创建 并 编写需要的配置项 `config.js`

``` bash
touch config.js
```

## 运行 和 编译

`VuePress` 为我们提供了两条命令:

- `vuepress dev <dirname>`: 启动本地服务器, 可进行实时的预览
- `vuepress build <dirname>`: 对项目进行打包编译成静态文件, 方便部署

为了方便使用我们可以将它们添加到 项目文件夹 根目录 下的 `package.json` 中

``` Json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

## 添加主页

借助于 VuePress 的能力, 我们可以为我们自己的网站轻松的添加一个类似 [VuePress中文网](https://vuepress.docschina.org/) 的主页

回到 之前新建的 `docs` 目录下, 创建 `README.md` 文件, 这个文件将作为我们网站的首页来显示

在 这个 `Markdown` 文件中输入以下内容, 即可得到 官方的首页样式

``` yaml
---
home: true
heroImage: /hero.png
actionText: 起步 →
actionLink: /guide/
features:
- title: 简明优先
  details: 对以 markdown 为中心的项目结构，做最简化的配置，帮助你专注于创作。
- title: Vue 驱动
  details: 享用 Vue + webpack 开发环境，在 markdown 中使用 Vue 组件，并通过 Vue 开发自定义主题。
- title: 性能高效
  details: VuePress 将每个页面生成为预渲染的静态 HTML，每个页面加载之后，然后作为单页面应用程序(SPA)运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

## 配置

### 全局配置

``` JavaScript
module.exports = {
    // 网站的标题。这将是所有页面标题的前缀，并显示在默认主题的导航栏中
    title: 'Mahome\'s Blog',
    // 首页标题下的描述, 编译后生成一个 <meta> 标签
    description: 'Welcome to my web blog',
    // 需要在 编译后的 HTML header 标签中 注入的内容
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }], 
    ],
    // 部署到 github 时的目录配置 
    // 发布到 https://<USERNAME>.github.io/<REPO>/ 时 则将 base 设置为 <REPO> 
    base: '/web_blog/', 
    // Markdown 渲染相关配置
	markdown: {
         // 代码块显示行号
		lineNumbers: true
    },
    // dev 模式下 WebServer 的端口号
    port: 8080,
    // 指定 vuepress build 的输出目录, 默认为 .vuepress/dist
    dest: '.vuepress/dist',
}
```

### 主题配置

更多配置项可参考 [VuePress 默认主题配置文档](https://vuepress.docschina.org/default-theme-config/)

> 在 `VuePress` 中 `/` 会被指向 `README.md` 所编译的 `HTML` 文件

``` JavaScript
module.export = {
    ...
    themeConfig: {
         // 文档更新时间：每个文件git最后提交的时间, 值将会作为前缀显示
        lastUpdated: 'Last Updated',
        // 禁用导航栏 也可以通过在 Markdown 文件的 YAML中使用 navbar: false 禁用指定页面的导航栏
        navbar: false,
        // 添加链接到导航栏
		nav: [
			{
				text: 'Notes', // 链接显示的文字
				link: '/Notes/' // 链接跳转到路径
            },
            // 如果你提供一个 items 的数组，这些链接也可以是下拉菜单, 并且可以进行多层嵌套
            {
                text: 'Languages',
                items: [
                  { text: 'Chinese', link: '/language/chinese' },
                  { text: 'Japanese', items: [/*  */] }
                ]
            }
        ],
        // 侧边栏自动显示当前页面中标题的链接的深度, 1 为 提取 h2, 2 为 提取 h2, h3
		sidebarDepth: 2,
		sidebar:  {
			'/Notes/': [
				'', // 最终会渲染成 README.md 中 YAML 的 title
				'VuePress'
			],
			'/Diaries/': [
				'',
				'20190809',
			]
		}
	}
}
```
