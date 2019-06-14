import {readFile,markdownFile,modulefs} from './pathFiles.js';
const marked = require('marked')
// var fs = require('fs');

export const getLinks = (filecont,file)=>{
    let arrLinks = []   
    let renderer = new marked.Renderer();
     renderer.link = (href, title, text) =>{
        let objLinks = {
            href : href, 
            text :text,
            file : file
        }
        arrLinks.push(objLinks)
        
    }
    marked(filecont, { renderer: renderer })
    return [].concat(arrLinks)
}
console.log(getLinks('##Bienvenida a tu primer proyecto del track de Frontend en Laboratoria [LABORATORIA](https://www.laboratoria.la/)','/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md'))
// readFiles('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md').then(result => console.log(result))


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
