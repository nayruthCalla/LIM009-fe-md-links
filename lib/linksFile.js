"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.links = exports.readFiles = void 0;

var _pathFiles = require("./pathFiles.js");

var marked = require('marked'); // var fs = require('fs');


var readFiles = function readFiles(path) {
  return new Promise(function (resolve, reject) {
    (0, _pathFiles.readFile)(path, function (err, data) {
      if (err) {
        reject('Hubo un error!');
      } else {
        resolve(data.toString());
      }
    });
  });
};

exports.readFiles = readFiles;

var links = function links(filecont, file) {
  var arrLinks = [];
  var renderer = new marked.Renderer();

  renderer.link = function (href, title, text) {
    var objLinks = {
      href: href,
      text: text,
      file: file
    };
    arrLinks.push(objLinks);
  };

  marked(filecont, {
    renderer: renderer
  });
  return [].concat(arrLinks);
};

exports.links = links;
console.log(links('##Bienvenida a tu primer proyecto del track de Frontend en Laboratoria [LABORATORIA](https://www.laboratoria.la/)', '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md')); // readFiles('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md').then(result => console.log(result))

/*
 var links = [];
            var textarr = []
            var renderer = new marked.Renderer();
           result.forEach(element =>{
               console.log(element)
               renderer.link = function (href, title, text) {
                links.push(href);
                textarr.push(text);
            }
            marked(fs.readFileSync(element).toString(), { renderer: renderer });
            resolve(links.concat(textarr))            
           })
           erickfloresq
           ivandep
*/