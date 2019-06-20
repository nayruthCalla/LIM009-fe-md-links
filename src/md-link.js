import {promiseLinks} from './linksFile.js';
import {validate} from './validate.js'
export const mdLinks = (path,options={})=>
promiseLinks(path)
.then(links => options.validate === true ? validate(links):links)

// mdLinks('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/files/carpeta/documents/readText.md',{validate:true})
// .then(result => console.log(result))
// .catch(err=>console.log(err))
