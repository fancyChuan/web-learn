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


// exports = {1,2,3} // 这个代码会切断exports与module.exports的联系，不能直接定义数据
// module.exports = [1,2,3]; // 这个是可以生效的