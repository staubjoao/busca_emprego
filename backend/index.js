const express = require('express')
const cors = require('cors')
const server = express()
const empresaController = require('./controller/cadastro_empresa.js')

server.use(cors())
server.use('/empresa', empresaController)

server.listen(process.env.PORT, () =>{
  console.log('Servido ativo: http://localhost:')
})
