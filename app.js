const express = require('express')
const app = express()
const PrimeRouter = require('./routes/prime')

app.use('/prime', PrimeRouter)

const PORT = 3000 || process.env.PORT


app.listen(PORT, () => console.log(`worker ${process.pid} running on port ${PORT}`))
