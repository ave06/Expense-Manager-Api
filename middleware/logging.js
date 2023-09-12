var express = require("express");
var morgan = require("morgan");
var path = require("path");
var rfs = require("rotating-file-stream"); // version 2.x

var logger = express();

// create a rotating write stream
exports.accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "log"),
});
 module.exports = logger;
