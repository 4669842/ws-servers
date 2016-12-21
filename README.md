# ws-servers

This repo demonstrates deployment of different WebSocket servers powered by
Node.js and Now:

 * **[uws](./uws)**
 * **[ws](./ws)**

## wsbench

A simple `wsbench` program is also included to compare performance between
the servers.

![wsbench results](https://cldup.com/Q0yNsLnH1V.png)

```bash
$ time node wsbench.js wss://echo.websocket.org
connecting to "wss://echo.websocket.org"
100 round trips per client
20 client connections
done!
mean:   8731.95
median: 8683
mode:   8671
range:  626

real  0m10.008s
user  0m0.522s
sys   0m0.101s
```

## License

MIT
