var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({ port: 3000 })

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    if (message === 'ping') {
      ws.send('pong')
    } else {
      ws.send('ERROR: expected "ping"!')
      ws.close()
    }
  })
})
