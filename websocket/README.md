# websocket

This example shows deploying a [websocket](https://github.com/theturtle32/WebSocket-Node) to Now.

The WebSocket client is expected to send the string `"ping"` and this
server will respond with `"pong"`. Any other interaction and the server
will close the socket connection.

## How to deploy

First, [download `now`](https://zeit.co/download). Then, clone the
repository and run `now`:

```bash
$ git clone git://github.com/now-examples/ws-servers
$ cd ws-servers/websocket
$ now
```

> Example: [wss://now-examples-websocket-fuskdxvnbi.now.sh](https://now-examples-websocket-fuskdxvnbi.now.sh/_src/?f=server.js)

## License

MIT
