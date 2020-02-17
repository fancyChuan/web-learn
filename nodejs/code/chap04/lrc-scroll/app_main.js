
var fs = require("fs");

fs.readFile("./lrc.txt", function (err, data) {
    if (err) {
        return console.log("读取歌词文件失败了" + err);
    }
    data = data.toString();
    console.log(data);
    var lines = data.split("\n");

    var reg = /\[(\d{2}):(\d{2})\.(\d{2})]\s*(.+)/ ;
    for (var i = 0; i < lines.length; i++) {
        (function (index) {
            var line = lines[index];
            var matches = reg.exec(line);
            if (matches) {
                var m = parseFloat(matches[1]); // 分
                var s = parseFloat(matches[2]); // 秒
                var ms = parseFloat(matches[3]); // 毫秒
                var content = matches[4]; // 歌词内容
                var time = m * 60 * 1000 + s * 1000 + ms;
                setTimeout(function () {
                    console.log(content);
                }, time);
            }
        })(i);
    }

});