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

//rota de cadastro e listagem das vagas
router.post('/cadastro/vaga', vagaController.cadastroVaga);
router.get('/listar/vagas', vagaController.listarVagas);

router.use(authEmpresa);

module.exports = router;
