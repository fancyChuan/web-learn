/**
 * 函数闭包
 *    利用匿名自执行函数形式的封闭的函数作用域空间，达到私有化的目的
 */

var calculator = (function () {
    function add(x, y) {
        return parseInt(x) + parseInt(y)
    }
    function substract(x, y) {
        return parseInt(x) - parseInt(y)
    }
    return { // 添加返回值外界才可以访问
        add: add,
        substract: substract
    }
})();


// 使用示例
var oResult = document.getElementById("result");
var oOpt = document.getElementById("opt");

oOpt.addEventListener("click", function () {
    oResult.value = calculator.add(5, 6);
});