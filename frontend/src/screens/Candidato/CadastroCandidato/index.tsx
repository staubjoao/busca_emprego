import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Grid,
  TextField,
  InputBaseComponentProps,
  Button,
  Snackbar,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { forwardRef } from 'react';
import InputMask from 'react-input-mask';
import { validateGenerico, validateCandidato } from '../../../utils';
import { useStore } from '../../../hooks/stores';
import { observer } from 'mobx-react-lite';

type MaskedInputProps = {
  mask: string;
} & InputBaseComponentProps;

const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ mask, ...inputProps }, ref) => {
    return <InputMask mask={mask} {...inputProps} />;
  }
);

export const CadastroCandidato = observer(() => {
  const { candidatoStore, snackbarStore } = useStore();

  const isFormError = () => {
    candidatoStore.setEmailError(
      validateGenerico.isEmailError(candidatoStore.email)
    );
    candidatoStore.setSenhaError(
      validateGenerico.isSenhaError(candidatoStore.senha)
    );
    candidatoStore.setNomeError(
      validateGenerico.isNomeError(candidatoStore.nome)
    );
    candidatoStore.setAreaAtuacaoError(
      validateCandidato.isAreaAtuacaoError(candidatoStore.areaAtuacao)
    );
    candidatoStore.setCepError(isCepError());
    candidatoStore.setEnderecoError(
      validateGenerico.isEnderecoError(candidatoStore.endereco)
    );
    candidatoStore.setBairroError(
      validateGenerico.isBairroError(candidatoStore.bairro)
    );
    candidatoStore.setCidadeError(
      validateGenerico.isCidadeError(candidatoStore.cidade)
    );
    candidatoStore.setEstadoError(
      validateGenerico.isEstadoError(candidatoStore.estado)
    );
    candidatoStore.setPaisError(
      validateGenerico.isPaisError(candidatoStore.pais)
    );
    candidatoStore.setNumeroError(
      validateGenerico.isNumeroError(candidatoStore.numero)
    );
    candidatoStore.setComplementoError(
      validateGenerico.isComplementoError(candidatoStore.complemento)
    );
    candidatoStore.setTelefoneError(
      validateGenerico.isTelefoneError(candidatoStore.telefone)
    );
    candidatoStore.setDeficienciaError(
      validateCandidato.isDeficienciaError(candidatoStore.deficiencia)
    );

    candidatoStore.setPretensaoError(
      validateCandidato.isPretensaoError(candidatoStore.pretensao)
    );
    candidatoStore.setDescricaoError(
      validateCandidato.isDescricaoError(candidatoStore.descricao)
    );
    candidatoStore.setCpfError(
      validateCandidato.isCpfError(candidatoStore.cpf)
    );

    return (
      candidatoStore.emailError &&
      candidatoStore.senhaError &&
      candidatoStore.nomeError &&
      candidatoStore.cepError &&
      candidatoStore.enderecoError &&
      candidatoStore.bairroError &&
      candidatoStore.cidadeError &&
      candidatoStore.estadoError &&
      candidatoStore.paisError &&
      candidatoStore.numeroError &&
      candidatoStore.complementoError &&
      candidatoStore.telefoneError &&
      candidatoStore.generoError &&
      candidatoStore.deficienciaError &&
      candidatoStore.pretensaoError &&
      candidatoStore.descricaoError &&
      candidatoStore.cpfError &&
      candidatoStore.areaAtuacaoError
    );
  };

  const isCepError = () => {
    const cepApi = candidatoStore.cep.replace(/\D/g, '');
    if (candidatoStore.cep.trim() === '') return false;
    if (cepApi.length !== 8) return false;
    fetch(`https://viacep.com.br/ws/${cepApi}/json/`)
      .then((res) => res.json())
      .then((data) => {
        candidatoStore.setCidade(data.localidade);
        candidatoStore.setEstado(data.uf);
        candidatoStore.setEndereco(data.logradouro);
        candidatoStore.setBairro(data.bairro);
        if (data.localidade !== '') {
          candidatoStore.setCidadeError(true);
        }
        if (data.uf !== '') {
          candidatoStore.setEstadoError(true);
        }
        if (data.logradouro !== '') {
          candidatoStore.setEnderecoError(true);
        }
        if (data.bairro !== '') {
          candidatoStore.setBairroError(true);
        }
      });
    return true;
  };

  const navigate = useNavigate();

  const createCandidato = async () => {
    if (!isFormError()) {
      candidatoStore.setFormularioError(true);
      snackbarStore.setOpenSnackbar(true);
      snackbarStore.setSeverity('warning');
      snackbarStore.setMessage('Campo(s) em branco');
      return;
    }
    const response = await candidatoStore.handleCreateCandidato(
      candidatoStore.perfil,
      candidatoStore.email,
      candidatoStore.senha,
      candidatoStore.nome,
      candidatoStore.cpf,
      candidatoStore.endereco,
      candidatoStore.bairro,
      candidatoStore.cidade,
      candidatoStore.estado,
      candidatoStore.pais,
      candidatoStore.numero,
      candidatoStore.complemento,
      candidatoStore.telefone,
      candidatoStore.genero,
      candidatoStore.deficiencia,
      candidatoStore.cep,
      candidatoStore.areaAtuacao,
      candidatoStore.pretensao
    )
      .then(() => {
        snackbarStore.setOpenSnackbar(true);
        snackbarStore.setSeverity('success');
        snackbarStore.setMessage('Candidato cadastrado com sucesso');
        setTimeout(() => {
          navigate('/login/candidato');
          snackbarStore.setOpenSnackbar(false);
          candidatoStore.clearStatesCandidato();
        }, 2500);
      })
      .catch(() => {
        snackbarStore.setOpenSnackbar(true);
        snackbarStore.setSeverity('error');
        snackbarStore.setMessage('Erro ao cadastrar o candidato');
        candidatoStore.clearStatesCandidato();
      });
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 1,
        gridTemplateRows: 'auto',
        gridTemplateAreas: `"sidebar main main main"`,
      }}
    >
      <Box sx={{ gridArea: 'sidebar' }}>
        <Button
          sx={{
            color: '#f5f5f5',
            marginTop: 2,
          }}
          onClick={() => navigate('/')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>
        <Typography
          variant="h4"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
            marginLeft: 3,
            color: '#f5f5f5',
          }}
          fontWeight="600"
        >
          Encontre a vaga que tanto espera..
        </Typography>
      </Box>
      <Box sx={{ gridArea: 'main' }}>
        <Box
          sx={{
            borderRadius: '50px 0px 0px 50px',
            backgroundColor: '#f5f5f5',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ m: 10 }}>
            <Typography
              sx={{
                textAlign: 'center',
                fontFamily: 'default',
                m: 2,
                fontSize: 'h3.fontSize',
              }}
            >
              Criar uma conta
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="E-mail"
                  type="email"
                  value={candidatoStore.email}
                  onChange={(event) =>
                    candidatoStore.setEmail(event.target.value)
                  }
                  fullWidth
                  onBlur={() => {
                    candidatoStore.setEmailError(
                      validateGenerico.isEmailError(candidatoStore.email)
                    );
                  }}
                  error={
                    !candidatoStore.emailError && candidatoStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Senha"
                  type="password"
                  value={candidatoStore.senha}
                  onChange={(event) =>
                    candidatoStore.setSenha(event.target.value)
                  }
                  fullWidth
                  onBlur={() => {
                    candidatoStore.setSenhaError(
                      validateGenerico.isSenhaError(candidatoStore.senha)
                    );
                  }}
                  error={
                    !candidatoStore.senhaError && candidatoStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Nome"
                  value={candidatoStore.nome}
                  onChange={(event) =>
                    candidatoStore.setNome(event.target.value)
                  }
                  fullWidth
                  onBlur={() => {
                    candidatoStore.setNomeError(
                      validateGenerico.isNomeError(candidatoStore.nome)
                    );
                  }}
                  error={
                    !candidatoStore.nomeError && candidatoStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="CPF"
                  value={candidatoStore.cpf}
                  onChange={(event) =>
                    candidatoStore.setCpf(event.target.value)
                  }
                  InputProps={{
                    inputComponent: MaskedInput as any,
                    inputProps: { mask: '999.999.999-99' },
                  }}
                  fullWidth
                  onBlur={() => {
                    candidatoStore.setCpfError(
                      validateCandidato.isCpfError(candidatoStore.cpf)
                    );
                  }}
                  error={
                    !candidatoStore.cpfError && candidatoStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Área de Atuação"
                  value={candidatoStore.areaAtuacao}
                  onChange={(event) =>
                    candidatoStore.setAreaAtuacao(event.target.value)
                  }
                  fullWidth
                  onBlur={() => {
                    candidatoStore.setAreaAtuacaoError(
                      validateCandidato.isAreaAtuacaoError(
                        candidatoStore.areaAtuacao
                      )
                    );
                  }}
                  error={
                    !candidatoStore.areaAtuacaoError &&
                    candidatoStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Link para sua foto de perfil"
                  value={candidatoStore.perfil}
                  onChange={(event) =>
                    candidatoStore.setPerfil(event.target.value)
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Descrição breve sobre você"
                  value={candidatoStore.descricao}
                  onChange={(event) =>
                    candidatoStore.setDescricao(event.target.value)
                  }
                  multiline
                  rows={4}
                  fullWidth
                  onBlur={() => {
                    candidatoStore.setDescricaoError(
                      validateCandidato.isDescricaoError(
                        candidatoStore.descricao
                      )
                    );
                  }}
                  error={
                    !candidatoStore.descricaoError &&
                    candidatoStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel id="genero-label">Gênero</InputLabel>
                  <Select
                    labelId="genero-label"
                    id="genero"
                    value={candidatoStore.genero}
                    label="Gênero"
                    onChange={(event) =>
                      candidatoStore.setGenero(event.target.value)
                    }
                    fullWidth
                    onBlur={() => {
                      candidatoStore.setGeneroError(
                        validateCandidato.isGeneroError(candidatoStore.genero)
                      );
                    }}
                    error={
                      !candidatoStore.generoError &&
                      candidatoStore.formularioError
                    }
                  >
                    <MenuItem value={'M'}>Masculino</MenuItem>
                    <MenuItem value={'F'}>Feminino</MenuItem>
                    <MenuItem value={'N'}>Não-binário</MenuItem>
                    <MenuItem value={'G'}>Genderqueer</MenuItem>
                    <MenuItem value={'T'}>Transexual</MenuItem>
                    <MenuItem value={'I'}>Intersexo</MenuItem>
                    <MenuItem value={'Q'}>Questioning</MenuItem>
                    <MenuItem value={'O'}>Outros</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel id="deficiencia-label">Deficiência</InputLabel>
                  <Select
                    labelId="deficiencia-label"
                    id="deficiencia"
                    value={candidatoStore.deficiencia}
                    label="Deficiência"
                    onChange={(event) =>
                      candidatoStore.setDeficiencia(event.target.value)
                    }
                    fullWidth
                    onBlur={() => {
                      candidatoStore.setDeficienciaError(
                        validateCandidato.isDeficienciaError(
                          candidatoStore.deficiencia
                        )
                      );
                    }}
                    error={
                      !candidatoStore.deficienciaError &&
                      candidatoStore.formularioError
                    }
                  >
                    <MenuItem value="Visual">Visual</MenuItem>
                    <MenuItem value="Auditiva">Auditiva</MenuItem>
                    <MenuItem value="Física">Física</MenuItem>
                    <MenuItem value="Mental">Mental</MenuItem>
                    <MenuItem value="Múltipla">Múltipla</MenuItem>
                    <MenuItem value="Nenhuma">Nenhuma</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="País"
                  value={candidatoStore.pais}
                  onChange={(event) =>
                    candidatoStore.setPais(event.target.value)
                  }
                  fullWidth
                  onBlur={() => {
                    candidatoStore.setPaisError(
                      validateGenerico.isPaisError(candidatoStore.pais)
                    );
                  }}
                  error={
                    !candidatoStore.paisError && candidatoStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="CEP"
                  value={candidatoStore.cep}
                  onChange={(event) =>
                    candidatoStore.setCep(event.target.value)
                  }
                  InputProps={{
                    inputComponent: MaskedInput as any,
                    inputProps: { mask: '99999-999' },
                  }}
                  fullWidth
                  onBlur={() => {
                    candidatoStore.setCepError(isCepError());
                  }}
                  error={
                    !candidatoStore.cepError && candidatoStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Estado"
                  value={candidatoStore.estado}
                  onChange={(event) =>
                    candidatoStore.setEstado(event.target.value)
                  }
                  fullWidth
                  onBlur={() => {
                    candidatoStore.setEstadoError(
                      validateGenerico.isEstadoError(candidatoStore.estado)
                    );
                  }}
                  error={
                    !candidatoStore.estadoError &&
                    candidatoStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Cidade"
                  value={candidatoStore.cidade}
                  onChange={(event) =>
                    candidatoStore.setCidade(event.target.value)
                  }
                  fullWidth
                  onBlur={() => {
                    candidatoStore.setCidadeError(
                      validateGenerico.isCidadeError(candidatoStore.cidade)
                    );
                  }}
                  error={
                    !candidatoStore.cidadeError &&
                    candidatoStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Bairro"
                  value={candidatoStore.bairro}
                  onChange={(event) =>
                    candidatoStore.setBairro(event.target.value)
                  }
                  fullWidth
                  onBlur={() => {
                    candidatoStore.setBairroError(
                      validateGenerico.isBairroError(candidatoStore.bairro)
                    );
                  }}
                  error={
                    !candidatoStore.bairroError &&
                    candidatoStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  label="Endereço"
                  value={candidatoStore.endereco}
                  onChange={(event) =>
                    candidatoStore.setEndereco(event.target.value)
                  }
                  fullWidth
                  onBlur={() => {
                    candidatoStore.setEnderecoError(
                      validateGenerico.isEnderecoError(candidatoStore.endereco)
                    );
                  }}
                  error={
                    !candidatoStore.enderecoError &&
                    candidatoStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Número"
                  value={candidatoStore.numero}
                  onChange={(event) =>
                    candidatoStore.setNumero(
                      event.target.value.replace(/\D/g, '')
                    )
                  }
                  fullWidth
                  onBlur={() => {
                    candidatoStore.setNumeroError(
                      validateGenerico.isNumeroError(candidatoStore.numero)
                    );
                  }}
                  error={
                    !candidatoStore.numeroError &&
                    candidatoStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Complemento"
                  value={candidatoStore.complemento}
                  onChange={(event) =>
                    candidatoStore.setComplemento(event.target.value)
                  }
                  fullWidth
                  onBlur={() => {
                    candidatoStore.setComplementoError(
                      validateGenerico.isComplementoError(
                        candidatoStore.complemento
                      )
                    );
                  }}
                  error={
                    !candidatoStore.complementoError &&
                    candidatoStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Telefone"
                  value={candidatoStore.telefone}
                  onChange={(event) =>
                    candidatoStore.setTelefone(event.target.value)
                  }
                  InputProps={{
                    inputComponent: MaskedInput as any,
                    inputProps: { mask: '(99) 9999-99999' },
                  }}
                  fullWidth
                  onBlur={() => {
                    candidatoStore.setTelefoneError(
                      validateGenerico.isTelefoneError(candidatoStore.telefone)
                    );
                  }}
                  error={
                    !candidatoStore.telefoneError &&
                    candidatoStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Pretensão salarial"
                  value={candidatoStore.pretensao}
                  onChange={(event) =>
                    candidatoStore.setPresensao(
                      event.target.value.replace(/\D/g, '')
                    )
                  }
                  fullWidth
                  onBlur={() => {
                    candidatoStore.setPretensaoError(
                      validateCandidato.isPretensaoError(
                        candidatoStore.pretensao
                      )
                    );
                  }}
                  error={
                    !candidatoStore.pretensaoError &&
                    candidatoStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={createCandidato}
                  style={{ borderRadius: 50 }}
                  fullWidth
                >
                  Cadastrar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Snackbar
        open={snackbarStore.openSnackbar}
        autoHideDuration={6000}
        onClose={() =>
          snackbarStore.setOpenSnackbar(!snackbarStore.openSnackbar)
        }
      >
        <Alert
          onClose={() =>
            snackbarStore.setOpenSnackbar(!snackbarStore.openSnackbar)
          }
          severity={snackbarStore.severity}
          sx={{ width: '100%' }}
        >
          {snackbarStore.message}
        </Alert>
      </Snackbar>
    </Box>
  );
});
