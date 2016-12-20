ws
---

This example shows deploying a [`ws`](https://github.com/websockets/ws) WebSocket
server to Now.

The WebSocket client is expected to send the string `"ping"` and this
server will respond with `"pong"`. Any other interaction and the server
will close the socket connection.

```bash
$ git clone git://github.com/now-examples/ws-servers
$ cd ws-servers/ws
$ now
```
