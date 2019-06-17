"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsLink = void 0;

// import {mdLinks} from './md-link.js'
var statsLink = function statsLink(links) {
  var arrLink = links.map(function (ele) {
    return ele.href;
  });
  var brokenLink = links.filter(function (ele) {
    return ele.ok === 'fail';
  });
  return {
    total: arrLink.length,
    unique: Array.from(new Set(arrLink)).length,
    broken: brokenLink.length
  };
}; // mdLinks('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/',true)
// .then(result =>{
//     console.log(statsLink(result))
// })


exports.statsLink = statsLink;