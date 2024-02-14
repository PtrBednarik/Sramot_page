const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Handle CORS + Middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "HEAD, OPTIONS, GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// Database
const uri = "mongodb+srv://piederus22:DBMango@sramotdb.y0tr5nn.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB connected!")
    })
    .catch(err => console.log(err))

app.use(bodyParser.json())

//routes
app.get("/", (res, req) => {
    res.send("Hey Home page!")
})

const TodosRoute = require('./routes/Todos');
app.use('/todos', TodosRoute);

const PhotosRoute = require('./routes/Photos');
app.use('/photos', PhotosRoute)

//start the server
app.listen(3000, () => {
    console.log("Listening at port 3000")
})
