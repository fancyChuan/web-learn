/**
 * 全局命名空间
 */

var foo = "bar";  // 在nodejs中，默认的作用域是模块级别的，也就是当前文件
console.log(foo);

console.log("global-foo: " + global.foo); // 这个时候全局的变量是空的


global.foo = "g-bar"; // 全局变量，这个时候

console.log("global-foo: " + global.foo);
