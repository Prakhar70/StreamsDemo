const fs = require('fs');
const {Transform} = require ('stream');

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

const upperCaseTransform = new Transform({
    transform(chunk,encoding, callback){
       this.push(chunk.toString().toUpperCase());
       callback();
    }
})

const writeAbleStream = fs.createWriteStream('outfile');

writeAbleStream.on('finish', ()=>{
    console.log('finish writing');
})

readableStream
.pipe(upperCaseTransform)
.pipe(writeAbleStream)