"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markdownFile = exports.pathFile = exports.join = exports.readDir = exports.readFile = exports.isFile = exports.extName = exports.convAbso = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var convAbso = _path["default"].resolve;
exports.convAbso = convAbso;
var extName = _path["default"].extname;
exports.extName = extName;
var isFile = _fs["default"].stat;
exports.isFile = isFile;
var readFile = _fs["default"].readFile;
exports.readFile = readFile;
var readDir = _fs["default"].readdir;
exports.readDir = readDir;
var join = _path["default"].join;
exports.join = join;

var pathFile = function pathFile(path) {
  var absoltPath = convAbso(path);
  return new Promise(function (resolve, reject) {
    isFile(absoltPath, function (err, stats) {
      if (err) {
        reject("no es una ruta ".concat(path));
      } else if (stats.isFile()) {
        // const arrayRutasAbsoluta = []
        resolve(absoltPath);
      } else {
        readDir(absoltPath, function (err, files) {
          // if(err){
          // reject('ocurrio un error')
          // }else{
          var paths = files.map(function (elemt) {
            return join(absoltPath, elemt);
          });
          Promise.all(paths.map(function (element) {
            return pathFile(element);
          })).then(function (paths) {
            var _ref;

            return resolve((_ref = []).concat.apply(_ref, _toConsumableArray(paths)));
          }); // }
        });
      }
    });
  });
}; // resolve([].concat(...paths))
// pathFile('./folder/').then(result => console.log(result))


exports.pathFile = pathFile;

var markdownFile = function markdownFile(path) {
  var arrayPath = [];
  return pathFile(path).then(function (result) {
    if (typeof result === 'string') {
      if (extName(result) === '.md') {
        arrayPath.push(result);
        return arrayPath;
      }
    } else {
      return result.filter(function (element) {
        return extName(element) === '.md';
      });
    }
  });
}; // markdownFile('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md').then(result => console.log(result))


exports.markdownFile = markdownFile;