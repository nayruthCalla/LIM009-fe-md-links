const { spawn } = require('child_process');
// const bat = spawn('md-links', ['/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md', '--validate']);
const excute = (comand,args=[])=>{
    const createProcess= spawn(comand,args)
    return new Promise((resolve,reject)=>{
        createProcess.stdout.on('data',data=>resolve(data.toString()))
        createProcess.stderr.on('data',data=>reject(data.toString()))

    })
}
describe('test de la libreria md-link003 en mejor de los casos',()=>{
    it('Debería retornar links en el archivo markdonw',()=>{
        return excute('md-links', ['/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md'])
        .then(result =>{
        expect(result).toBe('ruta: /home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md, link : https://github.com/nodejs/node/blob/master/doc/topics/blocking-vs-non-blocking.md, texto : LABORATORIA\n')})
    })
    it('Debería retornar links y validarlos',()=>{
        return excute('md-links', ['/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md','--validate'])
        .then(result =>{
            expect(result).toBe('ruta: /home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md, link : https://github.com/nodejs/node/blob/master/doc/topics/blocking-vs-non-blocking.md, fail, 404 , texto : LABORATORIA\n')
        })
    });
    it('Debería retornar estadistica de los link',()=>{
        return excute('md-links', ['/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md','--stats'])
        .then(result =>{
            expect(result).toBe('Total:1\nUnique:1\n')
        })
    });
    it('Debería retornar estadistica y validar los links',()=>{
        return excute('md-links', ['/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md','--stats','--validate'])
        .then(result =>{
            expect(result).toBe('Total:1\nUnique:1\nBroken:1\n')
        })
    });
    
})
describe('Test de la libreria md-links003 en prueba de error',()=>{
    it('Debería mostrar un mensaje de como utilizar la libreria',()=>{
        return excute('md-links')
        .then(result => expect(result).toBe('Usage md-links PATH [--stats] [--validate]\n'))
    });
    it('Deberia retornar que no es una ruta',()=>{
        return excute('md-links',['rutaNoCorrecta'])
        .catch(result=>{
            let stringMjs = result.indexOf('no',4)
            expect(result.slice(stringMjs)).toBe('no es una ruta rutaNoCorrecta\n')
        })
    })
    it('Debería mostrar de como usar la libreria',()=>{
        return excute('md-links',['/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md','-cualesquierLetra'])
        .then(result =>expect(result).toBe('Usage md-links PATH [--stats] [--validate]\n'))
    });
    it('Debería mostrar de como usar la libreria',()=>{
        return excute('md-links',['/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md','--stats','--otroTexto'])
        .then(result =>expect(result).toBe('Usage md-links PATH [--stats] [--validate]\n'))
    })
    it('Debería mostrar de como usar la libreria',()=>{
        return excute('md-links',['/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md','--validate','--stats'])
        .then(result =>expect(result).toBe('Usage md-links PATH [--stats] [--validate]\n'))
    })
    it('Debería mostrar de como usar la libreria',()=>{
        return excute('md-links',['/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md','--stats','--validate','otroTexto'])
        .then(result =>expect(result).toBe('Usage md-links PATH [--stats] [--validate]\n'))
    })
})
// describe('Deberia retornar un string',()=>{
//     return bat.stdout.on('data', (data) => {
//         expect(data.toString()).toBe('ruta: /home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md, link : https://github.com/nodejs/node/blob/master/doc/topics/blocking-vs-non-blocking.md, fail, 404 , texto : LABORATORIA\n')
//       })
// })
// bat.stdout.on('data', (data) => {
//     console.log(data.toString());
//   });

//   bat.stderr.on('data', (data) => {
//     console.log(data.toString());
//   });
  
//   bat.on('exit', (code) => {
//     console.log(`Child exited with code ${code}`);
//   });
