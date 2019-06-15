"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _linksFile = require("./linksFile.js");

var _validate = require("./validate.js");

var mdLinks = function mdLinks(path, options) {
  return (0, _linksFile.promiseLinks)(path).then(function (links) {
    return options === true ? (0, _validate.validate)(links) : links;
  });
};

exports.mdLinks = mdLinks;
mdLinks('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/', true).then(function (result) {
  return console.log(result);
});