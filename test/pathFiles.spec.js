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
        expect(result).toEqual(["/home/nayruth/Escritorio/LIM009-fe-md-links/folder/files/app.js", "/home/nayruth/Escritorio/LIM009-fe-md-links/folder/files/carpeta/archivo.md", "/home/nayruth/Escritorio/LIM009-fe-md-links/folder/files/carpeta/documents/readText.md", "/home/nayruth/Escritorio/LIM009-fe-md-links/folder/files/ejemplo.md"])
    })
});

test('deberia retornar un array de rutas absolutas',()=>{
    return markdownFile('./folder/readmeTuto.md').then(result =>{
        expect(result).toEqual(['/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md'])
    })
})
test('deberia retornar un array de rutas absolutas',()=>{
    return markdownFile('./folder/files/app.js').then(result =>{
        expect(result).toBe('No es archivo MArkdown')
    })
})
test('Deberia retornar un array de rutas absolutas de solo archivos markdown si es un directorio',()=>{
    return markdownFile('./folder/').then(result =>{
        expect(result).toEqual([ '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/README.md',
        '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/files/carpeta/archivo.md',
        '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/files/carpeta/documents/readText.md',
        '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/files/ejemplo.md',
        '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md' ])
    })
})