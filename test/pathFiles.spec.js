import {pathFile , markdownFile} from '../src/pathFiles.js'
describe('verificar si son funciones',()=>{
    it('pathFile deberia ser una funcion',()=>{
        expect(typeof pathFile).toBe('function')
    });
    it('markdownFile deberia ser una función',()=>{
        expect(typeof markdownFile).toBe('function')
    })    
})
test('Deberia retornar la ruta enviada',(done)=>{
    return pathFile('./folder/readmeTuto.md').then(result =>{
     expect(result).toBe('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md')
     done()
    })
});
test('Error al ingresar una ruta', (done) => {
  return pathFile('hola').catch(data => {
    expect(data).toBe('no es una ruta hola')
    done()
  });
});
test('Deberia retornar la false si es un directorio',(done)=>{
    return pathFile('./folder/files/').then(result =>{
        expect(result).toEqual(["/home/nayruth/Escritorio/LIM009-fe-md-links/folder/files/app.js", "/home/nayruth/Escritorio/LIM009-fe-md-links/folder/files/carpeta/archivo.md", "/home/nayruth/Escritorio/LIM009-fe-md-links/folder/files/carpeta/documents/readText.md", "/home/nayruth/Escritorio/LIM009-fe-md-links/folder/files/ejemplo.md"])
        done()
    })
});

test('deberia retornar un array de rutas absolutas',(done)=>{
    return markdownFile('./folder/readmeTuto.md').then(result =>{
        expect(result).toEqual(['/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md'])
        done()
    })
})
test('deberia retornar un mensaje diciendo que no es una ruta',(done)=>{
    return markdownFile('./folder/files/app.js').then(result =>{
        expect(result).toBe('No es archivo MArkdown')
        done()
    })
})
test('Deberia retornar un array de rutas absolutas de solo archivos markdown si es un directorio',(done)=>{
    return markdownFile('./folder/').then(result =>{
        expect(result).toEqual([ '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/README.md',
        '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/files/carpeta/archivo.md',
        '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/files/carpeta/documents/readText.md',
        '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/files/ejemplo.md',
        '/home/nayruth/Escritorio/LIM009-fe-md-links/folder/readmeTuto.md' ])
        done()
    })
})