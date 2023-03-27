const { listarCurriculoPorId } = require('./caminho/para/a/funcao/listarCurriculoPorId');

test('listarCurriculoPorId deve retornar o currículo correto', async () => {
  const id = '1';
  const resultadoEsperado = {
    nome: 'Fulano de Tal',
    idade: 30,
    experienciaProfissional: [
      {
        empresa: 'Empresa A',
        cargo: 'Analista de Sistemas',
        periodo: '2010-2015'
      },
      {
        empresa: 'Empresa B',
        cargo: 'Gerente de Projetos',
        periodo: '2015-2020'
      }
    ]
  };

  const resultadoObtido = await listarCurriculoPorId(id);
  
  expect(resultadoObtido).toEqual(resultadoEsperado);
});
