const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const authCandidato = require('../middleware/authCandidatoController'); //controller de autenticação de candidato
const authEmpresa = require('../middleware/authEmpresaController'); //controller de autenticação de empresa
const curriculoController = require('../controllers/curriculoController');
const vagaController = require('../controllers/vagaController');
//arquivo para colocar as rotas

//rota de cadastro
router.post('/cadastro/empresas', usuarioController.cadastroEmpresa);
router.post('/cadastro/candidatos', usuarioController.cadastroCandidato);

//rota de login
router.post('/login/candidato', usuarioController.loginCandidato);
router.post('/login/empresa', usuarioController.loginEmpresa);

router.use(authCandidato);

//criar currículo
router.post('/curriculo/:idCandidato', curriculoController.createCurriculo);
router.post('/candidatar', curriculoController.candidatar);

// //rota de funcionalidades candidato
router.get('/candidato/vagas', vagaController.listarVagas);

router.use(authEmpresa);
router.post('/cadastro/vaga', vagaController.cadastroVaga);
router.put('/alterar/vaga/:idVaga', vagaController.alterarVaga);
router.get('/empresa/vagas/:idEmpresa', vagaController.listarVagas);
router.put('/empresa/vagas/toggle', vagaController.toggleVaga);
router.get('/vagas/exibir/:id', vagaController.exibirDadosVaga);
router.get(
  '/empresa/vaga/curriculos/:id',
  curriculoController.listarCurriculos
);

module.exports = router;
