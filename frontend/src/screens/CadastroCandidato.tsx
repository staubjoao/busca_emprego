import { useNavigate, Link } from 'react-router-dom'
import InputMask from "react-input-mask"
import { api } from '../lib/axios'
import { FormEvent, useState, forwardRef } from 'react'
import { InputLabel, FormControl, Select, MenuItem, Typography, Box, Grid, TextField, InputBaseComponentProps, Button, Snackbar, Alert } from '@mui/material'

type MaskedInputProps = {
    mask: string;
} & InputBaseComponentProps;

const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
    ({ mask, ...inputProps }, ref) => {
        return <InputMask mask={mask} {...inputProps} />;
    }
)

export function CadastroCandidato() {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [senha, setSenha] = useState('')
    const [senhaError, setSenhaError] = useState(false)
    const [nome, setNome] = useState('')
    const [nomeError, setNomeError] = useState(false)
    const [cep, setCep] = useState('')
    const [cepError, setCepError] = useState(false)
    const [endereco, setEndereco] = useState('')
    const [enderecoError, setEnderecoError] = useState(false)
    const [bairro, setBairro] = useState('')
    const [bairroError, setBairroError] = useState(false)
    const [cidade, setCidade] = useState('')
    const [cidadeError, setCidadeError] = useState(false)
    const [estado, setEstado] = useState('')
    const [estadoError, setEstadoError] = useState(false)
    const [pais, setPais] = useState('')
    const [paisError, setPaisError] = useState(false)
    const [numero, setNumero] = useState('')
    const [numeroError, setNumeroError] = useState(false)
    const [complemento, setComplemento] = useState('')
    const [complementoError, setComplementoError] = useState(false)
    const [telefone, setTelefone] = useState('')
    const [telefoneError, setTelefoneError] = useState(false)
    const [genero, setGenero] = useState('')
    const [generoError, setGeneroError] = useState(false)
    const [deficiencia, setDeficiencia] = useState('')
    const [deficienciaError, setDeficienciaError] = useState(false)
    const [pretensao, setPresensao] = useState('')
    const [pretensaoError, setPretensaoError] = useState(false)
    const [descricao, setDescricao] = useState('')
    const [descricaoError, setDescricaoError] = useState(false)
    const [cpf, setCpf] = useState('')
    const [cpfError, setCpfError] = useState(false)
    const [formularioError, setFormularioError] = useState(false)

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [severity, setSeverity] = useState<
        'success' | 'info' | 'warning' | 'error'
    >('success')
    const [mensagem, setMensagem] = useState('')
    const navigate = useNavigate()

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

    const isDeficienciaError = () => {
        return deficiencia.trim() !== ''
    }

    const isComplementoError = () => {
        return complemento.trim() !== ''
    }

    const isGeneroError = () => {
        return genero.trim() !== ''
    }

    const isPretensaoError = () => {
        return pretensao.trim() !== ''
    }

    const isDescricaoError = () => {
        return descricao.trim() !== ''
    }

    const isCpfError = () => {
        const cpfAux = cpf.replace(/[^\d]+/g, '');
        if (cpfAux === '') return false;
        if (cpfAux.length !== 11 ||
            cpfAux === "00000000000" ||
            cpfAux === "11111111111" ||
            cpfAux === "22222222222" ||
            cpfAux === "33333333333" ||
            cpfAux === "44444444444" ||
            cpfAux === "55555555555" ||
            cpfAux === "66666666666" ||
            cpfAux === "77777777777" ||
            cpfAux === "88888888888" ||
            cpfAux === "99999999999")
            return false;

        let add = 0;
        for (let i = 0; i < 9; i++)
            add += parseInt(cpfAux.charAt(i)) * (10 - i);
        let rev = 11 - (add % 11);
        if (rev === 10 || rev === 11)
            rev = 0;
        if (rev !== parseInt(cpfAux.charAt(9)))
            return false;

        add = 0;
        for (let i = 0; i < 10; i++)
            add += parseInt(cpfAux.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev === 10 || rev === 11)
            rev = 0;
        if (rev !== parseInt(cpfAux.charAt(10)))
            return false;
        return true;
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
        setDeficienciaError(isDeficienciaError())
        setPretensaoError(isPretensaoError())
        setDescricaoError(isDescricaoError())
        setCpfError(isCpfError())

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
            cpfError
        )
    }

    async function cadastrar(e: FormEvent) {
        e.preventDefault()

        if (!isFormError()) {
            setFormularioError(true)
            setOpenSnackbar(true)
            setSeverity('warning')
            setMensagem('Campo(s) em branco')
            return
        }

        await api
            .post('/usuario/cadastro/candidatos', {
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
                cep
            })
            .then(res => {
                setOpenSnackbar(true)
                setSeverity('success')
                setMensagem('Candidato(a) cadastrado(a) com sucesso')
                setTimeout(() => navigate('/'), 2000)
            }).catch((erro) => {
                setOpenSnackbar(true)
                setSeverity('error')
                setMensagem('Erro ao cadastrar o(a) candidato(a)')
                setEmail('')
                setSenha('')
                setNome('')
                setCpf('')
                setDescricao('')
                setGenero('')
                setDeficiencia('')
                setCep('')
                setEndereco('')
                setBairro('')
                setCidade('')
                setEstado('')
                setPais('')
                setNumero('')
                setComplemento('')
                setTelefone('')
                setPresensao('')
            })
    }

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
                }}>
                    <Link to={'/'} className="transition-all">
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
                    </Link>
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
                        <form onSubmit={cadastrar}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="E-mail" type="email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        fullWidth
                                        onBlur={() => { setEmailError(isEmailError) }}
                                        error={!emailError && formularioError} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Senha" type="password"
                                        value={senha}
                                        onChange={(event) => setSenha(event.target.value)}
                                        fullWidth
                                        onBlur={() => { setSenhaError(isSenhaError) }}
                                        error={!senhaError && formularioError} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Nome"
                                        value={nome}
                                        onChange={(event) => setNome(event.target.value)}
                                        fullWidth
                                        onBlur={() => { setNomeError(isNomeError) }}
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
                                        onBlur={() => { setCpfError(isCpfError) }}
                                        error={!cpfError && formularioError} />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        label="Descrição breve sobre você"
                                        value={descricao}
                                        onChange={(event) => setDescricao(event.target.value)}
                                        multiline
                                        rows={4}
                                        fullWidth
                                        onBlur={() => { setDescricaoError(isDescricaoError) }}
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
                                            onBlur={() => { setGeneroError(isGeneroError) }}
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
                                            onBlur={() => { setDeficienciaError(isDeficienciaError) }}
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
                                        onBlur={() => { setPaisError(isPaisError) }}
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
                                        onBlur={() => { setCepError(isCepError) }}
                                        error={!cepError && formularioError} />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField label="Estado"
                                        value={estado}
                                        onChange={(event) => setEstado(event.target.value)}
                                        fullWidth
                                        onBlur={() => { setEstadoError(isEstadoError) }}
                                        error={!estadoError && formularioError} />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField label="Cidade"
                                        value={cidade}
                                        onChange={(event) => setCidade(event.target.value)}
                                        fullWidth
                                        onBlur={() => { setCidadeError(isCidadeError) }}
                                        error={!cidadeError && formularioError} />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField label="Bairro"
                                        value={bairro}
                                        onChange={(event) => setBairro(event.target.value)}
                                        fullWidth
                                        onBlur={() => { setBairroError(isBairroError) }}
                                        error={!bairroError && formularioError} />
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <TextField label="Endereço"
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
                                <Grid item xs={12} sm={4}>
                                    <TextField label="Complemento"
                                        value={complemento}
                                        onChange={(event) => setComplemento(event.target.value)}
                                        fullWidth
                                        onBlur={() => { setComplementoError(isComplementoError) }}
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
                                        onBlur={() => { setTelefoneError(isTelefoneError) }}
                                        error={!telefoneError && formularioError} />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        label="Pretensão salarial"
                                        value={pretensao}
                                        onChange={(event) => setPresensao(event.target.value.replace(/\D/g, ''))}
                                        fullWidth
                                        onBlur={() => { setPretensaoError(isPretensaoError) }}
                                        error={!pretensaoError && formularioError} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        style={{ borderRadius: 50 }}
                                        fullWidth>
                                        Cadastrar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
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
                    {mensagem}
                </Alert>
            </Snackbar>
        </Box >
    )
}