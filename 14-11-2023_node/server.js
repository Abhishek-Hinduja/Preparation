var http = require('http')
var fs = require('fs')


http.createServer(function(req,res){
    var method = req.method
    var url = req.url
    if (method === "GET"){
        if (url==="/"){
            fs.readFile("./todo/index.html", "utf-8", function(err,data){
                if (err){
                    res.end("Server is not Working")
                }
                else{
                    res.end(data)
                }
               
            })
        }
        else if (url === "/index.js"){
            fs.readFile("./todo/index.js", "utf-8", function(err,data){
                if (err){
                    res.end("Server is not Working")
                }
                else{
                    res.end(data)
                }
               
            })
        }
    }
}).listen(3000, function(){
    console.log("Server is listening")
})