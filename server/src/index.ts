import {server as WebSocketServer} from "websocket"
import http from 'http'



// doing it step by step 

// first we have to create a regular http server
// then we attach websocet server to the http server
// origin check (security)
// handling websocket requests
// handling messages 
// handling disconnection


var server = http.createServer(function(request:any , response:any){
    console.log((new Date()) + 'request received for' + request.url)

  
    response.writeHead(404);
    response.end()

    // we are not serving http content 
    //used to send a response header 
    // doing this because this only serves websocket request , this is only meant for that , there is no content to server for a webpage here 
})


server.listen(8080 , function() {
    console.log((new Date()) + 'server is listening on port 8000')
})



// attaching websocket server to http server

const wsServer = new WebSocketServer({
    httpServer : server,
    autoAcceptConnections : false

})


// cross origin thing that we need to do 

function originIsAllowed(origin: String) {
    return true
}