const express = require('express')

const server = express()

server.post('/empresa', () =>{
    console.log('RODOU')
})

