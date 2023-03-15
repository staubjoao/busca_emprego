const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')
const authCandidato = require('../controllers/authCandidatoController') //controller de autenticação de candidato
const authEmpresa = require('../controllers/authEmpresaController') //controller de autenticação de empresa
const curriculoController = require('../controllers/curriculoController')
const vagaController = require('../controllers/vagaController')
//arquivo para colocar as rotas

//rota de cadastro
router.post('/cadastro/empresas', usuarioController.cadastroEmpresa)
router.post('/cadastro/candidatos', usuarioController.cadastroCandidato)

//rota de login
router.post('/login/candidato', usuarioController.loginCandidato)
router.post('/login/empresa', usuarioController.loginEmpresa)

//criar currículo
router.post('/curriculo/:idCandidato', curriculoController.createCurriculo)

//listar currículos
router.get('/vagas/:idVaga/curriculos', curriculoController.listarCurriculos)
router.get('/curriculo/:idCurriculo', curriculoController.listarCurriculo)

//rota de funcionalidades candidato
router.get('/candidato/vagas', usuarioController.listarVagas)

//rota de cadastro e listagem das vagas
router.post('/cadastro/vaga', vagaController.cadastroVaga)
router.post('/alterar/vaga', vagaController.alterarVaga)
router.get('/candidato/vagas', usuarioController.listarVagas)
router.get('/empresa/vagas/:idEmpresa', vagaController.listarVagas)
router.put('/empresa/vagas/toggle', vagaController.toggleVaga)

module.exports = router
