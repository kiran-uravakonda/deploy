var http=require('http')
var server=http.createServer((req,res)=>{
    res.writeHead(200)
    res.end("welcome to nodejs")
})

server.listen(2000,()=>{
    console.log("server running on 2000 port")
})