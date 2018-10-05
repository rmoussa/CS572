const fs = require('fs');
const http = require('http');
const myServer = http.createServer();

const path = require('path');
const filePath2 = path.join(__dirname, "/SampleTextFile_1000kb.txt");

myServer.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //  Solution 1 with Async Read and write the 
    // fs.readFile(filePath2, (err,data)=>{
    //     if (!err){
    //         res.end(data);
    //     }else{
    //         console.log('Server Error while reading file: ' + err);
    //         res.end('Finished because we have error');
    //     }
    // });

    /* Solution 2 With pipe */
    const readSrc = fs.createReadStream(filePath2);
    readSrc.pipe(res);

    /* Solution 3 with Stream */
    // const stream1 = fs.createReadStream(filePath2);
    // stream1.on('data', (data) => {
    //     if (!res.write(data)) {
    //         stream1.pause();
    //     }
    // });
    // res.on('drain', () => stream1.resume());
    // stream1.on('end', () => res.end());


});


myServer.listen(8081, () => console.log('I am the Server!'));


//I'll order the process time for the previous solution
//readFile 311 ms
// pipe 221 ms	
//Stream 66 ms
