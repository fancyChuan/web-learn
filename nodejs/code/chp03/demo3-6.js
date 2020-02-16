/**
 * 通过回调函数处理异步编程中的异常
 */

function parseJsonStrToObj(str, callback) {
    setTimeout(function () {
        try {
            var obj = JSON.parse(str);
            callback(null, obj);
        } catch (e) {
            callback(e, null);
        }
    }, 0);
}


parseJsonStrToObj("foo", function (err, result) {
    if (err) {
        return console.log("失败了")
    }
    console.log("成功了： " + result)
});