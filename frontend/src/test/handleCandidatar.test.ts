export {};

const idVagaInvalido = '3';
const idCandidatoInvalido = '4';
const jaCandidatou = {
  idVaga: '2',
  idCandidato: '2',
};
const responseSuccess = {
  ok: true,
  data: 'Candidatura enviada com sucesso :)',
};
const responseVagaInvalida = { ok: false, data: 'Vaga não existe no banco' };
const responseCandidatoInvalido = {
  ok: false,
  data: 'Candidato(a) não existe no banco',
};
const responseJaSeCandidatou = {
  ok: false,
  data: 'Candidato(a) já se candidatou à vaga',
};

const candidatarMock = jest
  .fn()
  .mockImplementation(async (idVaga, idCandidato, token) => {
    if (idVaga === idVagaInvalido && token) {
      return { ok: false, data: 'Vaga não existe no banco' };
    }
    if (idCandidato === idCandidatoInvalido && token) {
      return {
        ok: false,
        data: 'Candidato(a) não existe no banco',
      };
    }
    if (
      idCandidato === jaCandidatou.idCandidato &&
      idVaga === jaCandidatou.idVaga &&
      token
    ) {
      return {
        ok: false,
        data: 'Candidato(a) já se candidatou à vaga',
      };
    }
    return { ok: true, data: 'Candidatura enviada com sucesso :)' };
  });

describe('handleCandidatar', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return success with valid idVaga and idCandidato', async () => {
    const mockToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk4NjQ2NzR9.8IT1Km05SQHq2OiMUp-Xixy2snFTOics2ClscT6z0bE';

    const response = await candidatarMock('1', '1', mockToken);

    expect(response).toEqual(responseSuccess);
  });
  it('should return error with invalid idVaga', async () => {
    const mockToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk4NjQ2NzR9.8IT1Km05SQHq2OiMUp-Xixy2snFTOics2ClscT6z0bE';

    const response = await candidatarMock('3', '1', mockToken);

    expect(response).toEqual(responseVagaInvalida);
  });
  it('should return error with invalid idCandidato', async () => {
    const mockToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk4NjQ2NzR9.8IT1Km05SQHq2OiMUp-Xixy2snFTOics2ClscT6z0bE';

    const response = await candidatarMock('1', '4', mockToken);

    expect(response).toEqual(responseCandidatoInvalido);
  });
  it('should return error with already candidate', async () => {
    const mockToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk4NjQ2NzR9.8IT1Km05SQHq2OiMUp-Xixy2snFTOics2ClscT6z0bE';

    const response = await candidatarMock('2', '2', mockToken);

    expect(response).toEqual(responseJaSeCandidatou);
  });
});
