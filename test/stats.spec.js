import {statsLink} from '../src/stats.js'
import { join } from '../src/pathFiles.js'
test('Deberia retornar un objeto con tres propiedades , statsLink',(done)=>{
    expect(statsLink([
        { file: join(`${process.cwd()}\\tests\\file-test\\file2-test\\README1.md`),
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown' },
        { file: join(`${process.cwd()}\\tests\\file-test\\README.md`),
          href: 'https://nodeschool.io/s/',
          text: 'Markdown' },
        { file: join(`${process.cwd()}\\tests\\file-test\\file3\\README.md`),
          href: 'https://es.noexiste.org/',
          text: 'Markdown' }
      ])).toEqual({ total: 3, unique: 3, broken: 0 })
      done()    
})