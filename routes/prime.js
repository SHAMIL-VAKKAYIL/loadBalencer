const express = require('express')
const { Worker } = require('worker_threads')
const router = express.Router()

router.get('/', (req, res) => {
    const n = parseInt(req.query.n)

    if (isNaN(n)) return res.status(400).send('invalid number')

    const worker = new Worker('/workers/primeWorker.js', {
        workerData: n
    })

    worker.on('message', (result) => res.json({ primes: result }))
    worker.on('error', (err) => res.status(500).send(err.message))
})

module.exports = router