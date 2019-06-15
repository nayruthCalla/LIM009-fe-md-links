import module from 'path'
import modulefs from 'fs'
export const convAbso = module.resolve;
export const extName = module.extname;
export const isFile = modulefs.stat;
export const readFile = modulefs.readFile;
export const readDir = modulefs.readdir;
export const join = module.join
export const pathFile = (path)=>{
    const absoltPath = convAbso(path)
    return new Promise((resolve,reject)=>{
        isFile(absoltPath,(err,stats)=>{
            if(err){
                reject(`no es una ruta ${path}`)
            }
            else if(stats.isFile()){
                // const arrayRutasAbsoluta = []
                resolve(absoltPath)
            }
            else {
                 readDir(absoltPath, (err, files) => {
                    // if(err){
                        // reject('ocurrio un error')
                    // }else{
                        const paths = files.map(elemt => join(absoltPath,elemt))
                        Promise.all(paths.map(element => pathFile(element)))
                        .then(paths => resolve([].concat.apply([],paths))) 
                    // }
                 });
            }
        })
    })
}
 
// resolve([].concat(...paths))
// pathFile('./folder/').then(result => console.log(result))
export const markdownFile = (path)=>{
    const arrayPath = []
    return pathFile(path).then(result => {
          if(typeof result === 'string'){
            if(extName(result)==='.md'){
                arrayPath.push(result)
                return arrayPath
            }
          }else{
            return result.filter(element => extName(element)==='.md' )
          }
    })
}
// markdownFile('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md').then(result => console.log(result))

