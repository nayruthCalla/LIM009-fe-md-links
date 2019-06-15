import {validateLink ,validate} from '../src/validate.js'
import {mdLinks} from '../src/md-link.js'
const objLinks = { href: 'https://www.laboratoria.la/',
text: 'LABORATORIA',
file:
 '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md' }

test('Deberia retornar un array de obejtos, validateLink',()=>{
    return validateLink(objLinks).then(result =>{
        expect(result).toEqual({ href: 'https://www.laboratoria.la/',
        text: 'LABORATORIA',
        file:
         '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md',
        ok: 'ok',
        status: 200 })
    })
});
test('deberia retornar un array de objetos con,validate',()=>{
    return mdLinks('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md').then(result =>{
        validate(result).then(result => {
            expect(result).toEqual([{ href: 'https://www.laboratoria.la/',
            text: 'LABORATORIA',
            file:
             '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md',
            ok: 'ok',
            status: 200 }])
        })
    })
})