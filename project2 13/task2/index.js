const fs = require('fs');
const readStream = fs.createReadStream('./text.txt');
const writeStream = fs.createWriteStream('./text2.txt');
let a = 1;
readStream.on('data', (chunk) => {
    writeStream.write(`\nчасть №${a}\n`);
    writeStream.write(chunk);
    a++;
})