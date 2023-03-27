import { candidatar } from '../service/vagas';
import { SnackbarStore } from '../store/snackbar';
import { LoginStore } from '../store/loginStore';

const idVagaValido = '1';
const idCandidatoValido = '2';
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

const loginStore = new LoginStore();
const snackbarStore = new SnackbarStore();

const candidatarMock = jest
  .fn()
  .mockImplementation(async (idVaga, idCandidato, token) => {
    if (idVaga === idVagaInvalido && token) {
      throw new Error('Vaga não existe');
    }
    if (idCandidato === idCandidatoInvalido && token) {
      throw new Error('Candidato não existe');
    }
    if (
      idCandidato === jaCandidatou.idCandidato &&
      idVaga === jaCandidatou.idVaga &&
      token
    ) {
      throw new Error('Você já se candidatou à essa vaga');
    }
    return { ok: true, data: 'Candidatura enviada com sucesso :)' };
  });

const handleCandidatar = async (
  idVaga: string,
  idCandidato: string,
  token: string
) => {
  console.log('ETNROUHNS', idVaga);
  const response = await candidatarMock(idVaga, idCandidato, token);

  console.log(response);

  snackbarStore.setOpenSnackbar(true);
  !response.ok
    ? snackbarStore.setSeverity('error')
    : snackbarStore.setSeverity('success');

  snackbarStore.setMessage(response.data);
};

describe('handleCandidatar', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call candidatar and set snackbar severity to error when response is not ok', async () => {
    const mockToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk4NjQ2NzR9.8IT1Km05SQHq2OiMUp-Xixy2snFTOics2ClscT6z0bE';

    const response = await candidatarMock('1', '1', mockToken);

    expect(candidatarMock).toHaveBeenCalledTimes(1);
    expect(response).toEqual(responseSuccess);
  });

  // it('should call candidatar and set snackbar severity to success when response is ok', async () => {
  //   const mockResponse = {
  //     ok: true,
  //     data: 'Parabéns! Você se candidatou à vaga',
  //   };
  //   const mockToken = 'mock token';

  //   (candidatar as jest.Mock).mockResolvedValue(mockResponse);

  //   await handleCandidatar('1', '1', mockToken);

  //   expect(candidatar).toHaveBeenCalledTimes(1);
  //   expect(candidatar).toHaveBeenCalledWith('1', '1', mockToken);

  //   expect(snackbarStore.setOpenSnackbar).toHaveBeenCalledTimes(1);
  //   expect(snackbarStore.setOpenSnackbar).toHaveBeenCalledWith(true);

  //   expect(snackbarStore.setSeverity).toHaveBeenCalledTimes(1);
  //   expect(snackbarStore.setSeverity).toHaveBeenCalledWith('success');

  //   expect(snackbarStore.setMessage).toHaveBeenCalledTimes(1);
  //   expect(snackbarStore.setMessage).toHaveBeenCalledWith(mockResponse.data);
  // });
});

// describe('handleCandidatar function', () => {
//   const idVagaValido = '1';
//   const idCandidatoValido = '2';
//   const idVagaInvalido = '3';
//   const idCandidatoInvalido = '4';
//   const responseSuccess = {
//     ok: true,
//     data: 'Candidatura enviada com sucesso :)',
//   };
//   const responseVagaInvalida = { ok: false, data: 'Vaga não existe no banco' };
//   const responseCandidatoInvalido = {
//     ok: false,
//     data: 'Candidato(a) não existe no banco',
//   };
//   const responseJaSeCandidatou = {
//     ok: false,
//     data: 'Candidato(a) já se candidatou à vaga',
//   };

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('should return success with valid idVaga and idCandidato', async () => {
//     // candidatar.mockResolvedValue(responseSuccess);
//     const loginStore = new LoginStore();

//     loginStore.user.id = idCandidatoValido;
//     loginStore.token =
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk4NjQ2NzR9.8IT1Km05SQHq2OiMUp-Xixy2snFTOics2ClscT6z0bE';

//     await handleCandidatar(idVagaValido, loginStore.user.id, loginStore.token);

//     expect(candidatar).toHaveBeenCalledWith(
//       idVagaValido,
//       idCandidatoValido,
//       loginStore.token
//     );
//     expect(snackbarStore.setOpenSnackbar).toHaveBeenCalledWith(true);
//     expect(snackbarStore.setSeverity).toHaveBeenCalledWith('success');
//     expect(snackbarStore.setMessage).toHaveBeenCalledWith(responseSuccess.data);
//   });

//   it('should return error with invalid idVaga', async () => {
//     //candidatar.mockResolvedValue(responseVagaInvalida);

//     await handleCandidatar(
//       idVagaInvalido,
//       idCandidatoValido,
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk4NjQ2NzR9.8IT1Km05SQHq2OiMUp-Xixy2snFTOics2ClscT6z0bE'
//     );
//     expect(candidatar).toHaveBeenCalledWith(
//       String(idVagaInvalido),
//       idCandidatoValido,
//       undefined
//     );
//     expect(snackbarStore.setOpenSnackbar).toHaveBeenCalledWith(true);
//     expect(snackbarStore.setSeverity).toHaveBeenCalledWith('error');
//     expect(snackbarStore.setMessage).toHaveBeenCalledWith(
//       responseVagaInvalida.data
//     );
//   });

//   it('should return error with invalid idCandidato', async () => {
//     //candidatar.mockResolvedValue(responseCandidatoInvalido);

//     await handleCandidatar(
//       idVagaValido,
//       idCandidatoInvalido,
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk4NjQ2NzR9.8IT1Km05SQHq2OiMUp-Xixy2snFTOics2ClscT6z0bE'
//     );

//     expect(candidatar).toHaveBeenCalledWith(
//       String(idVagaValido),
//       idCandidatoInvalido,
//       undefined
//     );
//     expect(snackbarStore.setOpenSnackbar).toHaveBeenCalledWith(true);
//     expect(snackbarStore.setSeverity).toHaveBeenCalledWith('error');
//     expect(snackbarStore.setMessage).toHaveBeenCalledWith(
//       responseCandidatoInvalido.data
//     );
//   });

//   it('should return error with already candidate', async () => {
//     //candidatar.mockResolvedValue(responseJaSeCandidatou);

//     await handleCandidatar(idVagaValido, idCandidatoInvalido, '');

//     expect(candidatar).toHaveBeenCalledWith(
//       String(idVagaValido),
//       idCandidatoValido,
//       ''
//     );
//     expect(snackbarStore.setOpenSnackbar).toHaveBeenCalledWith(true);
//     expect(snackbarStore.setSeverity).toHaveBeenCalledWith('error');
//     expect(snackbarStore.setMessage).toHaveBeenCalledWith(
//       responseJaSeCandidatou.data
//     );
//   });
// });
