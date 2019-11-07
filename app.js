//importing modules
var express = require("express"); //include express
var mongoose = require("mongoose"); //include mongoose to interact with mongoDB
var bodyparser = require("body-parser"); //include body-parser to interact with front end
var cors = require("cors"); //include cors to create middle ware functionalities
var path = require("path"); //include path to set path for interaction

var app = express(); //create express object

const route = require("./routes/route");

//connect to mondodb
mongoose.connect("mongodb://localhost:27017/contactlist");

//switch on the connection
mongoose.connection.on("Connected", () => {
  console.log("Connected to db mongo @ 27017");
});

mongoose.connection.on("Error", err => {
  if (err) {
    console.log("Error in DB Connection: " + err);
  }
});
const port = 3000; //port to run the application
//adding middleware cors
app.use(cors());

//adding body-parser
app.use(bodyparser.json());

//adding routes
app.use("/api", route);

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(port, () => console.log("Server started on port: " + port));
