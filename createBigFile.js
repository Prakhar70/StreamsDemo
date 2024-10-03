const fs = require("fs");

const writeStream = fs.createWriteStream('./bigfile.txt');

for(let i=0;i<5*1e6;i++){
    writeStream.write("standard an unknown printer took a galley of type and scrambled it to ma including versions of Lorem Ipsum.")
}
writeStream.end();