const http = require("http");
const port = 8000;

const portHandler = (req,res) =>{
    res.write("<h1>WELCOME TO SERVER</h1>");
    res.end();
};

const server = http.createServer(portHandler);

server.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server started on port :" + port)
});