var express = require('express');

const SERVER_PORT = 8089;
var app = express();

app.use("/test", express.static("./public"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to Express server</h1>");
    res.end();
})

app.get("/home", (req, res) => {
    res.status(200).send("<h1>Home Page</h1>");
    res.end();
})

app.get("/hello", (req,res) => {
    res.status(200).send("<h1>Hello Express JS!</h1>")
    res.end
})

app.post("/person", (req, res) => {
    // const p = {
    //     pid: 1,
    //     pnm: "Harlan Ferguson",
    //     city: "Toronto"
    // }
    // res.send(p);
    
    res.json(names);
    
})

app.get("/person", (req, res) => {
    const p = {
        pid: 1,
        pnm: "Harlan Ferguson",
        city: "Toronto"
    }
    res.send(p);
})

//http://localhost:8089/student/pritesh/patel
//path parameter
app.get("/student/:fname/:lname", (req,res) => {
    //res.json(req.params);
    const {fname, lname} = req.params;
    res.send(`Welcome ${fname} ${lname}`);
});

//http://localhost:8089/student?fnm=pritesh&lnm=patel
//query parameter
app.get("/emp", (req,res) => {
    if(req.query.fnm == underfined){
        res.send("please send fnm as query");
    }
})

//use postman
app.post("/faculty", (req,res) => {
    let data = req.body;
    console.log(data);

    res.send(data)
})

var names = ["boston", "lettuce", "driving", "crooner"];


app.listen(SERVER_PORT, () => {
    console.log("Server running on port: " + SERVER_PORT);
})