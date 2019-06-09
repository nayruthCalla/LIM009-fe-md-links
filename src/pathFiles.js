import module from 'path'
import modulefs from 'fs'
export const convAbso = module.resolve;
export const extName = module.extname;
export const isFile = modulefs.stat;
export const pathFile = (path)=>{
    const absoltPath = convAbso(path)
    return new Promise((resolve,reject)=>{
        isFile(absoltPath,(err,stats)=>{
            if(err){
                reject(`no es una ruta ${path}`)
            }
            else if(stats.isFile()){
                resolve(absoltPath)
            }
            else {
                resolve(false)
            }
        })
    })
}
export const markdownFile = (path)=>{
    const arrayPath = []
    return pathFile(path).then(result => {
        if(extName(result)==='.md'){
            // console.log('si es md') console.log(arrayPath)
            arrayPath.push(result)
            return arrayPath           
        }
    })  
}
markdownFile('../node-eaxmplo/README.md').then(result => console.log(result))

