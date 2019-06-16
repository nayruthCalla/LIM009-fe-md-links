import {statsLink} from '../src/stats.js'
import {mdLinks} from '../src/md-link.js'
test('Deberia retornar un objeto con tres propiedades , statsLink',()=>{
    return mdLinks('/home/nayruth/Escritorio/LIM009-fe-md-links/folder/',true)
    .then(result =>{
       expect(statsLink(result)).toEqual({ total: 22, unique: 18, broken: 1 })
    })
})