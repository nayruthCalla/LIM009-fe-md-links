import {isAbsol} from '../src/index.js';

// const ruta = './node-eaxmplo'
// const rutaAbsol = '/home/nayruth/Escritorio/node-eaxmplo'
// const rutaFile = '/home/nayruth/Escritorio/node-eaxmplo/program.js'
// const arrayRutas = [
//     'program.js',
//     'Node.js',
//     'argv.js',
//     'test.js',
//     'readme.md'
// ];
// const arrayRutasAbsolute = [
//     '/home/nayruth/Escritorio/node-eaxmplo/program.js',
//     '/home/nayruth/Escritorio/node-eaxmplo/Node.js',
//     '/home/nayruth/Escritorio/node-eaxmplo/argv.js',
//     '/home/nayruth/Escritorio/node-eaxmplo/test.js',
//     '/home/nayruth/Escritorio/node-eaxmplo/readme.md'
// ]
// const arrayRutasMarkdown = [
//     '/home/nayruth/Escritorio/node-eaxmplo/readme.md'
// ]
// const rutaFileMarkdown = '/home/nayruth/Escritorio/node-eaxmplo/otro.md'

describe('isAbsolte',()=>{
    it('Deberia ser una función',()=>{
        expect(typeof isAbsol).toBe('function')
    });
    it('Deberia retornar false',()=>{
        expect(isAbsol(ruta)).toBe(false)
    });
    it('Deberia retornar true',()=>{
        expect(isAbsolute(rutaAbsol)).toBe(true)
    });
});
// describe('convetAbsolute',()=>{
//     it('Deberia ser una función',()=>{
//         expect(typeof convetAbsolute).toBe('function')
//     });
//     it('Deberia re tornar string',()=>{
//         expect(convetAbsolute(ruta)).toBe('/home/nayruth/Escritorio/node-eaxmplo')
//     });
// });
// describe('isFile',()=>{
//     it('Deberia ser una funcion',()=>{
//         expect(typeof isFile).toBe('function')
//     });
//     it('Deberia retornar true si es un archivo',()=>{
//         expect(isFile(rutaFile)).toBe(true)
//     });
//     it('Deberia retornar false si no es un archivo',()=>{
//         expect(isFile(rutaAbsol)).toBe(false)
//     });
// })
// describe('isDir',()=>{
//     it('Deberia ser una función',()=>{
//         expect(typeof isDir).toBe('function')
//     });
//     it('Deberia retornar un array de rutas',()=>{
//         expect(isDir(rutaAbsol)).toEqual(arrayRutas)
//     })
// })
// describe('isDirAbsolute',()=>{
//     it('Deberia ser una función',()=>{
//         expect(typeof isDirAbsolute).toBe('function')
//     });
//     it('Deberia retornar un array con rutas absolutas',()=>{
//         expect(isDirAbsolute(arrayRutas)).toEqual(arrayRutasAbsolute)
//     });
// })
// describe('isMarkdown',()=>{
//     it('Deberia ser una funcion',()=>{
//         expect(typeof isMarkdown).toBe('functon')
//     });
//     it('Deberia retornar true si es archivo markdown',()=>{
//         expect(isMarkdown(rutaFileMarkdown)).toBe(true)
//     });
//     it('Deberia retornar flase si no es archivo markdown',()=>{
//         expect(isMarkdown('/home/nayruth/Escritorio/node-eaxmplo/program.js')).toBe(false)
//     });
// })
// describe('saveRuta',()=>{
//     it('Deberia ser una función',()=>{
//         expect(typeof saveRuta).toBe('funtion')
//     });
//     it('Deberia retornar array de rutas con solo archivos markdow',()=>{
//         expect(saveRuta(rutaAbsol)).toEqual(arrayRutasMarkdown)
//     });
// })
// describe('readFile',()=>{
//     it('Deberia ser una función',()=>{
//         expect(typeof readFile).toBe('function')
//     });
//     it('Deberia retornar un el texto ')
// })
