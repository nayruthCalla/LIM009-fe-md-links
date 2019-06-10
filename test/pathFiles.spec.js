import {pathFile , markdownFile} from '../src/pathFiles.js'
describe('verificar si son funciones',()=>{
    it('pathFile deberia ser una funcion',()=>{
        expect(typeof pathFile).toBe('function')
    });
    it('markdownFile deberia ser una función',()=>{
        expect(typeof markdownFile).toBe('function')
    })    
})
test('Deberia retornar la ruta enviada',()=>{
    return pathFile('./folder/readmeTuto.md').then(result =>{
     expect(result).toBe('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md')
    })
});
test('Error al ingresar una ruta', () => {
  return pathFile('hola').catch(data => {
    expect(data).toBe('no es una ruta hola')
  });
});
test('Deberia retornar la false si es un directorio',()=>{
    return pathFile('./folder/files/').then(result =>{
        expect(result).toBe(false)
    })
});
test('deberia retornar un array de rutas absolutas',()=>{
    return markdownFile('./folder/readmeTuto.md').then(result =>{
        expect(result).toEqual(['/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md'])
    })
})