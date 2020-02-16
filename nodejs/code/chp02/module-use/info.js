/**
 * 用于给其他模块使用的模块
 *
 * exports和module.exports的使用
 */


exports.name = "fancy"; // 向外开发变量name

module.exports.age = 33;

module.exports.sayHello = function () {
    console.log("hello")
};