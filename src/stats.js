// import {mdLinks} from './md-link.js'
export const statsLink = links =>{
    const arrLink = links.map(ele =>ele.href);
    const brokenLink = links.filter(ele =>ele.ok ==='fail')
  return {total : arrLink.length,unique :Array.from(new Set(arrLink)).length,broken :brokenLink.length }
};
// mdLinks('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/',true)
// .then(result =>{
//     console.log(statsLink(result))
// })