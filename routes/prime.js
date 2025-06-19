const express = require('express')
const { Worker } = require('worker_threads')
const path = require('path')
const router = express.Router()


router.get('/', (req, res) => {
    const n = parseInt(req.query.n)

    if (isNaN(n)) return res.status(400).send('invalid number')
    const workerPath = path.resolve(__dirname, '../workers/primeWorker.js')
    const worker = new Worker(workerPath, {
        workerData: n
    })

    worker.on('message', (result) => res.json({ primes: result }))
    worker.on('error', (err) => res.status(500).send(err.message))
})

module.exports = router