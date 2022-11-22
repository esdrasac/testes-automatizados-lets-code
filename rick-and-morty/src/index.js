const express = require('express')
const routes = require('./routes')

const server = express()

server.use(routes)

server.listen(3000, () => console.log('Server listening on PORT:::3000'))