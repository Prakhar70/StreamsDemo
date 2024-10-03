const fs = require('fs')

const readableStream = fs.createReadStream('largeFile.txt', 'utf-8');

readableStream.on('data', (chunk) => {
    console.log("Recieved chunk", chunk);
})

readableStream.on('end', () => {
    console.log("Finish reading  file");
})

readableStream.on('error', (err) => {
    console.log("Error reading file");
}) 