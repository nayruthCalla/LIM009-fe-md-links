"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cliValidate = void 0;

var _mdLink = require("./md-link.js");

var _stats = require("./stats.js");

var cliValidate = function cliValidate(path) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
        } else if (option.optionB === '--stats' && option.optionA === '--validate') {
          console.log("Total:".concat((0, _stats.statsLink)(result).total, "\nUnique:").concat((0, _stats.statsLink)(result).unique, " \nBroken: ").concat((0, _stats.statsLink)(result).broken));
        } else {
          option.optionB === '--stats' ? console.log("Total:".concat((0, _stats.statsLink)(result).total, "\nUnique:").concat((0, _stats.statsLink)(result).unique)) : option.optionB === '--validate' && option.optionA === undefined ? result.forEach(function (element) {
            return console.log("ruta: ".concat(element.file, ", link : ").concat(element.href, ", ").concat(element.ok, ", ").concat(element.status, " , texto : ").concat(element.text));
          }) : console.log('Usage md-links PATH [--stats] [--validate]');
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    } else {
      console.log('Usage md-links PATH [--stats] [--validate]');
    }
  }
};

exports.cliValidate = cliValidate;