const fs = require("fs");

const server = require("http").createServer();



server.on("request",(req, res)=>{

    //normal reading
    fs.readFile('./bigFile.txt',(err, data)=>{
        if(err) throw err;
        res.end(data);
    })

    //reading using readable streams 
    // const src = fs.createReadStream('./bigfile.txt');
    // src.pipe(res);
})


server.listen(8000);