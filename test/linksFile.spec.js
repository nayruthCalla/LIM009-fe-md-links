import {readFiles,getLinks,promiseLinks} from '../src/linksFile.js'
describe('Deberian ser funciones',()=>{
    expect(typeof readFiles).toBe('function')
});
test('readFiles deberia retornar el contenido del archivo',()=>{
    return readFiles('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md').then(result =>{
        expect(result).toBe('##Bienvenida a tu primer proyecto del track de Frontend en Laboratoria [LABORATORIA](https://github.com/nodejs/node/blob/master/doc/topics/blocking-vs-non-blocking.md)')
    });
});

test('Deberia retornar un array de objetos, getLinks',()=>{
    expect(getLinks('##Bienvenida a tu primer proyecto del track de Frontend en Laboratoria [LABORATORIA](https://www.laboratoria.la/)','/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md'))
    .toEqual([ { href: 'https://www.laboratoria.la/',
    text: 'LABORATORIA',
    file:
     '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md' } ])
});
test('deberia retornar una promesa que resuelve un array de objetos,promiseLinks',()=>{
    return promiseLinks('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md').then(result =>{
        expect(result).toEqual([ { href: 'https://github.com/nodejs/node/blob/master/doc/topics/blocking-vs-non-blocking.md',
        text: 'LABORATORIA',
        file:
         '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md' }])
    })
})