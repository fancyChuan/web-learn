
var fs = require("fs");

fs.writeFileSync("./writeSync.txt", "同步写入的内容");

fs.writeFile("./write.txt", "异步写入的内容，异步比同步多了个回调函数", function (err) {
    if (err) { // 判断是否出现异常
        console.log("写入失败");
    }
});

fs.appendFile("./write.txt", "\n追加写入\n", function (err) {
    if (err) {
        return console.log(err); // 使用return的方式，阻止代码继续执行
    }
});

fs.readFile('./write.txt', function (err, data) {
    console.log("读取的结果： ");
    console.log(data.toString())
});


console.log("获取文件信息");
fs.stat("./write.txt", function (err, stats) {
    console.log("是否是文件：" + stats.isFile());
    console.log(stats)
});

