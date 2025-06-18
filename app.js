const express = require('express')
const app = express()


app.use('/prime',)

const PORT = 3000 || process.env.PORT

app.listen(PORT, () => console.log(`worker ${process.pid} running on port ${PORT}`))
