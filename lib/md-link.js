"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _linksFile = require("./linksFile.js");

var _validate = require("./validate.js");

var mdLinks = function mdLinks(path) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _linksFile.promiseLinks)(path).then(function (links) {
    return options.validate === true ? (0, _validate.validate)(links) : links;
  });
}; // mdLinks('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/files/carpeta/documents/readText.md',{validate:true})
// .then(result => console.log(result))
// .catch(err=>console.log(err))


exports.mdLinks = mdLinks;