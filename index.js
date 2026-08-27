const express = require('express');
const port = 3002;
const db = require('./config/db/db');
const route = require('./routes/route');
const bodyParser = require('body-parser');

db();
const server = express();

server.set("view engine", "ejs");

// Middlewares
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use("/uploads", express.static("uploads"));
server.use("/", route);

server.listen(port, (err) => {
    if (!err) {
        console.log("Server is running on port:", port);
    } else {
        console.log("Error launching server:", err);
    }
});
