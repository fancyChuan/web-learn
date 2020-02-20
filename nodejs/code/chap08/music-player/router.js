/**
 * 路由模块： 负责把具体的请求路径分发给具体的请求处理函数
 *           分发到具体的业务处理逻辑
 */

var fs = require("fs");
var path = require("path");
var _ = require("underscore"); // 使用模板引擎
var musicController = require("./controllers/music");
var url = require("url");

