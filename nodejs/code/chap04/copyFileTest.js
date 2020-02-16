
var copy = require("./copyFile");

copy("write.txt", "write-copy.txt", function (err) {
    if (err) {
        return console.log("文件复制失败了")
    }
    console.log("成功了");
});