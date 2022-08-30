const express = require('express')
const app = express()
const routes = require('./src/routes/routes')

app.use('/api',routes);

console.log("Sample program")