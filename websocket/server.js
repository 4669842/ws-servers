var http = require('http')
var WebSocketServer = require('websocket').server

var server = http.createServer(function(request, response) {
  response.writeHead(404)
  response.end()
})
server.listen(3000)

var wsServer = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: false
})

wsServer.on('request', function(request) {
  var connection = request.accept()
  connection.on('message', function(message) {
    connection.sendUTF('pong')
  })
})
