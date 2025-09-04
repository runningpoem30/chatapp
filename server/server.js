const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const {Server} = require("socket.io");


const server = http.createServer(app);
const io = new Server(server)
// this thing will handle socket.io 

io.on('connection' , (socket)=> {
  console.log("a new user has connected" , socket.id)
})

io.on('connection' , (socket) => {
  socket.on('chat message' , (msg) => {
    console.log('message ' + msg)
  })
})
 
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});


io.emit('hello'  , 'world')

// serve static files (css, js, images) from src folder
app.use(express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "src", "index.html"));
});

server.listen(9000, () => console.log("Server is listening on port 9000"));
