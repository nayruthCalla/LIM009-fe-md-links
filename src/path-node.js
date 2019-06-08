import module from 'path'
import modulefs from 'fs'
// import {fs} from 'fs'
// const fs = require('fs')
export const isAbsoluteRuta = module.isAbsolute;
export const convAbso = module.resolve;
// export const extention = module.basename;
// export const extName = module.extname;
export const isExit = modulefs.exists;
export const isDir = modulefs.readdir;
