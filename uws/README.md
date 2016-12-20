uws
---

This example shows deploying a [µWebSockets
server](https://github.com/uWebSockets/uWebSockets) to Now.

The WebSocket client is expected to send the string `"ping"` and this
server will respond with `"pong"`. Any other interaction and the server
will close the socket connection.

```bash
$ git clone git://github.com/now-examples/ws-servers
$ cd ws-servers/uws
$ now
```
