# uws

This example shows deploying a [µWebSockets
server](https://github.com/uWebSockets/uWebSockets) to Now.

The WebSocket client is expected to send the string `"ping"` and this
server will respond with `"pong"`. Any other interaction and the server
will close the socket connection.

## How to deploy

First, [download `now`](https://zeit.co/download). Then, clone the
repository and run `now`:

```bash
$ git clone git://github.com/now-examples/ws-servers
$ cd ws-servers/uws
$ now
```

> Example: [wss://now-examples-uws-vcclfgrabp.now.sh](https://now-examples-uws-vcclfgrabp.now.sh/_src/?f=server.js)

## License

MIT
