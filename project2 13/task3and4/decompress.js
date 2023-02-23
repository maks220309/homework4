const fs = require('fs')
const zlib = require('zlib')
const decompress = () => {
    const unzip = zlib.createUnzip()
    const input = fs.createReadStream('./text.txt')
    const output = fs.createWriteStream('./index.html')
    input.pipe(unzip).pipe(output)
}
decompress()