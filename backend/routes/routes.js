const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')
const authCandidato = require('../middleware/authCandidatoController') //controller de autenticação de candidato
const authEmpresa = require('../middleware/authEmpresaController') //controller de autenticação de empresa
const curriculoController = require('../controllers/curriculoController')
const vagaController = require('../controllers/vagaController')
//arquivo para colocar as rotas

//rota de cadastro
router.post('/cadastro/empresas', usuarioController.cadastroEmpresa)
router.post('/cadastro/candidatos', usuarioController.cadastroCandidato)

//rota de login
router.post('/login/candidato', usuarioController.loginCandidato)
router.post('/login/empresa', usuarioController.loginEmpresa)

router.use(authCandidato)
router.use(authEmpresa)

//criar currículo
router.post('/curriculo/:idCandidato', curriculoController.createCurriculo)
router.post('/candidatar', curriculoController.candidatar)

//rota de funcionalidades candidato:
//lista todas as vagas que tem no site para o candidato
router.get('/candidato/vagas', usuarioController.listarVagas)
//pega uma vaga especifica da listagem de vagas para o candidato
router.get('/candidato/vagas/:id', usuarioController.exibirDadosVaga)

//rota de funcionalidades empresa

//rota de listagem de currículos de uma vaga de determinada empresa
router.get('/empresa/vaga/curriculos/:id', curriculoController.listarCurriculos)
//rota de cadastro de vaga
router.post('/cadastro/vaga', vagaController.cadastroVaga)
//rota para alterar uma vaga
router.put('/alterar/vaga/:idVaga', vagaController.alterarVaga)
//rota para listar as vagas da empresa
router.get('/empresa/vagas/:idEmpresa', vagaController.listarVagas)
//rota para deixar uma vaga visível ou não
router.put('/empresa/vagas/toggle', vagaController.toggleVaga)
//rota que exibe dados de uma vaga (essa rota servirá para a alteração da vaga e somente ela)
router.get('/empresa/exibir/vaga/:id', vagaController.exibirDadosVaga)

module.exports = router
