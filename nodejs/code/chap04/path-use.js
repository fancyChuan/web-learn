

var str = "E:\\otherWorkshop\\web-learn\\nodejs\\code\\chap04";
var path = require("path");
var fs = require("fs");

fs.readdir(str, function (err, files) {
    // console.log(files); // 这里会把子目录也显示出来
    files.forEach(function (file) {
        console.log(file)
    })
});