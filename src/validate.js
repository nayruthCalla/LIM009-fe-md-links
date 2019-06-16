import fetch from 'node-fetch';
export const validateLink = (link)=>{
return new Promise((resolve)=>{
    fetch(link.href)
    .then(result => {
        // console.log(result)
        resolve({...link,href: link.href,ok : result.ok===true?'ok':'fail' , status :result.status })
        
    })
    .catch(() => resolve({ ...link, status: null, ok: false }))
})
}
export const validate = (links)=>{
    return Promise.all(links.map(validateLink))
}

// console.log(`${element.file} ${element.href} ${element.ok} ${element.status} ${element.text}`)
// const objLinks = { href: 'https://www.dslaboratoria.dla/',
// text: 'LABORATORIA',
// file:
//  '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md' }
// validateLink(objLinks).then(result => console.log(result))