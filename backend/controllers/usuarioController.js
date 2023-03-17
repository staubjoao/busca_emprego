const models = require('../models');
const jwt = require('jsonwebtoken');
//const { sequelize } = require('../models') coisa do select em tempos sombrios

let empresa = models.Empresa
let candidato = models.Curriculo
const vaga = models.Vaga

const usuarioController = {
  cadastroEmpresa: async (req, res) => {
    await empresa
      .create(req.body)
      .then(() => {
        return res.json({
          error: false,
          message: 'Empresa criada com sucesso.',
        });
      })
      .catch((erro) => {
        return res.status(400).json({
          error: true,
          message: 'Falha na criação da empresa.',
        });
      });
  },

  cadastroCandidato: async (req, res) => {
    await candidato
      .create(req.body)
      .then(() => {
        return res.json({
          error: false,
          message: 'Candidato(a) criado(a) com sucesso.',
        });
      })
      .catch((erro) => {
        return res.status(400).json({
          error: true,
          message: 'Falha na criação do(a) candidato(a).',
        });
      });
  },

  loginCandidato: async (req, res) => {
    const candidato = models.Curriculo;

    let usuario = await candidato.findOne({
      where: {
        email: req.body.email,
        senha: req.body.senha,
      },
    });

    if (!usuario)
      return res.json({ erro: true, mensagem: 'Email ou senha inválido' });

    const token = jwt.sign(
      { _id: usuario._id, _cpf: usuario._cpf },
      `${process.env.SECRET}`
    );
    console.log('NAME USER', usuario);
    res.json({
      id: usuario.id,
      nome: usuario.nome,
      token: token,
    });
  },

  loginEmpresa: async (req, res) => {
    const empresa = models.Empresa;

    let usuario = await empresa.findOne({
      where: {
        cnpj: req.body.cnpj,
        senha: req.body.senha,
      },
    });

    if (!usuario)
      return res.json({ erro: true, mensagem: 'Cnpj ou senha inválido' });

    const token = jwt.sign(
      { _id: usuario._id, _cnpj: usuario._cnpj },
      process.env.SECRET
    );

    res.json({
      id: usuario.id,
      token: token,
      nome: usuario.nome,
    });
  },

  listarVagas: async (req, res) => {
    await vaga
      .findAll({
        where: { visualizar: true },
        include: [
          {
            model: empresa,
            required: true,
            attributes: ['nome', 'logo'],
          },
        ],
      })
      .then((vagas) => res.json({ vagas }))
      .catch((erro) => {
        return res.status(400).json({
          error: true,
          message: erro,
        });
      });
  },
  exibirDadosVaga: async (req, res) => {
    await vaga
      .findOne({
        where: { id: req.params.id },
      })
      .then((vagas) => res.json({ vagas }))
      .catch((erro) => {
        return res.status(400).json({
          error: true,
          message: erro,
        });
      });
  },
};


  //Esse aqui é o certo :D
  // listarCurriculo: async (req, res) => {
  //   await curriculovaga
  //     .findAll({
  //       where: { VagaId: req.params.id },
  //       include: [
  //         {
  //           model: candidato,
  //           required: true
  //         }
  //       ]
  //     })
  //     .then(vagas => res.json({ vagas }))
  //     .catch(erro => {
  //       return res.status(400).json({
  //         error: true,
  //         message: erro
  //       })
  //     })
  // }

  //Select em casos de dar td errado
  //   await sequelize
  //     .query(
  //       'SELECT * FROM curriculosvagas cv INNER JOIN curriculos cu ON cu.id = cv.CurriculoId WHERE cv.VagaId = ' +
  //         req.params.id,
  //       { type: sequelize.QueryTypes.SELECT }
  //     )
  //     .then(vagas => res.json({ vagas }))
  //     .catch(erro => {
  //       return res.status(400).json({
  //         error: true,
  //         message: erro
  //       })
  //     })
  // }


module.exports = usuarioController
