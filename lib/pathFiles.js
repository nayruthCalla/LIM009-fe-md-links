"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathFile = exports.isFile = exports.isDir = exports.isExit = exports.convAbso = exports.isAbsoluteRuta = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isAbsoluteRuta = _path["default"].isAbsolute;
exports.isAbsoluteRuta = isAbsoluteRuta;
var convAbso = _path["default"].resolve;
exports.convAbso = convAbso;
var isExit = _fs["default"].exists;
exports.isExit = isExit;
var isDir = _fs["default"].readdir;
exports.isDir = isDir;
var isFile = _fs["default"].stat;
exports.isFile = isFile;

var pathFile = function pathFile(path) {
  return new Promise(function (resolve, reject) {
    isFile(path, function (err, stats) {
      if (err) {
        reject(err);
      }

      resolve(stats.isFile());
    });
  });
};

exports.pathFile = pathFile;
pathFile('/home/nayruth/Escritorio/node-eaxmplo/Node.js').then(function (result) {
  return console.log(result);
});