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
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [pais, setPais] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [telefone, setTelefone] = useState('')
    const [sexo, setSexo] = useState('')
    const [genero, setGenero] = useState('')
    const [deficiencia, setDeficiencia] = useState('')
    const [pretensao, setPresensao] = useState('')
    const [descricao, setDescricao] = useState('')
    const [cpf, setCpf] = useState('')
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [severity, setSeverity] = useState<
        'success' | 'info' | 'warning' | 'error'
    >('success')
    const [mensagem, setMensagem] = useState('')
    const navigate = useNavigate()

    async function cadastrar(e: FormEvent) {
        e.preventDefault()

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
                sexo,
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
                setSexo('')
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
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Senha" type="password"
                                        value={senha}
                                        onChange={(event) => setSenha(event.target.value)}
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Nome"
                                        value={nome}
                                        onChange={(event) => setNome(event.target.value)}
                                        fullWidth />
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
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        label="Descrição breve sobre você"
                                        value={descricao}
                                        onChange={(event) => setDescricao(event.target.value)}
                                        multiline
                                        rows={4}
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <FormControl fullWidth>
                                        <InputLabel id="sexo-label">Sexo</InputLabel>
                                        <Select
                                            labelId="sexo-label"
                                            id="sexo"
                                            value={sexo}
                                            label="Sexo"
                                            onChange={(event) => setSexo(event.target.value)}
                                            fullWidth
                                        >
                                            <MenuItem value={"M"}>Masculino</MenuItem>
                                            <MenuItem value={"F"}>Feminino</MenuItem>
                                            <MenuItem value={"O"}>Outro</MenuItem>
                                        </Select>
                                    </FormControl>
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
                                <Grid item xs={12} sm={3}>
                                    <TextField label="País"
                                        value={pais}
                                        onChange={(event) => setPais(event.target.value)}
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField label="CEP"
                                        value={cep}
                                        onChange={(event) => setCep(event.target.value)}
                                        onBlur={checkCEP}
                                        InputProps={{
                                            inputComponent: MaskedInput as any,
                                            inputProps: { mask: "99999-999" },
                                        }}
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField label="Estado"
                                        value={estado}
                                        onChange={(event) => setEstado(event.target.value)}
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField label="Cidade"
                                        value={cidade}
                                        onChange={(event) => setCidade(event.target.value)}
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField label="Bairro"
                                        value={bairro}
                                        onChange={(event) => setBairro(event.target.value)}
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <TextField label="Endereço"
                                        value={endereco}
                                        onChange={(event) => setEndereco(event.target.value)}
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        label="Número"
                                        value={numero}
                                        onChange={(event) => setNumero(event.target.value.replace(/\D/g, ''))}
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField label="Complemento"
                                        value={complemento}
                                        onChange={(event) => setBairro(event.target.value)}
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField label="Telefone"
                                        value={telefone}
                                        onChange={(event) => setTelefone(event.target.value)}
                                        InputProps={{
                                            inputComponent: MaskedInput as any,
                                            inputProps: { mask: "(99) 9999-99999" },
                                        }}
                                        fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        label="Pretensão salarial"
                                        value={pretensao}
                                        onChange={(event) => setPresensao(event.target.value.replace(/\D/g, ''))}
                                        fullWidth />
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