var ws = require('nodejs-websocket')

var server = ws.createServer(function (conn) {
  conn.on('text', function (message) {
    if (message === 'ping') {
      conn.sendText('pong')
    } else {
      conn.sendText('ERROR: expected "ping"!')
      conn.close()
    }
  })
}).listen(3000)
