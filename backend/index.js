const express = require('express')
const cors = require('cors')
const server = express()

server.use(cors())

server.get('/', req => {
  console.log('rodou!')
})

server.listen(3000, () => {
  console.log('Server is running!')
})
