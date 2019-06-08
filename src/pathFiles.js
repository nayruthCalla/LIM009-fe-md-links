import module from 'path'
import modulefs from 'fs'
export const isAbsoluteRuta = module.isAbsolute;
export const convAbso = module.resolve;
// export const isExit = modulefs.exists;
export const isDir = modulefs.readdir;
export const isFile = modulefs.stat;

export const pathFile = (path)=>{
   return new Promise((resolve,reject)=>{
       isFile(path,(err,stats)=>{
           if(err){
               reject(err)
           }
           resolve(stats.isFile())
       })
   })
}
pathFile('/home/nayruth/Escritorio/node-eaxmplo/Node.js').then(result => console.log(result))