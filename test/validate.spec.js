import {validateLink ,validate} from '../src/validate.js'
import {mdLinks} from '../src/md-link.js'
const objLinks = { href: 'https://www.laboratoria.la/',
text: 'LABORATORIA',
file:
 '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md' }

test('Deberia retornar un array de objetos, validateLink',()=>{
    return validateLink(objLinks).then(result =>{
        expect(result).toEqual({ href: 'https://www.laboratoria.la/',
        text: 'LABORATORIA',
        file:
         '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md',
        ok: 'ok',
        status: 200 })
    })
});
test('deberia retornar un array de objetos con si la ruta no existe,validate',()=>{
    return mdLinks('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/files/carpeta/documents/readText.md').then(result =>{
        validate(result).then(result => {
            expect(result).toEqual([ { href: 'https://lms.laboratoria.l',
            text: '0123456789101112131415161718192021222324255656767',
            file:
             '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/files/carpeta/documents/readText.md',
            status: null,
            ok: false } ])
        })
    })
})
test('deberia retornar un array de objetos con,validate',()=>{
    return mdLinks('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md').then(result =>{
        validate(result).then(result => {
            expect(result).toEqual([{ href: 'https://github.com/nodejs/node/blob/master/doc/topics/blocking-vs-non-blocking.md',
            text: 'LABORATORIA',
            file:
             '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md',
            ok: 'fail',
            status: 404 }])
        })
    })
})
