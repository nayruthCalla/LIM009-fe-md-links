// console.log(process.argv.length);
let cont = 0;
for (let i = 2; i < process.argv.length; i++) {
  cont += parseInt(process.argv[i]);
}

console.log(cont);
