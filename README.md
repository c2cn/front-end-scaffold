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
1. 安装依赖: `npm install`
1. 安装gulp: `npm install -g gulp`
1. 启动: `gulp f5` 会自动在默认浏览器中打开导航页

## 支持的任务
* `gulp build` 构建项目：将js,css文件进行压缩,并且生成sourcemap，其压缩后的文件和image，html文件一起移动到`dist`文件夹。
* `gulp f5` 启动一静态服务器，当`src`下的资源有变化，自动刷新浏览器


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

