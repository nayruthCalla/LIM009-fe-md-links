"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markdownFile = exports.pathFile = exports.isFile = exports.extName = exports.convAbso = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// export const isAbsoluteRuta = module.isAbsolute;
var convAbso = _path["default"].resolve;
exports.convAbso = convAbso;
var extName = _path["default"].extname; // export const isExit = modulefs.exists;
// export const isDir = modulefs.readdir;

exports.extName = extName;
var isFile = _fs["default"].stat;
exports.isFile = isFile;

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
}; // pathFile('../node-eaxmplo/src/program.js').then(result => {// })


exports.pathFile = pathFile;

var markdownFile = function markdownFile(path) {
  var arrayPath = [];
  return pathFile(path).then(function (result) {
    if (extName(result) === '.md') {
      // console.log('si es md') console.log(arrayPath)
      arrayPath.push(result);
      return arrayPath;
    } else {
      console.log('no es md');
    }
  });
};

exports.markdownFile = markdownFile;
markdownFile('../node-eaxmplo/README.md').then(function (result) {
  return console.log(result);
});