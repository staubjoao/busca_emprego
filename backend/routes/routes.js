const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')
const authCandidato = require('../controllers/authCandidatoController') //controller de autenticação de candidato
const authEmpresa = require('../controllers/authEmpresaController') //controller de autenticação de empresa

//arquivo para colocar as rotas

//rota de cadastro
router.post('/cadastro/empresas', usuarioController.cadastroEmpresa)
router.post('/cadastro/candidatos', usuarioController.cadastroCandidato)

//rota de login
router.post('/login/candidato', usuarioController.loginCandidato)
router.post('/login/empresa', usuarioController.loginEmpresa)

//rota de vagas
router.post('/cadastro/vaga', authEmpresa, usuarioController.cadastroVaga)
router.get('/listar/vagas', authCandidato, usuarioController.listarVagas)

module.exports = router
