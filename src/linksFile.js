import {readFile,markdownFile} from './pathFiles.js'
export const readFiles = (path)=>{
    return markdownFile(path).then(result =>{
        return new Promise ((resolve, reject)=>{
           result.forEach(element =>{
            readFile(element,(err,data)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(data.toString())
                }
            })
           })
        })
    })
}
readFiles('../node-eaxmplo/README.md').then(result => console.log(result))
