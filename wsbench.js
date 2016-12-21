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
  const sorted = times.sort((a, b) => a - b)
  console.log('done!')
  console.log('mean:   %d', mean(sorted))
  console.log('median: %d', median(sorted))
  console.log('mode:   %d', mode(sorted))
  console.log('range:  %d', range(sorted))
})

function mean (values) {
  let v = 0
  for (let i = 0; i < values.length; i++) {
    v += values[i]
  }
  return v / values.length
}

function median (values) {
  return values[Math.ceil(values.length / 2)]
}

function mode (values) {
  let maxValue, maxCount = 0
  for (let value of new Set(values)) {
    const count = values.filter((v) => v === value).length
    if (count > maxCount) {
      maxValue = value
      maxCount = count
    }
  }
  return maxValue
}

function range (values) {
  const min = values[0]
  const max = values[values.length - 1]
  return max - min
}
