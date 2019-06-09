//ejercicio 3
// let fs = require("fs");
// // let ruta = process.argv;
// let buffer = fs.readFileSync(process.argv[2]);
// let str = buffer.toString().split("\n");
// console.log(str.length - 1);
//ejercicio 4
let fs = require("fs");
// let ruta = process.argv;
let buffer = fs.readFile(process.argv[2], "utf8", (err, data) => {
  if (err) {
    console.log("error: ", err);
  } else {
    // return data;
    console.log(data.toString());
  }
});
// let str = buffer.toString();
// console.log(typeof buffer);
