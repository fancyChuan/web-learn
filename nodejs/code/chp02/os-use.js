/**
 * os模块：提供与操作系统相关的API
 */

var os = require("os");

console.log(os.cpus());  // 查看cpu信息

delete require.cache["os"]; // 删除模块的缓存