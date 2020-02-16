/**
 * 文件复制模块
 */

var fs = require("fs");

/**
 * 定义文件复制函数
 * @param src
 * @param dist
 * @param callback
 */
function copy(src, dist, callback) {
    fs.readFile(src, function (err, data) {
        if (err) {
            return callback(err);
        }

        fs.writeFile(dist, data.toString(), function (err) {
            if (err) {
                return callback(err);
            }
            callback(null);
        })
    })
}

module.exports = copy;