#!/usr/bin/env node
import { mdLinks } from './md-link.js'
import { statsLink } from './stats.js'
const path = process.argv[2]
const option = {
    validate: process.argv[4],
    stats: process.argv[3]
}

if(path === undefined){
console.log('Usage md-links PATH [--stats] [--validate]')
}
else {
    if(option.stats=== undefined || option.stats === '--validate' ||option.validate === undefined && option.stats === '--stats' || option.validate === '--validate'){
        mdLinks(path,option.stats === '--validate' || option.stats === '--stats' || option.validate === '--validate'?{validate:true}:option)
        .then(result =>{
            if(option.stats === undefined && option.stats === undefined){
                result.forEach(element =>console.log(`ruta: ${element.file}, link : ${element.href}, texto : ${element.text}`))
            }
            else if(option.stats === '--stats' && option.validate === '--validate'){
                console.log(`Total:${statsLink(result).total}\nUnique:${statsLink(result).unique} \nBroken: ${statsLink(result).broken}`)
            }else{
                option.stats==='--stats'
                ?console.log(`Total:${statsLink(result).total}\nUnique:${statsLink(result).unique}`)
                :option.stats === '--validate' && option.validate === undefined
                ?result.forEach(element =>console.log(`ruta: ${element.file}, link : ${element.href}, ${element.ok}, ${element.status} , texto : ${element.text}`))
                :console.log('Usage md-links PATH [--stats] [--validate]')
            }
              
        })
    }else{
        console.log('Usage md-links PATH [--stats] [--validate]')
    } 
    

}

