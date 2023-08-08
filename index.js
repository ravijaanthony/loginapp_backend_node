const express = require("express");
var http = require("http");

const app = express();
const port = process.env.PORT || 5000;
var server = http.createServer(app);
var io = require("socket.io")(server);

// middleware
app.use(express.json());
var clients = {};


// dev socket.io client
io.on("connection", (socket) => {
    console.log("connected");
    console.log(socket.id, " has joined");
    socket.on("signin", (id) => {
        console.log(id);
        clients[id] = socket;
        console.log(clients);

    })
    socket.on("message",(msg)=>{
        console.log(msg);
    })


});

server.listen(port, "0.0.0.0", () => {
    console.log("Server started");
});