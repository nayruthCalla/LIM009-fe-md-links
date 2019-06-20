#!/usr/bin/env node
import { mdLinks } from './md-link.js'
import { statsLink } from './stats.js'
// import {cliValidate} from './cliValidate.js'
// const cli = () => {
    const path = process.argv[2]
    const option = {
        optionA: process.argv[4],
        optionB: process.argv[3],
        
    }
    if(path === undefined){
        console.log('Usage md-links PATH [--stats] [--validate]')
        }
        else {
            if(option.optionB=== undefined || option.optionB === '--validate' ||option.optionA === undefined && option.optionB === '--stats' || option.optionA === '--validate'){
                mdLinks(path,option.optionB === '--validate' || option.optionB === '--stats' || option.optionA === '--validate'?{validate:true}:option)
                .then(result =>{
                    if(option.optionB === undefined && option.optionB === undefined){
                        result.forEach(element =>console.log(`ruta: ${element.file}, link : ${element.href}, texto : ${element.text}`))
                    }
                    else if(option.optionB === '--stats' && option.optionA === '--validate'&& process.argv[5] === undefined){
                        console.log(`Total:${statsLink(result).total}\nUnique:${statsLink(result).unique}\nBroken:${statsLink(result).broken}`)
                    }else{
                        option.optionB==='--stats'&& process.argv[5] === undefined 
                        ?console.log(`Total:${statsLink(result).total}\nUnique:${statsLink(result).unique}`)
                        :option.optionB === '--validate' && option.optionA === undefined && process.argv[5] === undefined
                        ?result.forEach(element =>console.log(`ruta: ${element.file}, link : ${element.href}, ${element.ok}, ${element.status} , texto : ${element.text}`))
                        :console.log('Usage md-links PATH [--stats] [--validate]')
                    }
                      
                })
                .catch(err => console.log(err))
            }else{
                console.log('Usage md-links PATH [--stats] [--validate]')
            } 
            
        
        }
    // cliValidate(path,option)
    
    