const express = require('express')
const app = express()
const routes = require('./src/routes/routes')
const port = 3000 
app.use('/api',routes)
app.listen(3000,()=>{
    console.log(`The application is listening to the portal no ${port}`)
})
console.log("Sample program")