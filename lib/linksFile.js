"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promiseLinks = exports.getLinks = exports.readFiles = void 0;

var _pathFiles = require("./pathFiles.js");

var _marked = _interopRequireDefault(require("marked"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var readFiles = function readFiles(path) {
  return new Promise(function (resolve) {
    (0, _pathFiles.readFile)(path, function (err, data) {
      resolve(data.toString());
    });
  });
};

exports.readFiles = readFiles;

var getLinks = function getLinks(filecont, file) {
  var arrLinks = [];
  var renderer = new _marked["default"].Renderer();

  renderer.link = function (href, title, text) {
    var objLinks = {
      href: href,
      text: text,
      file: file
    };
    arrLinks.push(objLinks);
  };

  (0, _marked["default"])(filecont, {
    renderer: renderer
  });
  return arrLinks;
};

exports.getLinks = getLinks;

var promiseLinks = function promiseLinks(path) {
  return (0, _pathFiles.markdownFile)(path).then(function (result) {
    return Promise.all(result.map(readFiles)).then(function (result) {
      var _ref;

      return (_ref = []).concat.apply(_ref, _toConsumableArray(result.map(function (element) {
        return getLinks(element, path);
      })));
    });
  });
}; // promiseLinks('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/').then(result => console.log(result))
// console.log(getLinks('##Bienvenida a tu primer proyecto del track de Frontend en Laboratoria [LABORATORIA](https://www.laboratoria.la/)','/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md'))
// readFiles('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md').then(result => console.log(result))


exports.promiseLinks = promiseLinks;