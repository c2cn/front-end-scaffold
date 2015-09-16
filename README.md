# 前端脚手架项目
快速轻松开发前端!

## 启动项目
1. 安装 [Node.js](https://nodejs.org/en/)
1. 打开命令行窗口
1. `cd 项目路径`
1. 安装依赖: `npm install`
1. 安装gulp: `npm install -g gulp`
1. 启动: `gulp f5` 会自动在默认浏览器中打开导航页

## 任务
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

## 其他说明
* 为了项目的稳定性，依赖的第三方插件会定版本。

## 本项目相关帮助文档
* [Sass官网](http://sass-lang.com/) 世界上最成熟，稳定强大的专业的CSS拓展语言
* [Compass](http://compass-style.org/) 基于Sass的框架
* [Gulp 入门指南](https://github.com/nimojs/gulp-book)
* [kitecss](http://hiloki.github.io/kitecss/) 灵活的CSS布局框架



## 参考
* [BEM](https://en.bem.info/)
* [移动开发规范概述](http://alloyteam.github.io/Spirit/modules/Standard/index.html)

