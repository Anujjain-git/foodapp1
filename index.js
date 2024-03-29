const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const port = 3001
const cors = require('cors')
const mongoDB = require("./db");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
mongoDB();



app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(cors());
app.get("/", function (req, res) {
    app.use(express.static(path.resolve(__dirname, "reactpart", "build")));
    res.sendFile((path.join(__dirname, "/reactpart/build/index.html")));
})

app.use('/api', require('./Routes/CreateUser'));

app.use('/api', require('./Routes/DisplayData'));

app.use('/api', require('./Routes/OrderData'));



app.listen(process.env.PORT || 3001, function (req, res) {
    console.log("Server up at " + port);
}) 