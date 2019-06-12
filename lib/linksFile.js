"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.links = exports.readFiles = void 0;

var _pathFiles = require("./pathFiles.js");

var readFiles = function readFiles(path) {
  return (0, _pathFiles.markdownFile)(path).then(function (result) {
    return new Promise(function (resolve, reject) {
      result.forEach(function (element) {
        //    console.log(element)
        (0, _pathFiles.readFile)(element, function (err, data) {
          if (err) {
            reject('hubo un error');
          } else {
            resolve(data.toString()); // console.log(data.toString())
          }
        });
      });
    });
  });
};

exports.readFiles = readFiles;
readFiles('./folder/').then(function (result) {
  return console.log(result);
});

var links = function links() {};

exports.links = links;