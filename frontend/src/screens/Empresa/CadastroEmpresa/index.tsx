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
} from '@mui/material';
import { useState, forwardRef } from 'react';
import InputMask from 'react-input-mask';
import { validateGenerico, validateEmpresa } from '../../../utils';
import { useStore } from '../../../hooks/stores';
import { observer } from 'mobx-react-lite';
import { Header } from '../../../components';

type MaskedInputProps = {
  mask: string;
} & InputBaseComponentProps;

const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ mask, ...inputProps }, ref) => {
    return <InputMask mask={mask} {...inputProps} />;
  }
);

export const CadastroEmpresa = observer(() => {
  const { empresaStore, snackbarStore } = useStore();

  const isFormError = () => {
    empresaStore.setEmailError(
      validateGenerico.isEmailError(empresaStore.email)
    );
    empresaStore.setSenhaError(
      validateGenerico.isSenhaError(empresaStore.senha)
    );
    empresaStore.setNomeError(validateGenerico.isNomeError(empresaStore.nome));
    empresaStore.setEnderecoError(
      validateGenerico.isEnderecoError(empresaStore.endereco)
    );
    empresaStore.setBairroError(
      validateGenerico.isBairroError(empresaStore.bairro)
    );
    empresaStore.setCidadeError(
      validateGenerico.isCidadeError(empresaStore.cidade)
    );
    empresaStore.setEstadoError(
      validateGenerico.isEstadoError(empresaStore.estado)
    );
    empresaStore.setPaisError(validateGenerico.isPaisError(empresaStore.pais));
    empresaStore.setNumeroError(
      validateGenerico.isNumeroError(empresaStore.numero)
    );
    empresaStore.setComplementoError(
      validateGenerico.isComplementoError(empresaStore.complemento)
    );
    empresaStore.setTelefoneError(
      validateGenerico.isTelefoneError(empresaStore.telefone)
    );
    empresaStore.setRamoError(validateEmpresa.isRamoError(empresaStore.ramo));
    empresaStore.setCnpjError(validateEmpresa.isCnpjError(empresaStore.cnpj));
    empresaStore.setCepError(isCepError());

    return (
      empresaStore.emailError &&
      empresaStore.senhaError &&
      empresaStore.nomeError &&
      empresaStore.cepError &&
      empresaStore.enderecoError &&
      empresaStore.bairroError &&
      empresaStore.cidadeError &&
      empresaStore.estadoError &&
      empresaStore.paisError &&
      empresaStore.numeroError &&
      empresaStore.complementoError &&
      empresaStore.telefoneError &&
      empresaStore.ramoError &&
      empresaStore.cnpjError
    );
  };

  const isCepError = () => {
    const cepApi = empresaStore.cep.replace(/\D/g, '');
    empresaStore.setCep(cepApi);
    if (empresaStore.cep.trim() === '') return false;
    if (cepApi.length !== 8) return false;
    fetch(`https://viacep.com.br/ws/${cepApi}/json/`)
      .then((res) => res.json())
      .then((data) => {
        empresaStore.setCidade(data.localidade);
        empresaStore.setEstado(data.uf);
        empresaStore.setEndereco(data.logradouro);
        empresaStore.setBairro(data.bairro);
        if (data.localidade !== '') {
          empresaStore.setCidadeError(true);
        }
        if (data.uf !== '') {
          empresaStore.setEstadoError(true);
        }
        if (data.logradouro !== '') {
          empresaStore.setEnderecoError(true);
        }
        if (data.bairro !== '') {
          empresaStore.setBairroError(true);
        }
      });
    return true;
  };

  const navigate = useNavigate();

  const createEmpresa = async () => {
    if (!isFormError()) {
      empresaStore.setFormularioError(true);
      snackbarStore.setOpenSnackbar(true);
      snackbarStore.setSeverity('warning');
      snackbarStore.setMessage('Campo(s) em branco');
      return;
    }
    const response = await empresaStore
      .handleCreateEmpresa(
        empresaStore.logo,
        empresaStore.email,
        empresaStore.senha,
        empresaStore.nome,
        empresaStore.ramo,
        empresaStore.cnpj,
        empresaStore.pais,
        empresaStore.cep,
        empresaStore.estado,
        empresaStore.cidade,
        empresaStore.endereco,
        empresaStore.numero,
        empresaStore.bairro,
        empresaStore.complemento,
        empresaStore.telefone
      )
      .then(() => {
        snackbarStore.setOpenSnackbar(true);
        snackbarStore.setSeverity('success');
        snackbarStore.setMessage('Empresa cadastrada com sucesso');
        setTimeout(() => {
          navigate('/login/empresa');
          snackbarStore.setOpenSnackbar(false);
          empresaStore.clearStatesEmpresa();
        }, 2500);
      })
      .catch(() => {
        snackbarStore.setOpenSnackbar(true);
        snackbarStore.setSeverity('error');
        snackbarStore.setMessage('Falha ao cadastrar a empresa');
        empresaStore.clearStatesEmpresa();
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
          Encontre os melhores currículos para sua vaga
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
                  value={empresaStore.email}
                  onChange={(event) =>
                    empresaStore.setEmail(event.target.value)
                  }
                  fullWidth
                  onBlur={() => {
                    empresaStore.setEmailError(
                      validateGenerico.isEmailError(empresaStore.email)
                    );
                  }}
                  error={
                    !empresaStore.emailError && empresaStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Senha"
                  type="password"
                  value={empresaStore.senha}
                  onChange={(event) =>
                    empresaStore.setSenha(event.target.value)
                  }
                  fullWidth
                  onBlur={() => {
                    empresaStore.setSenhaError(
                      validateGenerico.isSenhaError(empresaStore.senha)
                    );
                  }}
                  error={
                    !empresaStore.senhaError && empresaStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Nome da Empresa"
                  value={empresaStore.nome}
                  onChange={(event) => empresaStore.setNome(event.target.value)}
                  fullWidth
                  onBlur={() => {
                    empresaStore.setNomeError(
                      validateGenerico.isNomeError(empresaStore.nome)
                    );
                  }}
                  error={
                    !empresaStore.nomeError && empresaStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Ramo da Empresa"
                  value={empresaStore.ramo}
                  onChange={(event) => empresaStore.setRamo(event.target.value)}
                  fullWidth
                  onBlur={() => {
                    empresaStore.setRamoError(
                      validateEmpresa.isRamoError(empresaStore.ramo)
                    );
                  }}
                  error={
                    !empresaStore.ramoError && empresaStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Link para do logo da empresa"
                  value={empresaStore.logo}
                  onChange={(event) => empresaStore.setLogo(event.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="CNPJ"
                  value={empresaStore.cnpj}
                  onChange={(event) => empresaStore.setCnpj(event.target.value)}
                  InputProps={{
                    inputComponent: MaskedInput as any,
                    inputProps: { mask: '99.999.999/9999-99' },
                  }}
                  fullWidth
                  onBlur={() => {
                    empresaStore.setCnpjError(
                      validateEmpresa.isCnpjError(empresaStore.cnpj)
                    );
                  }}
                  error={
                    !empresaStore.cnpjError && empresaStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="País"
                  value={empresaStore.pais}
                  onChange={(event) => empresaStore.setPais(event.target.value)}
                  fullWidth
                  onBlur={() => {
                    empresaStore.setPaisError(
                      validateGenerico.isPaisError(empresaStore.pais)
                    );
                  }}
                  error={
                    !empresaStore.paisError && empresaStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="CEP"
                  value={empresaStore.cep}
                  onChange={(event) => empresaStore.setCep(event.target.value)}
                  InputProps={{
                    inputComponent: MaskedInput as any,
                    inputProps: { mask: '99999-999' },
                  }}
                  fullWidth
                  onBlur={() => {
                    empresaStore.setCepError(isCepError());
                  }}
                  error={!empresaStore.cepError && empresaStore.formularioError}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Estado"
                  value={empresaStore.estado}
                  onChange={(event) =>
                    empresaStore.setEstado(event.target.value)
                  }
                  fullWidth
                  onBlur={() => {
                    empresaStore.setEstadoError(
                      validateGenerico.isEstadoError(empresaStore.estado)
                    );
                  }}
                  error={
                    !empresaStore.estadoError && empresaStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Cidade"
                  value={empresaStore.cidade}
                  onChange={(event) =>
                    empresaStore.setCidade(event.target.value)
                  }
                  fullWidth
                  onBlur={() => {
                    empresaStore.setCidadeError(
                      validateGenerico.isCidadeError(empresaStore.cidade)
                    );
                  }}
                  error={
                    !empresaStore.cidadeError && empresaStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Endereço"
                  value={empresaStore.endereco}
                  onChange={(event) =>
                    empresaStore.setEndereco(event.target.value)
                  }
                  fullWidth
                  onBlur={() => {
                    empresaStore.setEnderecoError(
                      validateGenerico.isEnderecoError(empresaStore.endereco)
                    );
                  }}
                  error={
                    !empresaStore.enderecoError && empresaStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Número"
                  value={empresaStore.numero}
                  onChange={(event) =>
                    empresaStore.setNumero(
                      event.target.value.replace(/\D/g, '')
                    )
                  }
                  fullWidth
                  onBlur={() => {
                    empresaStore.setNumeroError(
                      validateGenerico.isNumeroError(empresaStore.numero)
                    );
                  }}
                  error={
                    !empresaStore.numeroError && empresaStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Bairro"
                  value={empresaStore.bairro}
                  onChange={(event) =>
                    empresaStore.setBairro(event.target.value)
                  }
                  fullWidth
                  onBlur={() => {
                    empresaStore.setBairroError(
                      validateGenerico.isBairroError(empresaStore.bairro)
                    );
                  }}
                  error={
                    !empresaStore.bairroError && empresaStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Complemento"
                  value={empresaStore.complemento}
                  onChange={(event) =>
                    empresaStore.setComplemento(event.target.value)
                  }
                  fullWidth
                  onBlur={() => {
                    empresaStore.setComplementoError(
                      validateGenerico.isComplementoError(
                        empresaStore.complemento
                      )
                    );
                  }}
                  error={
                    !empresaStore.complementoError &&
                    empresaStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Telefone"
                  value={empresaStore.telefone}
                  onChange={(event) =>
                    empresaStore.setTelefone(
                      event.target.value.replace(/\D/g, '')
                    )
                  }
                  InputProps={{
                    inputComponent: MaskedInput as any,
                    inputProps: { mask: '(99) 9999-99999' },
                  }}
                  fullWidth
                  onBlur={() => {
                    empresaStore.setTelefoneError(
                      validateGenerico.isTelefoneError(empresaStore.telefone)
                    );
                  }}
                  error={
                    !empresaStore.telefoneError && empresaStore.formularioError
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={createEmpresa}
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
