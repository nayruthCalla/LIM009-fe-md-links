#!/usr/bin/env node
"use strict";

var _mdLink = require("./md-link.js");

var _stats = require("./stats.js");

var _marked = require("marked");

//md-links PATH [--stats] [--validate]
var path = process.argv[2];
var option = {
  validate: process.argv[4],
  stats: process.argv[3]
};

if (path === undefined) {
  console.log('Usage md-links PATH [--stats] [--validate]');
} else {
  if (option.stats === undefined || option.stats === '--validate' || option.validate === undefined && option.stats === '--stats' || option.validate === '--validate') {
    (0, _mdLink.mdLinks)(path, option.stats === '--validate' || option.stats === '--stats' || option.validate === '--validate' ? {
      validate: true
    } : option).then(function (result) {
      if (option.stats === undefined && option.stats === undefined) {
        result.forEach(function (element) {
          return console.log("ruta: ".concat(element.file, ", link : ").concat(element.href, ", texto : ").concat(element.text));
        });
      } else if (option.stats === '--stats' && option.validate === '--validate') {
        console.log("Total:".concat((0, _stats.statsLink)(result).total, "\nUnique:").concat((0, _stats.statsLink)(result).unique, " \nBroken: ").concat((0, _stats.statsLink)(result).broken));
      } else {
        option.stats === '--stats' ? console.log("Total:".concat((0, _stats.statsLink)(result).total, "\nUnique:").concat((0, _stats.statsLink)(result).unique)) : option.stats === '--validate' && option.validate === undefined ? result.forEach(function (element) {
          return console.log("ruta: ".concat(element.file, ", link : ").concat(element.href, ", ").concat(element.ok, ", ").concat(element.status, " , texto : ").concat(element.text));
        }) : console.log('Usage md-links PATH [--stats] [--validate]');
      }
    });
  } else {
    console.log('Usage md-links PATH [--stats] [--validate]');
  }
} // `ruta: ${element.file}, link : ${element.href}, texto : ${element.text}` if (path != undefined && option.validate === undefined && option.stats === undefined && process.argv[5] === undefined) {
//     // console.log('se mostraras las rutas :)')
// }
// else if (path != undefined && option.validate != undefined && option.stats === undefined && process.argv[5] === undefined) {
//     console.log('se verifica si es stats o validate')
// }
// else if (path != undefined && option.validate != undefined && option.stats != undefined && process.argv[5] === undefined) {
//     console.log('se verifica los dos :)')
// } else {
//     console.log('Usage md-links PATH [--stats] [--validate]')
// }
// console.log(`hola ${path}`)
// console.log(option)