var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/static"));
// ^^^ Installations and Setup ^^^

// app.get("/", function(request, response){
//     response.send("<h1>Nihao</h1>");
// })

// console.log(__dirname);


app.get("/", function(request, response){
    response.render("index");
});

app.listen(8000, function() {
    console.log("listenning on 8000");
});