import { pathFile, markdownFile, join } from '../src/pathFiles.js'
// const path = require('path'); 
describe('verificar si son funciones', () => {
    it('pathFile deberia ser una funcion', () => {
        expect(typeof pathFile).toBe('function')
    });
    it('markdownFile deberia ser una función', () => {
        expect(typeof markdownFile).toBe('function')
    })
})
test('Deberia retornar la ruta enviada', (done) => {
    return pathFile('./folder/readmeTuto.md').then(result => {
        expect(result).toBe(join(`${process.cwd()}/folder/readmeTuto.md`))
        done()
    })
});
test('Error al ingresar una ruta', (done) => {
    return pathFile('hola').catch(data => {
        expect(data).toBe('no es una ruta hola')
        done()
    });
});
test('Deberia retornar la un array de rutas si es un directorio', (done) => {
    return pathFile('./folder/files/').then(result => {
        expect(result).toEqual([join(`${process.cwd()}/folder/files/app.js`), join(`${process.cwd()}/folder/files/carpeta/archivo.md`), join(`${process.cwd()}/folder/files/carpeta/documents/readText.md`), join(`${process.cwd()}/folder/files/ejemplo.md`)])
        done()
    })
});

test('deberia retornar un array de rutas absolutas', (done) => {
    return markdownFile('./folder/readmeTuto.md').then(result => {
        expect(result).toEqual([join(`${process.cwd()}/folder/readmeTuto.md`)])
        done()
    })
})
test('deberia retornar un mensaje diciendo que no es una ruta', (done) => {
    return markdownFile('./folder/files/app.js').then(result => {
        expect(result).toBe('No es archivo MArkdown')
        done()
    })
})
test('Deberia retornar un array de rutas absolutas de solo archivos markdown si es un directorio', (done) => {
    return markdownFile('./folder/').then(result => {
        expect(result).toEqual([
            join(`${process.cwd()}/folder/files/carpeta/archivo.md`),
            join(`${process.cwd()}/folder/files/carpeta/documents/readText.md`),
            join(`${process.cwd()}/folder/files/ejemplo.md`),
            join(`${process.cwd()}/folder/readme.md`),
            join(`${process.cwd()}/folder/readmeTuto.md`)])
        done()
    })
})