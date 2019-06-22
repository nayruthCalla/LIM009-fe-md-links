import {readFiles,getLinks,promiseLinks} from '../src/linksFile.js'
import {join} from '../src/pathFiles.js'
describe('Deberian ser funciones',()=>{
    expect(typeof readFiles).toBe('function')
});
test('readFiles deberia retornar el contenido del archivo',(done)=>{
    return readFiles('./folder/readmeTuto.md').then(result =>{
        expect(result).toBe('##Bienvenida a tu primer proyecto del track de Frontend en Laboratoria [LABORATORIA](https://github.com/nodejs/node/blob/master/doc/topics/blocking-vs-non-blocking.md)')
        done()
    });
});

test('Deberia retornar un array de objetos, getLinks',(done)=>{
    expect(getLinks('##Bienvenida a tu primer proyecto del track de Frontend en Laboratoria [LABORATORIA](https://www.laboratoria.la/)','/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md'))
    .toEqual([ { href: 'https://www.laboratoria.la/',
    text: 'LABORATORIA',
    file:
    join(`${process.cwd()}/folder/readmeTuto.md`)} ])
     done()
});
test('deberia retornar una promesa que resuelve un array de objetos,promiseLinks',(done)=>{
    return promiseLinks('./folder/readmeTuto.md').then(result =>{
        expect(result).toEqual([ { href: 'https://github.com/nodejs/node/blob/master/doc/topics/blocking-vs-non-blocking.md',
        text: 'LABORATORIA',
        file:
         './folder/readmeTuto.md' }])
         done()
    })
})