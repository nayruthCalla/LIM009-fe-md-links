"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDir = exports.isExit = exports.convAbso = exports.isAbsoluteRuta = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import {fs} from 'fs'
// const fs = require('fs')
var isAbsoluteRuta = _path["default"].isAbsolute;
exports.isAbsoluteRuta = isAbsoluteRuta;
var convAbso = _path["default"].resolve; // export const extention = module.basename;
// export const extName = module.extname;

exports.convAbso = convAbso;
var isExit = _fs["default"].exists;
exports.isExit = isExit;
var isDir = _fs["default"].readdir;
exports.isDir = isDir;