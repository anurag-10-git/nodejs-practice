const http = require('http');

const routes = require('./routes');


const server = http.createServer(routes);

// let buf1 = Buffer.from('hello');
// let buff2= Buffer.from('world');

// let Data = [buf1,buff2];

// console.log(Data);
// console.log(Buffer.concat(Data));
// console.log(Buffer.concat(Data).toString());

server.listen(3000);

