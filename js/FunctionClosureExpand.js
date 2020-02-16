/**
 * 闭包函数的拓展
 */

var calculator = (function (cal) {
    function add(x, y) {
        return parseInt(x) + parseInt(y)
    }
    function substract(x, y) {
        return parseInt(x) - parseInt(y)
    }

    cal.add = add;
    cal.substract = substract;

    return cal;
})(calculator || {});

// 将前面命名的calculator作为参数传入，新增方法后返回。之后覆盖掉原来的calculator对象
var calculator = (function (cal) {
    // 拓展的方法
    cal.mod = function (x, y) {
        return x % y;
    };
    return cal;
})(calculator || {});
