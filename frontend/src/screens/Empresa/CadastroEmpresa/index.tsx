import { useNavigate } from 'react-router-dom';
import { Typography, Box, Grid, TextField, InputBaseComponentProps, Button, Snackbar, Alert } from '@mui/material'
import { useEffect, useState, FormEvent, forwardRef } from 'react';
import InputMask from "react-input-mask";
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
  const { empresaStore } = useStore();
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
    setComplemento
  } = empresaStore;

  const [emailError, setEmailError] = useState(false)
  const [senhaError, setSenhaError] = useState(false)
  const [nomeError, setNomeError] = useState(false)
  const [cepError, setCepError] = useState(false)
  const [enderecoError, setEnderecoError] = useState(false)
  const [bairroError, setBairroError] = useState(false)
  const [cidadeError, setCidadeError] = useState(false)
  const [estadoError, setEstadoError] = useState(false)
  const [paisError, setPaisError] = useState(false)
  const [numeroError, setNumeroError] = useState(false)
  const [complementoError, setComplementoError] = useState(false)
  const [telefoneError, setTelefoneError] = useState(false)
  const [ramoError, setRamoError] = useState(false)
  const [cnpjError, setCnpjError] = useState(false)
  const [formularioError, setFormularioError] = useState(false)

  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [severity, setSeverity] = useState<
    'success' | 'info' | 'warning' | 'error'
  >('success')
  const [mensagem, setMensagem] = useState('')

  const isEmailError = () => {
    if (email.trim() === '')
      return false
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isSenhaError = () => {
    return senha.trim() !== ''
  }

  const isNomeError = () => {
    return nome.trim() !== ''
  }

  const isCepError = () => {
    const cepApi = cep.replace(/\D/g, '')
    if (cep.trim() === '')
      return false
    if (cepApi.length !== 8)
      return false
    checkCEP()
    return true
  }

  const isEnderecoError = () => {
    return endereco.trim() !== ''
  }

  const isBairroError = () => {
    return bairro.trim() !== ''
  }

  const isCidadeError = () => {
    return cidade.trim() !== ''
  }

  const isEstadoError = () => {
    return estado.trim() !== ''
  }

  const isPaisError = () => {
    return pais.trim() !== ''
  }

  const isNumeroError = () => {
    return numero.trim() !== ''
  }

  const isTelefoneError = () => {
    const telefoneAux = telefone.replace(/\D/g, '')
    return telefone.trim() !== '' && telefoneAux.length >= 10
  }

  const isComplementoError = () => {
    return complemento.trim() !== ''
  }

  const isRamoError = () => {
    return ramo.trim() !== ''
  }

  const isCnpjError = () => {
    const cpnjAux = cnpj.replace(/\D/g, '')
    return cpnjAux.length === 14
  }

  const isFormError = () => {
    setEmailError(isEmailError())
    setSenhaError(isSenhaError())
    setNomeError(isNomeError())
    setCepError(isCepError())
    setEnderecoError(isEnderecoError())
    setBairroError(isBairroError())
    setCidadeError(isCidadeError())
    setEstadoError(isEstadoError())
    setPaisError(isPaisError())
    setNumeroError(isNumeroError())
    setComplementoError(isComplementoError())
    setTelefoneError(isTelefoneError())
    setRamoError(isRamoError())
    setCnpjError(isCnpjError())

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

  const navigate = useNavigate()

  // async function cadastrar(e: FormEvent) {
  //   e.preventDefault()

  //   if (!isFormError()) {
  //     setFormularioError(true)
  //     setOpenSnackbar(true)
  //     setSeverity('warning')
  //     setMensagem('Campo(s) em branco')
  //     return
  //   }

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

  const checkCEP = () => {
    const cepApi = cep.replace(/\D/g, '')
    fetch(`https://viacep.com.br/ws/${cepApi}/json/`)
      .then(res => res.json()).then(data => {
        setCidade(data.localidade)
        setEstado(data.uf)
        setEndereco(data.logradouro)
        setBairro(data.bairro)
        setCidadeError(true)
        setEstadoError(true)
        setEnderecoError(true)
        setBairroError(true)
      })
  }

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
                  onBlur={() => { setEmailError(isEmailError) }}
                  error={!emailError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Senha" type="password"
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                  fullWidth
                  onBlur={() => { setSenhaError(isSenhaError) }}
                  error={!senhaError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Nome da Empresa"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  fullWidth
                  onBlur={() => { setNomeError(isNomeError) }}
                  error={!nomeError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Ramo da Empresa"
                  value={ramo}
                  onChange={(event) => setRamo(event.target.value)}
                  fullWidth
                  onBlur={() => { setRamoError(isRamoError) }}
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
                  onBlur={() => { setCnpjError(isCnpjError) }}
                  error={!cnpjError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="País"
                  value={pais}
                  onChange={(event) => setPais(event.target.value)}
                  fullWidth
                  onBlur={() => { setPaisError(isPaisError) }}
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
                  onBlur={() => { setCepError(isCepError) }}
                  error={!cepError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Estado"
                  value={estado}
                  onChange={(event) => setEstado(event.target.value)}
                  fullWidth
                  onBlur={() => { setEstadoError(isEstadoError) }}
                  error={!estadoError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Cidade"
                  value={cidade}
                  onChange={(event) => setCidade(event.target.value)}
                  fullWidth
                  onBlur={() => { setCidadeError(isCidadeError) }}
                  error={!cidadeError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Endereço"
                  value={endereco}
                  onChange={(event) => setEndereco(event.target.value)}
                  fullWidth
                  onBlur={() => { setEnderecoError(isEnderecoError) }}
                  error={!enderecoError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Número"
                  value={numero}
                  onChange={(event) => setNumero(event.target.value.replace(/\D/g, ''))}
                  fullWidth
                  onBlur={() => { setNumeroError(isNumeroError) }}
                  error={!numeroError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Bairro"
                  value={bairro}
                  onChange={(event) => setBairro(event.target.value)}
                  fullWidth
                  onBlur={() => { setBairroError(isBairroError) }}
                  error={!bairroError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Complemento"
                  value={complemento}
                  onChange={(event) => setComplemento(event.target.value)}
                  fullWidth
                  onBlur={() => { setComplementoError(isComplementoError) }}
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
                  onBlur={() => { setTelefoneError(isTelefoneError) }}
                  error={!telefoneError && formularioError} />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
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
          {mensagem}
        </Alert>
      </Snackbar>
    </Box >
  )
}