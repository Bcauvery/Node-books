const express = require('express')
const app = express()
const port = process.env.port || 5000

const route = require('./routes/route')

app.use('/' , route)

app.listen(port, console.log(`Serverstarted at port ${port}`));
