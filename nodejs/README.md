## Node.js

客户端的JavaScript主要用来处理页面的交互，使用了ECMAScript核心语法以及浏览器提供的js引擎、操作DOM等。

服务端的Javascript主要用来处理数据的交互，比如操作数据库、操作文件等

Nodejs是一个在服务端可以解析和执行JavaScript代码的运行环境，或者说是一个运行时平台。能够脱离浏览器执行js代码，底层使用的chrome V8引擎


global对象和模块作用域
- exports：模块公开的接口。是一个指向module.exports的引用。只能返回要给object，不能返回其他数据类型
- module.exports: 用于模块向外开放属性/函数。初始值为一个空对象{}。可以单独定义使用
- require：用于从外部获取一个模块的接口，也就是模块的exports接口。要使用其他模块就得先用require加载这个模块

全局可用变量/函数/对象
- _dirname和_filename变量 表示当前文件的目录和绝对路径名
- 全局函数
- console对象
