import { useNavigate } from 'react-router-dom';
import { Typography, Box, Grid, TextField, InputBaseComponentProps, Button, Snackbar, Alert, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { forwardRef } from 'react';
import InputMask from "react-input-mask";
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
)

export const CadastroCandidato = observer(() => {
  const { candidatoStore, snackbarStore } = useStore();
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
    isDeficienciaError,
    isGeneroError,
    isPretensaoError,
    isDescricaoError,
    isCpfError,
    isAreaAtuacaoError,
  } = validateCandidato;
  const {
    perfil,
    setPerfil,
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
    genero,
    setGenero,
    complemento,
    setComplemento,
    cpf,
    setCpf,
    deficiencia,
    setDeficiencia,
    pretensao,
    setPresensao,
    descricao,
    setDescricao,
    areaAtuacao,
    setAreaAtuacao,
    handleCreateCandidato,
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
    generoError,
    setGeneroError,
    deficienciaError,
    setDeficienciaError,
    pretensaoError,
    setPretensaoError,
    descricaoError,
    setDescricaoError,
    cpfError,
    setCpfError,
    formularioError,
    setFormularioError,
    areaAtuacaoError,
    setAreaAtuacaoError,
    clearStatesCandidato,
  } = candidatoStore;

  const { openSnackbar, setOpenSnackbar, severity, setSeverity, showSnackBar, message, setMessage } =
    snackbarStore;

  const isFormError = () => {
    setEmailError(isEmailError(email))
    setSenhaError(isSenhaError(senha))
    setNomeError(isNomeError(nome))
    setAreaAtuacaoError(isAreaAtuacaoError(areaAtuacao))
    setCepError(isCepError())
    setEnderecoError(isEnderecoError(endereco))
    setBairroError(isBairroError(bairro))
    setCidadeError(isCidadeError(cidade))
    setEstadoError(isEstadoError(estado))
    setPaisError(isPaisError(pais))
    setNumeroError(isNumeroError(numero))
    setComplementoError(isComplementoError(complemento))
    setTelefoneError(isTelefoneError(telefone))
    setDeficienciaError(isDeficienciaError(deficiencia))
    setPretensaoError(isPretensaoError(pretensao))
    setDescricaoError(isDescricaoError(descricao))
    setCpfError(isCpfError(cpf))

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
      generoError &&
      deficienciaError &&
      pretensaoError &&
      descricaoError &&
      cpfError &&
      areaAtuacaoError
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
        if (data.localidade !== '') {
          setCidadeError(true)
        }
        if (data.uf !== '') {
          setEstadoError(true)
        }
        if (data.logradouro !== '') {
          setEnderecoError(true)
        }
        if (data.bairro !== '') {
          setBairroError(true)
        }
      })
    return true
  }

  const navigate = useNavigate()

  const createCandidato = async () => {
    if (!isFormError()) {
      setFormularioError(true)
      setOpenSnackbar(true)
      setSeverity('warning')
      setMessage('Campo(s) em branco')
      return
    }
    const response = await handleCreateCandidato(
      perfil,
      email,
      senha,
      nome,
      cpf,
      endereco,
      bairro,
      cidade,
      estado,
      pais,
      numero,
      complemento,
      telefone,
      genero,
      deficiencia,
      cep,
      areaAtuacao,
      pretensao
    ).then(() => {
      setOpenSnackbar(true)
      setSeverity('success')
      setMessage('Candidato cadastrado com sucesso')
      setTimeout(() => {
        navigate('/login/candidato')
        setOpenSnackbar(false)
        clearStatesCandidato()
      }, 2500)
    }).catch(() => {
      setOpenSnackbar(true)
      setSeverity('error')
      setMessage('Erro ao cadastrar o candidato')
      clearStatesCandidato()
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
          Encontre a vaga que tanto espera..
        </Typography>
      </Box>
      <Box sx={{ gridArea: 'main' }}>
        <Box sx={{ borderRadius: '50px 0px 0px 50px', backgroundColor: '#f5f5f5', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ m: 10 }}>
            <Typography sx={{ textAlign: 'center', fontFamily: 'default', m: 2, fontSize: 'h3.fontSize' }}>Criar uma conta</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="E-mail" type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  fullWidth
                  onBlur={() => { setEmailError(isEmailError(email)) }}
                  error={!emailError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Senha" type="password"
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                  fullWidth
                  onBlur={() => { setSenhaError(isSenhaError(senha)) }}
                  error={!senhaError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Nome"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  fullWidth
                  onBlur={() => { setNomeError(isNomeError(nome)) }}
                  error={!nomeError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="CPF"
                  value={cpf}
                  onChange={(event) => setCpf(event.target.value)}
                  InputProps={{
                    inputComponent: MaskedInput as any,
                    inputProps: { mask: "999.999.999-99" },
                  }}
                  fullWidth
                  onBlur={() => { setCpfError(isCpfError(cpf)) }}
                  error={!cpfError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Área de Atuação"
                  value={areaAtuacao}
                  onChange={(event) => setAreaAtuacao(event.target.value)}
                  fullWidth
                  onBlur={() => { setAreaAtuacaoError(isAreaAtuacaoError(areaAtuacao)) }}
                  error={!areaAtuacaoError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Link para sua foto de perfil"
                  value={perfil}
                  onChange={(event) => setPerfil(event.target.value)}
                  fullWidth />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Descrição breve sobre você"
                  value={descricao}
                  onChange={(event) => setDescricao(event.target.value)}
                  multiline
                  rows={4}
                  fullWidth
                  onBlur={() => { setDescricaoError(isDescricaoError(descricao)) }}
                  error={!descricaoError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel id="genero-label">Gênero</InputLabel>
                  <Select
                    labelId="genero-label"
                    id="genero"
                    value={genero}
                    label="Gênero"
                    onChange={(event) => setGenero(event.target.value)}
                    fullWidth
                    onBlur={() => { setGeneroError(isGeneroError(genero)) }}
                    error={!generoError && formularioError}
                  >
                    <MenuItem value={"M"}>Masculino</MenuItem>
                    <MenuItem value={"F"}>Feminino</MenuItem>
                    <MenuItem value={"N"}>Não-binário</MenuItem>
                    <MenuItem value={"G"}>Genderqueer</MenuItem>
                    <MenuItem value={"T"}>Transexual</MenuItem>
                    <MenuItem value={"I"}>Intersexo</MenuItem>
                    <MenuItem value={"Q"}>Questioning</MenuItem>
                    <MenuItem value={"O"}>Outros</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel id="deficiencia-label">Deficiência</InputLabel>
                  <Select
                    labelId="deficiencia-label"
                    id="deficiencia"
                    value={deficiencia}
                    label="Deficiência"
                    onChange={(event) => setDeficiencia(event.target.value)}
                    fullWidth
                    onBlur={() => { setDeficienciaError(isDeficienciaError(deficiencia)) }}
                    error={!deficienciaError && formularioError}
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
                <TextField label="País"
                  value={pais}
                  onChange={(event) => setPais(event.target.value)}
                  fullWidth
                  onBlur={() => { setPaisError(isPaisError(pais)) }}
                  error={!paisError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField label="CEP"
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
                <TextField label="Estado"
                  value={estado}
                  onChange={(event) => setEstado(event.target.value)}
                  fullWidth
                  onBlur={() => { setEstadoError(isEstadoError(estado)) }}
                  error={!estadoError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField label="Cidade"
                  value={cidade}
                  onChange={(event) => setCidade(event.target.value)}
                  fullWidth
                  onBlur={() => { setCidadeError(isCidadeError(cidade)) }}
                  error={!cidadeError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField label="Bairro"
                  value={bairro}
                  onChange={(event) => setBairro(event.target.value)}
                  fullWidth
                  onBlur={() => { setBairroError(isBairroError(bairro)) }}
                  error={!bairroError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField label="Endereço"
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
              <Grid item xs={12} sm={4}>
                <TextField label="Complemento"
                  value={complemento}
                  onChange={(event) => setComplemento(event.target.value)}
                  fullWidth
                  onBlur={() => { setComplementoError(isComplementoError(complemento)) }}
                  error={!complementoError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField label="Telefone"
                  value={telefone}
                  onChange={(event) => setTelefone(event.target.value)}
                  InputProps={{
                    inputComponent: MaskedInput as any,
                    inputProps: { mask: "(99) 9999-99999" },
                  }}
                  fullWidth
                  onBlur={() => { setTelefoneError(isTelefoneError(telefone)) }}
                  error={!telefoneError && formularioError} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Pretensão salarial"
                  value={pretensao}
                  onChange={(event) => setPresensao(event.target.value.replace(/\D/g, ''))}
                  fullWidth
                  onBlur={() => { setPretensaoError(isPretensaoError(pretensao)) }}
                  error={!pretensaoError && formularioError} />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={createCandidato}
                  style={{ borderRadius: 50 }}
                  fullWidth>
                  Cadastrar
                </Button>
              </Grid>
            </Grid>
          </Box >
        </Box >
      </Box >
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