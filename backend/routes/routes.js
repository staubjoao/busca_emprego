const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')

//arquivo para colocar as rotas

//rota de cadastro
router.post('/cadastro', usuarioController.cadastro)

//rota de login
router.post('/login', usuarioController.login)

module.exports = router
