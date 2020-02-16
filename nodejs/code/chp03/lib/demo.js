
//要加载markdown这个模块，要先到当前目录的node_modules去查找，即 chp03/lib/node_modules
// 找到markdown之后，会在markdown目录下找到package.json，最后通过package.json里面的main找到index.js
var markdown = require("markdown");

// 当node_modules找不到时，会到父级目录去查找。也就是 chp03 下查找