"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFiles = void 0;

var _pathFiles = require("./pathFiles.js");

var readFiles = function readFiles(path) {
  return (0, _pathFiles.markdownFile)(path).then(function (result) {
    return new Promise(function (resolve, reject) {
      result.forEach(function (element) {
        (0, _pathFiles.readFile)(element, function (err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data.toString());
          }
        });
      });
    });
  });
};

exports.readFiles = readFiles;
readFiles('../node-eaxmplo/README.md').then(function (result) {
  return console.log(result);
});