const fs = require('fs')
let readStream = fs.createReadStream('./text.txt');
readStream.on('data', (chunk) => {
    // console.log(`\n************${chunk.toString()}\n`)
    console.log('************')
    console.log(chunk)
})