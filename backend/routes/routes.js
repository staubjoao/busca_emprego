const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const authCandidato = require('../controllers/authCandidatoController'); //controller de autenticação de candidato
const authEmpresa = require('../controllers/authEmpresaController'); //controller de autenticação de empresa
const curriculoController = require('../controllers/curriculoController');
//arquivo para colocar as rotas

//rota de cadastro
router.post('/cadastro/empresas', usuarioController.cadastroEmpresa);
router.post('/cadastro/candidatos', usuarioController.cadastroCandidato);

//rota de login
router.post('/login/candidato', usuarioController.loginCandidato);

router.post('/login/empresa', usuarioController.loginEmpresa);

//criar currículo
router.post('/curriculo/:idCandidato', curriculoController.createCurriculo);
//rota de cadastro e listagem das vagas
router.post('/cadastro/vaga', usuarioController.cadastroVaga);

router.get('/listar/vagas', usuarioController.listarVagas);

//Exemplo para usar alguns dos controllers de autorização
// router.get('/vagas', authEmpresa, (res) => {
//   res.send('Somente usuário empresa pode acessar está rota')
// })

module.exports = router;
