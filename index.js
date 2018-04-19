var http = require("http");

var handleRequest =function(req, res){
    res.end("You're the best! Don't let anyone tell you otherwise");
};
var handleRequest2 = function(req,res){
    res.end("I'm surprised you're still alive with the lack of braincells you have")
}
var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);
server.listen(7000, function(){
    console.log("Server listening on: http://localhost:7000")
})
server2.listen(7500, function(){
    console.log("Server listening on: http://localhost:7500")
})