/**
 * require的使用： 加载其他模块
 */

var myModule = require("./info");

console.log(myModule.name);
console.log(myModule.age);

myModule.sayHello();