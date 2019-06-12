import {readFile,markdownFile} from './pathFiles.js'
export const readFiles = (path)=>{
    return markdownFile(path).then(result =>{
        return new Promise ((resolve, reject)=>{
           result.forEach(element =>{
            //    console.log(element)
            readFile(element,(err,data)=>{
                if(err){
                    reject('hubo un error')
                }
                else{
                    data.toString()
                    
                    // console.log(data.toString())
                }
            })
           })
        })
    })
}
readFiles('./folder/').then(result => console.log(result))
export const links = ()=>{

}
