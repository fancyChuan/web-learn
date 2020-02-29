
var http = require("http");
var config = require("./config");
var router = require("./router");
var render = require("./render");

// 创建一个服务器实例
var server = http.createServer();
server.on("request", function (req, res) {
    router(res);
    router(req, res);
});

// 监听端口，开启服务
server.listen(config.port, config.host, function () {
    console.log("server is listening at port: " + config.port)
});