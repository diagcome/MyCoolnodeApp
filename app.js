const http =  require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.end('<h1> Hellow World </h1>')
});

server.listen(port,()=>{
    console.log("Server running on port" + port)
})

