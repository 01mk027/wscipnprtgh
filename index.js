const WebSocketServer = require('ws');
const express = require('express');

const app = express();
 

let server = app.listen(5000, () => {
    console.log("Server is listening on port 5000");
  });


// Creating a new websocket server
const wss = new WebSocketServer.Server({ server: server })
 
// Creating connection using websocket
wss.on("connection", (ws, req) => {
    console.log("new client connected");
    console.log("== ws_socket.address() start ==");
    console.log(ws._socket.address());
    console.log("== ws_socket.address() stop  ==");

    console.log("== ws._socket.remoteAddress start==");
    console.log(ws._socket.remoteAddress);
    console.log("== ws._socket.remoteAddress stop ==");

    console.log("== ws._socket.remotePort start==");
    console.log(ws._socket.remotePort);
    console.log("== ws._socket.remotePort stop ==");


    // sending message
    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`)
    });
    // handling what to do when clients disconnects from server
    ws.on("close", () => {
        console.log("the client has connected");
    });
    // handling client connection error
    ws.onerror = function () {
        console.log("Some Error occurred")
    }
});

