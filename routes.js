const fs = require('fs');

const requestHandler = (req, res)=> {
     const url = req.url;
     const method = req.method;

    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Node js</title></head>')
        res.write('<body><form action="/message" method="POST"><input name="message" type="text"/><br/><button type="submit">Submit Form</button></form></body>')
        res.write('</html>')
        return res.end();
        }
    
        //below statement redirect to localhost 
        if(url === '/message' && method === 'POST'){
            const body = [];
    
            //if data is received run this function
            req.on('data',(chunk)=>{
                 body.push(chunk);
                 console.log(chunk);
            });
    
    
           //on data parsing completed is received run this function
            return req.on('end',()=>{
                const parsedBody = Buffer.concat(body).toString(); //Buffer is stop for data
                console.log(parsedBody);
                const message = parsedBody.split('=')[1];
    
                //
                fs.writeFile('message.txt',message,(error)=>{
                    res.statusCode = 302;
                    res.setHeader('Location','/');
                    return res.end();  
                });
            });
    
        }
    
        res.setHeader('content-type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Node js</title></head>')
        res.write('<body><h1>welcome to node js</h1></body>')
        res.write('</html>')
        res.end();
}

module.exports = requestHandler;