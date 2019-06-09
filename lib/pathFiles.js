"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markdownFile = exports.pathFile = exports.readFile = exports.isFile = exports.extName = exports.convAbso = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var convAbso = _path["default"].resolve;
exports.convAbso = convAbso;
var extName = _path["default"].extname;
exports.extName = extName;
var isFile = _fs["default"].stat;
exports.isFile = isFile;
var readFile = _fs["default"].readFile;
exports.readFile = readFile;

var pathFile = function pathFile(path) {
  var absoltPath = convAbso(path);
  return new Promise(function (resolve, reject) {
    isFile(absoltPath, function (err, stats) {
      if (err) {
        reject("no es una ruta ".concat(path));
      } else if (stats.isFile()) {
        resolve(absoltPath);
      } else {
        resolve(false);
      }
    });
  });
};

exports.pathFile = pathFile;

var markdownFile = function markdownFile(path) {
  var arrayPath = [];
  return pathFile(path).then(function (result) {
    if (extName(result) === '.md') {
      // console.log('si es md') console.log(arrayPath)
      arrayPath.push(result);
      return arrayPath;
    }
  });
}; // markdownFile('../node-eaxmplo/README.md').then(result => console.log(result))


exports.markdownFile = markdownFile;