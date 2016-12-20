# ws-servers

This repo demonstrates deployment of different WebSocket servers powered by
Node.js and Now:

 * **[uws](./uws)**
 * **[ws](./ws)**

## wsbench

A simple `wsbench` program is also included to compare performance between
the servers

```bash
$ time node wsbench.js wss://echo.websocket.org
connecting to "wss://echo.websocket.org"
100 round trips per client
20 client connections
done!
mean: 8755.6
median: 0
mode: 0

real  0m10.115s
user  0m0.531s
sys 0m0.105s
```

## License

MIT
