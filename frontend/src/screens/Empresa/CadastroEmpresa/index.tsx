import { useNavigate } from 'react-router-dom';
import { Typography, Box, Grid, TextField, InputBaseComponentProps, Button, Snackbar, Alert } from '@mui/material'
import { useEffect, useState, FormEvent, forwardRef } from 'react';
import InputMask from "react-input-mask";
import { validateGenerico, validadeEmpresa } from '../../../utils';
import { useStore } from '../../../hooks/stores';
import { observer } from 'mobx-react-lite';

type MaskedInputProps = {
  mask: string
} & InputBaseComponentProps

const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ mask, ...inputProps }, ref) => {
    return <InputMask mask={mask} {...inputProps} />
  }
)

export const CadastroEmpresa = observer(() => {
  const { empresaStore, snackbarStore } = useStore();
  const {
    isEmailError,
    isSenhaError,
    isNomeError,
    isEnderecoError,
    isBairroError,
    isCidadeError,
    isEstadoError,
    isPaisError,
    isNumeroError,
    isTelefoneError,
    isComplementoError,
  } = validateGenerico;
  const {
    isCnpjError,
    isRamoError
  } = validadeEmpresa;
  const {
    email,
    setEmail,
    senha,
    setSenha,
    nome,
    setNome,
    cep,
    setCep,
    endereco,
    setEndereco,
    bairro,
    setBairro,
    cidade,
    setCidade,
    estado,
    setEstado,
    pais,
    setPais,
    numero,
    setNumero,
    telefone,
    setTelefone,
    ramo,
    setRamo,
    cnpj,
    setCnpj,
    complemento,
    setComplemento,
    handleCreateEmpresa,
    emailError,
    setEmailError,
    senhaError,
    setSenhaError,
    nomeError,
    setNomeError,
    cepError,
    setCepError,
    enderecoError,
    setEnderecoError,
    bairroError,
    setBairroError,
    cidadeError,
    setCidadeError,
    estadoError,
    setEstadoError,
    paisError,
    setPaisError,
    numeroError,
    setNumeroError,
    complementoError,
    setComplementoError,
    telefoneError,
    setTelefoneError,
    ramoError,
    setRamoError,
    cnpjError,
    setCnpjError,
  } = empresaStore;

  const { openSnackbar, setOpenSnackbar, severity, setSeverity, showSnackBar, message, setMessage } =
    snackbarStore;

  const [formularioError, setFormularioError] = useState(false)

  const isFormError = () => {
    setEmailError(isEmailError(email))
    setSenhaError(isSenhaError(senha))
    setNomeError(isNomeError(nome))
    setEnderecoError(isEnderecoError(endereco))
    setBairroError(isBairroError(bairro))
    setCidadeError(isCidadeError(cidade))
    setEstadoError(isEstadoError(estado))
    setPaisError(isPaisError(pais))
    setNumeroError(isNumeroError(numero))
    setComplementoError(isComplementoError(complemento))
    setTelefoneError(isTelefoneError(telefone))
    setRamoError(isRamoError(ramo))
    setCnpjError(isCnpjError(cnpj))
    setCepError(isCepError())

    return (
      emailError &&
      senhaError &&
      nomeError &&
      cepError &&
      enderecoError &&
      bairroError &&
      cidadeError &&
      estadoError &&
      paisError &&
      numeroError &&
      complementoError &&
      telefoneError &&
      ramoError &&
      cnpjError
    )
  }

  const isCepError = () => {
    const cepApi = cep.replace(/\D/g, '')
    if (cep.trim() === '')
      return false
    if (cepApi.length !== 8)
      return false
    fetch(`https://viacep.com.br/ws/${cepApi}/json/`)
      .then(res => res.json()).then(data => {
        setCidade(data.localidade)
        setEstado(data.uf)
        setEndereco(data.logradouro)
        setBairro(data.bairro)
        if (cidade !== '') {
          setCidadeError(true)
        }
        if (estado !== '') {
          setEstadoError(true)
        }
        if (endereco !== '') {
          setEnderecoError(true)
        }
        if (bairro !== '') {
          setBairroError(true)
        }
      })
    return true
  }

  const navigate = useNavigate()

  const createEmpresa = async () => {
    if (!isFormError()) {
      setFormularioError(true)
      setOpenSnackbar(true)
      setSeverity('warning')
      // setMessage('Campo(s) em branco')
      return
    }
    const response = await handleCreateEmpresa(
      email,
      senha,
      nome,
      ramo,
      cnpj,
      pais,
      cep,
      estado,
      cidade,
      endereco,
      numero,
      bairro,
      complemento,
      telefone
    );
    showSnackBar(response.ok);
  };
  // async function cadastrar(e: FormEvent) {
  //   e.preventDefault()


  //   await api
  //     .post('/usuario/cadastro/empresas', {
  //       email,
  //       senha,
  //       nome,
  //       ramo,
  //       cnpj,
  //       pais,
  //       cep,
  //       estado,
  //       cidade,
  //       endereco,
  //       numero,
  //       bairro,
  //       complemento,
  //       telefone
  //     })
  //     .then(res => {
  //       setOpenSnackbar(true)
  //       setSeverity('success')
  //       setMensagem('Empresa cadastrada com sucesso')
  //       setTimeout(() => navigate('/'), 2000)
  //     }).catch((erro) => {
  //       setOpenSnackbar(true)
  //       setSeverity('error')
  //       setMensagem('Erro ao cadastrar empresa')
  //       setEmail('')
  //       setSenha('')
  //       setNome('')
  //       setCep('')
  //       setEndereco('')
  //       setBairro('')
  //       setCidade('')
  //       setEstado('')
  //       setPais('')
  //       setNumero('')
  //       setComplemento('')
  //       setTelefone('')
  //       setRamo('')
  //       setCnpj('')
  //     })
  // }

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
        <Button sx={{
          color: '#f5f5f5',
          marginTop: 2
        }} onClick={() => navigate('/')}>
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
            color: '#f5f5f5'
          }}
          fontWeight="600"
        >
          Encontre os melhores currículos para sua vaga
        </Typography>
      </Box>
      <Box sx={{ gridArea: 'main' }}>
        <Box sx={{ borderRadius: '50px 0px 0px 50px', backgroundColor: '#f5f5f5', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ m: 10 }}>
            <Typography sx={{ textAlign: 'center', fontFamily: 'default', m: 2, fontSize: 'h3.fontSize' }}>Criar uma conta</Typography>
            {/* <form onSubmit={cadastrar}> */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="E-mail" type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  fullWidth
                  onBlur={() => { setEmailError(isEmailError(email)) }}
                  error={!emailError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Senha" type="password"
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                  fullWidth
                  onBlur={() => { setSenhaError(isSenhaError(senha)) }}
                  error={!senhaError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Nome da Empresa"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  fullWidth
                  onBlur={() => { setNomeError(isNomeError(nome)) }}
                  error={!nomeError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Ramo da Empresa"
                  value={ramo}
                  onChange={(event) => setRamo(event.target.value)}
                  fullWidth
                  onBlur={() => { setRamoError(isRamoError(ramo)) }}
                  error={!ramoError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="CNPJ"
                  value={cnpj}
                  onChange={(event) => setCnpj(event.target.value)}
                  InputProps={{
                    inputComponent: MaskedInput as any,
                    inputProps: { mask: "99.999.999/9999-99" },
                  }}
                  fullWidth
                  onBlur={() => { setCnpjError(isCnpjError(cnpj)) }}
                  error={!cnpjError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="País"
                  value={pais}
                  onChange={(event) => setPais(event.target.value)}
                  fullWidth
                  onBlur={() => { setPaisError(isPaisError(pais)) }}
                  error={!paisError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="CEP"
                  value={cep}
                  onChange={(event) => setCep(event.target.value)}
                  InputProps={{
                    inputComponent: MaskedInput as any,
                    inputProps: { mask: "99999-999" },
                  }}
                  fullWidth
                  onBlur={() => { setCepError(isCepError()) }}
                  error={!cepError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Estado"
                  value={estado}
                  onChange={(event) => setEstado(event.target.value)}
                  fullWidth
                  onBlur={() => { setEstadoError(isEstadoError(estado)) }}
                  error={!estadoError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Cidade"
                  value={cidade}
                  onChange={(event) => setCidade(event.target.value)}
                  fullWidth
                  onBlur={() => { setCidadeError(isCidadeError(cidade)) }}
                  error={!cidadeError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Endereço"
                  value={endereco}
                  onChange={(event) => setEndereco(event.target.value)}
                  fullWidth
                  onBlur={() => { setEnderecoError(isEnderecoError(endereco)) }}
                  error={!enderecoError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Número"
                  value={numero}
                  onChange={(event) => setNumero(event.target.value.replace(/\D/g, ''))}
                  fullWidth
                  onBlur={() => { setNumeroError(isNumeroError(numero)) }}
                  error={!numeroError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Bairro"
                  value={bairro}
                  onChange={(event) => setBairro(event.target.value)}
                  fullWidth
                  onBlur={() => { setBairroError(isBairroError(bairro)) }}
                  error={!bairroError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Complemento"
                  value={complemento}
                  onChange={(event) => setComplemento(event.target.value)}
                  fullWidth
                  onBlur={() => { setComplementoError(isComplementoError(complemento)) }}
                  error={!complementoError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Telefone"
                  value={telefone}
                  onChange={(event) => setTelefone(event.target.value.replace(/\D/g, ''))}
                  InputProps={{
                    inputComponent: MaskedInput as any,
                    inputProps: { mask: "(99) 9999-99999" },
                  }}
                  fullWidth
                  onBlur={() => { setTelefoneError(isTelefoneError(telefone)) }}
                  error={!telefoneError && formularioError} />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={createEmpresa}
                  style={{ borderRadius: 50 }}
                  fullWidth>
                  Cadastrar</Button>
              </Grid>
            </Grid>
            {/* </form> */}
          </Box>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(!openSnackbar)}
      >
        <Alert
          onClose={() => setOpenSnackbar(!openSnackbar)}
          severity={severity}
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Box >
  )
});