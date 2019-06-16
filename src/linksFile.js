import {readFile,markdownFile} from './pathFiles.js';
import marked from  'marked';
export const readFiles = (path)=>{
    return new Promise((resolve)=>{
        readFile(path,(err,data)=>{
            resolve(data.toString())            
        })
    })
}
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
    return (arrLinks)
}
export const promiseLinks = (path)=>{
    return markdownFile(path).then(result =>{
        return Promise.all(result.map(readFiles)).then(result => {
            return ([].concat(...result.map(element => (getLinks(element,path)))))
        })
    })
    
}
// promiseLinks('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/').then(result => console.log(result))

// console.log(getLinks('##Bienvenida a tu primer proyecto del track de Frontend en Laboratoria [LABORATORIA](https://www.laboratoria.la/)','/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md'))
// readFiles('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md').then(result => console.log(result))



