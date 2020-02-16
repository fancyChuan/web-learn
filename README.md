# web-learn
前端技术学习


#### 模块化编程
模块化编程是一种设计思想。

演化过程
- 全局函数
- 使用对象封装函数作为命名空间，对象中再封装对象形成子命名空间
- 使用函数的闭包达到让一些属性和方法私有化。参见[FunctionClosure.js](js/FunctionClosure.js)
    - 可以有效的公开了共有方法，并且隐藏了私有属性和元素，私有空间的函数和变量也不会影响全局作用域
    - 这种方式是最理想的，也是大部分第三方库所采用的方法

函数闭包的维护和拓展。参见 [FunctionClosureExpand.js](js/FunctionClosureExpand.js)