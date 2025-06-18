const cluster = require('cluster')
const os = require('os')
const numCPUs = os.cpus().length

if (cluster.isPrimary) {
    console.log(`Master ${process.pid} running`)
    for (let i = 0; i < numCPUs;i++){
        cluster.fork()
    }

}else{
    require('./app')
}