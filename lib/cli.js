#!/usr/bin/env node
"use strict";

var _mdLink = require("./md-link.js");

var _stats = require("./stats.js");

// import {cliValidate} from './cliValidate.js'
// const cli = () => {
var path = process.argv[2];
var option = {
  optionA: process.argv[4],
  optionB: process.argv[3]
};

if (path === undefined) {
  console.log('Usage md-links PATH [--stats] [--validate]');
} else {
  if (option.optionB === undefined || option.optionB === '--validate' || option.optionA === undefined && option.optionB === '--stats' || option.optionA === '--validate') {
    (0, _mdLink.mdLinks)(path, option.optionB === '--validate' || option.optionB === '--stats' || option.optionA === '--validate' ? {
      validate: true
    } : option).then(function (result) {
      if (option.optionB === undefined && option.optionB === undefined) {
        result.forEach(function (element) {
          return console.log("ruta: ".concat(element.file, ", link : ").concat(element.href, ", texto : ").concat(element.text));
        });
      } else if (option.optionB === '--stats' && option.optionA === '--validate' && process.argv[5] === undefined) {
        console.log("Total:".concat((0, _stats.statsLink)(result).total, "\nUnique:").concat((0, _stats.statsLink)(result).unique, "\nBroken:").concat((0, _stats.statsLink)(result).broken));
      } else {
        option.optionB === '--stats' && process.argv[5] === undefined ? console.log("Total:".concat((0, _stats.statsLink)(result).total, "\nUnique:").concat((0, _stats.statsLink)(result).unique)) : option.optionB === '--validate' && option.optionA === undefined && process.argv[5] === undefined ? result.forEach(function (element) {
          return console.log("ruta: ".concat(element.file, ", link : ").concat(element.href, ", ").concat(element.ok, ", ").concat(element.status, " , texto : ").concat(element.text));
        }) : console.log('Usage md-links PATH [--stats] [--validate]');
      }
    })["catch"](function (err) {
      return console.log(err);
    });
  } else {
    console.log('Usage md-links PATH [--stats] [--validate]');
  }
} // cliValidate(path,option)