const path = require('path'); 
const fs = require("fs");
//entrando string como ruta 
const ruta = './node-eaxmplo'
//probando si una ruta es absoluta y si tiene formato de directorio /Escritorio/node-eaxmplo
console.log('veremos si es absoluta',path.isAbsolute(ruta));
if(path.isAbsolute(ruta) === true){
    console.log('es absoluta')
}else{
   console.log( path.resolve('/home/nayruth/Escritorio/',ruta))
   const convAbso = path.resolve('/home/nayruth/Escritorio/',ruta);
   fs.exists(convAbso,element =>{
       if(element){
        console.log(convAbso,'si existe ruta')
        // como saber si es un archivo
        console.log('ver si es un archivo ',path.basename(convAbso))
        const extention = path.basename(convAbso);
        console.log('ver que extencion es: ', path.extname(extention));
        const siArchivo = path.extname(extention);
        if(siArchivo === ''){
            console.log('es carpeta')
            //leyendo un directorio
            fs.readdir(convAbso, (err, data) => {
             if (err) throw err;
                console.log(data);
                const arrayRutasAbsoluta = []
                data.forEach(element =>{
                    // console.log(element)
                    console.log('absoluta:',path.resolve(element))
                    arrayRutasAbsoluta.push(path.resolve(element))
                })
                console.log(arrayRutasAbsoluta)
                arrayRutasAbsoluta.forEach(element =>{
                    // console.log(path.basename(element))
                    if('.md'===path.extname(element)){
                    //   console.log('si es archivo markdown')
                      const arrMd = [];
                      arrMd.push(element)
                      console.log('archivo markdown',arrMd)
                      arrMd.forEach(element =>{

                      })
                    }else{
                    //  console.log('no es markdown')
                    }
                })
            });
        }else{
            console.log('no es carpeta')

        }
       }else{
        console.log(convAbso,'no exiate ruta')
       }
   })
}

fs.readFile('/home/nayruth/Escritorio/node-eaxmplo/README.md', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
// //convertir una ruta relativa a absoluta
// console.log('convertir absoluta: ', path.resolve('/foo/bar','.../baz'))
// // como saber si es un archivo
// console.log('ver si es un archivo ',path.basename('/foo/bar/baz/asdf/quux.html'))
// const extention = path.basename('/foo/bar/baz/asdf/quux.html');
// console.log('ver que extencion es: ', path.extname(extention))
// const nameExtent = path.extname(extention);
// if('.md'===nameExtent){
//     console.log('si es archivo markdown')
// }else{
//     console.log('no es markdown')
// }
// //leyendo un directorio
// fs.readdir('/home/nayruth/Escritorio', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });

// //recorrer array 
// const getRuats =(array)=>{
// return array.forEach(element => {
//     //un string a absoluta 

// });
// }