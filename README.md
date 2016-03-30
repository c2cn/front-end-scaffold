# 前端脚手架项目
致力于帮助快速开发高质量前端项目!

## 如何快速
* 做项目前：生成项目结构。命令类似 `yo front-end-scaffold 一些选项`
* 做项目时
	* 新建一个页面/模块。创建页面/模块所需的资源，并引入。命令类似 `gulp create-page page-a 一些选项`。会生成`page-a.html`以及`page-a.js`等所需资源。 (TODO)
	* 项目依赖的技术(jQuery之类)的文档导航页 -> 能快速查找文档
	* 该项目的UI的使用Demo页 (TODO)
	* IDE中适用的该项目的一些代码片段(如 Sublime 的 Snippets ) -> 快速生代码 (TODO)
	* Ajax接口的模拟的快速生成 (TODO)
	* 切图：使用PS的拓展，一键切图工具[cutterman](http://www.cutterman.cn/cutterman/feature)
	* 图片精灵: Compass支持自动生成图片精灵
* 项目上线前
	* 对资源进行压缩，合并等。命令类似 `gulp build`

## 如何高质量
* 依赖的第三方插件会用固定版本。
* 代码规范,以及对其的验证(jsHint之类) (TODO)
* 测试，持续集成 (TODO)

## 启动项目
1. 安装 [Node.js](https://nodejs.org/en/)
1. 打开命令行窗口
1. `cd 项目路径`
1. 安装依赖: `npm install`。（如果是开发，需要安装 Sass 和 Compass）
1. `npm run start:server`。


## 任务
* 构建: `npm run build`。该命令做了以下几件事
	* 删除 dist
	* 将 ES6 代码编译成 ES5 代码，合并（如果有需要的话），并压缩。用 Webpack + Babel 来实现的。
	* 将 Sass 代码编译成 CSS 代码，并压缩。用 Compass 来实现。
	* 将 src 目录下的除了 ES6 和 Sass 代码外的其他代码都移动到 dist 目录下。
* 运行: `npm run start`。该命令做了以下几件事
	* 启动静态服务器
	* 监视 Sass 文件的变化。变化时，编译生成 CSS。
	* 监视 ES6 文件的变化。变化时，编译生成 ES5 的 JS。

## 使用的技术
* 任务管理(Task Runners)
	* Gulp
* CSS 预编译(CSS Preprocessor)
	* [Sass](http://sass-lang.com/)
	* [Compass](http://compass-style.org/) 基于Sass的框架
* CSS
	* [kitecss](http://hiloki.github.io/kitecss/) 灵活的CSS布局框架。基于`display:inline-block`
	* [debugCSS](https://github.com/yahoo/debugCSS) 对HTML的验证
	* [Font Awesome](http://fortawesome.github.io/Font-Awesome/) 图标字体


## 本项目相关帮助文档
* [Sass官网](http://sass-lang.com/) 世界上最成熟，稳定强大的专业的CSS拓展语言
* [Compass](http://compass-style.org/) 基于Sass的框架
* [Gulp 入门指南](https://github.com/nimojs/gulp-book)
* [kitecss](http://hiloki.github.io/kitecss/) 灵活的CSS布局框架


## 参考
* [BEM](https://en.bem.info/)
* [移动开发规范概述](http://alloyteam.github.io/Spirit/modules/Standard/index.html)
* [tooling](https://github.com/egoist/tooling)
* [Why I Left Gulp and Grunt for npm Scripts](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.n8tjc2j5e) [中文版](http://www.infoq.com/cn/news/2016/02/gulp-grunt-npm-scripts-part2)
* [react-slingshot](https://github.com/coryhouse/react-slingshot/blob/master/package.json)
* [npm-scripts-demo](https://github.com/revolution-messaging/npm-scripts-demo)

