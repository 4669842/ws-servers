const WebSocket = require('ws')

const address = process.argv[2]
console.log('connecting to %j', address)

const trips = parseInt(process.argv[3], 10) || 100
console.log('%d round trips per client', trips)

const parallel = parseInt(process.argv[4], 10) || 20
console.log('%d client connections', parallel)


function tester() {
  return new Promise((resolve, reject) => {
    let startTime, count

    const ws = new WebSocket(address)
    ws.onopen = function () {
      count = 0
      startTime = new Date()
      ping()
    }

    function ping () {
      if (count === trips) {
        ws.close()
        resolve(Date.now() - startTime)
      } else {
        count++
        ws.send('ping')
      }
    }

    ws.onmessage = ping
    ws.onerror = reject
  })
}


Promise.all(Array(parallel).fill(1).map(() => tester())).then((times) => {
  console.log('done!')
  console.log('mean: %d', mean(times))
  console.log('median: %d', median(times))
  console.log('mode: %d', mode(times))
})

function mean (values) {
  let v = 0
  for (let i = 0; i < values.length; i++) {
    v += values[i]
  }
  return v / values.length
}

function median (values) {
  return 0
}

function mode (values) {
  return 0
}
