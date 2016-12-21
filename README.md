# ws-servers

This repo demonstrates deployment of different WebSocket servers powered by
Node.js and Now. To learn how to run and deploy each, follow one of these links:

 * **[µws](./uws)**
 * **[ws](./ws)**
 * **[websocket](./websocket)**
 * **[nodejs-websocket](./nodejs-websocket)**

## wsbench

A simple `wsbench` program is also included to compare performance between
the servers.

<img src="https://cldup.com/hgk5H0-1A4.png" width="511" />

The results show the total elapsed time of 1000 roundtrips by 100 simultaneous
clients against the WebSocket servers listed above, deployed on `now.sh`.
