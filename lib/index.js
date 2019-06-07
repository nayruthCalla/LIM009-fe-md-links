#!/usr/bin/env node
"use strict";

var _pathNode = require("./path-node.js");

var ruta = './LIM009-fe-md-links/test-folder/';

if ((0, _pathNode.isAbsoluteRuta)(ruta) != true) {
  console.log('es ruta relativa');
  var convAbsol = (0, _pathNode.convAbso)('/home/nayruth/Escritorio/', ruta);
  console.log(convAbsol);
  (0, _pathNode.isExit)(convAbsol, function (elment) {
    console.log(elment);

    if (elment) {
      console.log(elment);
      var extentionRuta = (0, _pathNode.extention)(convAbsol);
      console.log(extentionRuta);

      if ((0, _pathNode.extName)(extentionRuta) === '') {
        console.log('correcto carpeta');
        (0, _pathNode.isDir)(convAbsol, function (err, data) {
          console.log(data);
          var arrayRutasAbsoluta = [];
          data.forEach(function (element) {
            // console.log(element)
            console.log('absoluta:', (0, _pathNode.convAbso)(element));
            arrayRutasAbsoluta.push((0, _pathNode.convAbso)(element));
          });
          console.log(arrayRutasAbsoluta);
        });
      } else {
        console.log('es archivo');
      }
    }
  });
} else {} //analizador lexico
//ver si es achivo o carpeta preguntar defrente
//poner primero si