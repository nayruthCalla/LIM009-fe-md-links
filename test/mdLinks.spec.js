import {mdLinks} from '../src/md-link.js'
import { exportAllDeclaration } from '@babel/types';
test('Deberia retornar un array de obejtos',(done)=>{
    return mdLinks('./folder/readmeTuto.md',{validate:true})
    .then(result =>{
        expect(result).toEqual([{ href: 'https://github.com/nodejs/node/blob/master/doc/topics/blocking-vs-non-blocking.md',
        text: 'LABORATORIA',
        file:
         './folder/readmeTuto.md',
        ok: 'fail',
        status: 404 }])
        done()
    })

}) 