# NodeJS

## day1-1

### 介绍
谢进荣      广西    老谢  laoxie

### 三阶段课程介绍
* 9周
    * 第1周：nodeJS
    * 第2~4周：Vue.js
    * 第5~6周：React.js
    * 第7周：混合开发
    * 第8周：小程序 
    * 第9周：就业周

    * 三阶段：
        * 今日事，今日毕（时间->效率）
        * 留级：超过3次（心里暗示：）
            * 三阶段不允许留级

* 困难：
    * 知难而进
    * 坚持就是胜利
    * 拼搏到无能为力、坚持到感动自己

* 三阶段怎么学习：
    * 记笔记：课堂笔记->整理->梳理大纲（xmind思维导图，脑图）
    * [写文章：]
    * 写代码：能动手千万别BB
        * 每天500行+
    * 做项目
        * 
    * 查文档（30s）
        * 技术文档（课堂笔记、文章、搜索引擎）
        * 需求文档

* 如何对待视频：
    * 

### 知识点

* 服务端与客户端
    * 服务端：服务器（一台7*24小时开机的电脑）
    * 客户端：用户端（一台个人电脑）

* 模块化开发
    * 利用第三方框架：require.js(AMD规范),sea.js(CMD规范)
    * NodeJS：commonJS规范
    * ES6 ： ES Module 规范


### 复习
* ES6前如何实现模块化开发：利用第三方框架（require.js:AMD, sea.js，异步）
    * require(['jquery'],($)=>{
        console.log($)
    })
    
* ES6：ES Module
    import $ from 'jquery'
* Node:commonJS
    * let $ = require('jquery');//必须符合commonjs的规范
    console.log($)

### 知识点
* 路由：根据url地址的不同响应不同的内容
* express: 

* fs: file system

## day1-2

### 复习NodeJS

1. 模块坏开发
        规范          框架             异同
    * AMD           require.js      异步（预加载）
    * CMD           sea.js          异步（延迟加载）
    * CommonJS      nodejs          同步（后端）
    * ES Module     es6             同步（前端）

2. 模块分类
    * 自定义模块
    * 内置模块
        * http
        * url
        * querystring
        * path
        * fs
    * 第三方模块
    * 文件模块（json）

    ```html
        http://www.laoxie.com?username=laoxie&password=123
        F:/xxx/xxx
    ```

3. 操作
    * 引入 require()
    * 导出 
        * exports.xxx = {}
        * module.exports = {}

4. 练习
    * 静态资源服务


* 什么是h5：大前端（全栈，全端）
    * 前端：html+css+js 
    * 后端：php+mySQL,nodeJS+MongoDB

### 类比能力
* 用熟悉的东西理解陌生的东西
* 三段论
    * 给你一个条件
    * 给你一个问题
    * 根据条件得出问题的答案


### 知识点
* fs
    * stream
    * pipe

    ```js
        let gulp = require('gulp');
        gulp.task('build',()=>{
            gulp.src('./src/js/*.js')  //得到一个文件流（stream，液体）
            .pipe(concat())
            .pipe(uglify())
            .pipe(gulp.dist('..'))
        })
    ```  

## day1-3

### 复习
* stream（读取流&写入流）
    * pipe()
    * 事件
        * data
        * end
        * finish
        * error
* 压缩解压
    * zlib
        * zlib.createGzip()
        * zlib.createGunzip()
    * tar
* express
    * 静态资源服务器

* request（stream）
    * request.on('data')


### 知识点
* 中间件（就是一个函数）
    * 内置中间件
        * express.static()
        ```js
            let express = function(){}

            express.static = function(){
                return function(){

                }
            }

            express.static();//=> Function
        ```
    * 参数
        * functino(request,response,next){}
* 使用中间件
    * xxx.use([path],...middleware)
* 扩展运算符

* 接口测试工具：postman
* 如何解决所有接口写到server.js中的问题
    * 维护/开发是否方便
    * 模块化开发
    
### 数据接口
* 后台管理系统
    * 商品
        * 获取所有商品
        * 获取单个商品
        * 修改商品
        * 删除商品
        * 添加商品

    * 接口规范：RESTful
        * 根据路径实现不同接口
        * 根据请求类型实现不同接口（get,post,put,delete）

    * 上传
    ```html

        <form action="api" method="post"> -> ajax
    ```

* html5新特性
    * 语义化标签
    * 新的表单类型
    * svg
    * web storage
    * formData


## day6-4

### 复习
* express
    * 内置中间件
        * express.static('./',{maxAge})
        * express.json()                        body-parser
        * express.urlencoded({})
    * 第三方中间件
        * multer

    * 模块化路由（RESTful）
        * express.Router()
        * 商品
            * 增        post
            * 删        delete
            * 改        put
            * 查        get
            * 预请求    options
        * 商品分类
            * 手机
            * 电脑
            * 配件

            * 增        post
            * 删        delete
            * 改        put
            * 查        get
            * 预请求    options


### 知识点
* 爬虫
    * 分析html结构（重点）
    * 正则表达式

* 页面渲染
    * 前后端分离（客户端渲染：BSR）
    * 前后端不分离（服务端渲染：SSR）
        * 防扒：防止数据太过于容易被别人窃取
        * SEO：搜索引擎优化
            * 搜索引擎就是一个大大的爬虫


* 跨域解决方案
    * jsonp 
        * 前端：script -> 传递回掉函数名 -> ?callback=getData
        * 后端：返回js代码-> 回掉函数执行的js代码 -> getData(xxxx)
    * CORS
        * 真正ajax请求跨域
        * 后端：允许跨域
            * Access-Controll-Allow-Origin:'*'
                * 一个域名
                * 通配符
            * Access-Controll-Allow-Methods:'get,post'
                * 多个请求类型
            * Access-Controll-Allow-Headers:
                * 发送请求头
                * token: 具有有效期的加密字符串
    * 服务器代理
        * 后端无跨域限制
        * 


    * hard code

    * 服务器主动推送
        * websocket
            * 前端
            * 后端
        * ajax轮询
            setInterval(()=>{

            },5000)


## day6-5

### 复习
* 跨域解决方案
    * jsonp
        * 原理
        * 前端：用script标签请求api并发送回掉函数名
        * 后端：接收回掉函数名并响应函数执行的代码
    * CORS 跨域资源共享
        * 服务允许跨域
            * 响应头
        * 真正的ajax请求
    * 代理proxy
        * 有接口但无权限访问
        * 利用后端无跨域限制来实现效果
    * 无接口无权限 
        * 爬虫
        * BSR & SSR(SEO,响应速度)

* websocket （HTML5新特性）
    * 服务端
    * 客户端

* http：短连接
    * http/https
* websocket：长连接
    * ws
