var http = require('http');
var fs = require('fs');

var port = 3000;

var server = http.createServer(function(request,Response) {
    if (request.method === "GET"){
        if (request.url === "/"){
            fs.readFile("./Gourav.html","utf-8",function(err,data){
                Response.end(data)
            })
        }
        else if(request.url==="/about"){
            Response.end("Its an About Page")
        }
        else{
            Response.end("Invalid URL")
        }

    }
    else{
        console.log("Invalid Method")
    }
});

server.listen(port,  () => {
  console.log(`Server is running `);
});


// var request = new XMLHttpRequest()    #Ajax Method
// request.open("POST","/about")

// request.send()

// request.addEventListener("load",function(){
//     console.log(request.ResponseText)
// })