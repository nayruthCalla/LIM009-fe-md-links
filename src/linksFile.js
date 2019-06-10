import {readFile,markdownFile} from './pathFiles.js'
export const readFiles = (path)=>{
    return markdownFile(path).then(result =>{
        return new Promise ((resolve, reject)=>{
           result.forEach(element =>{
            readFile(element,(err,data)=>{
                if(err){
                    reject('hubo un error')
                }
                else{
                    resolve(data.toString())
                }
            })
           })
        })
    })
}
readFiles('./folder/readmeTuto.md').then(result => console.log(result))
