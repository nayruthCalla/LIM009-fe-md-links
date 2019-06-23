import {promiseLinks} from './linksFile.js';
import {validate} from './validate.js'
export const mdLinks = (path,options={})=>
promiseLinks(path)
.then(links => options.validate === true ? validate(links):links)