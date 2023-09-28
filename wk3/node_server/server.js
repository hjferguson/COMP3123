var http = require("http")

const SERVER_PORT = 8088

var server = http.createServer((req, res) => {
    console.log(req.url)
    //res.write(req.url)
    if(req.url == "/"){
        res.write("<h1>Welcome to Node Server</h1>")
    }

    if(req.url == "/login"){
        res.write("<h1>Welcome to log in page</h1>")
    }

    if(req.url == "/logout"){
        res.write("<h1>bye bye</h1>")
    }
    res.end()
})

server.listen(SERVER_PORT)
console.log(`Server running at port:${SERVER_PORT}`)