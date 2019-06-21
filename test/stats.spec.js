import {statsLink} from '../src/stats.js'
import {mdLinks} from '../src/md-link.js'
test('Deberia retornar un objeto con tres propiedades , statsLink',(done)=>{
    return mdLinks('./folder/',{validate:true})
    .then(result =>{
       expect(statsLink(result)).toEqual({ total: 22, unique: 18, broken: 1 })
       done()
    })
})