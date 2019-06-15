"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.validateLink = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var validateLink = function validateLink(link) {
  return new Promise(function (resolve) {
    (0, _nodeFetch["default"])(link.href).then(function (result) {
      console.log(result);
      resolve(_objectSpread({}, link, {
        href: link.href,
        ok: result.ok === true ? 'ok' : 'fail',
        status: result.status
      }));
    });
  });
};

exports.validateLink = validateLink;

var validate = function validate(links) {
  return Promise.all(links.map(validateLink));
}; // console.log(`${element.file} ${element.href} ${element.ok} ${element.status} ${element.text}`)


exports.validate = validate;
var objLinks = {
  href: 'https://www.laboratoria.la/',
  text: 'LABORATORIA',
  file: '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md'
};
validateLink(objLinks).then(function (result) {
  return console.log(result);
});