import {readFiles} from '../src/linksFile.js'
describe('Deberian ser funciones',()=>{
    expect(typeof readFiles).toBe('function')
});
test('readFiles deberia retornar el contenido del archivo',()=>{
    return readFiles('./folder/readmeTuto.md').then(result =>{
        expect(result).toBe('##Bienvenida a tu primer proyecto del track de Frontend en Laboratoria [LABORATORIA](https://www.laboratoria.la/)')
    });
});
test('deberia retornar erro',()=>{
    return readFiles('./folder/readmeTuto.md').catch(data =>{
        expect(data).toBe('hubo un error')
    })
})