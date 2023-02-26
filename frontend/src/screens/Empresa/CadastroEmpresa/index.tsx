import { useNavigate, Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { api } from '../../../lib/axios';
import { FormEvent, useState, forwardRef } from 'react';
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

type MaskedInputProps = {
  mask: string;
} & InputBaseComponentProps;

const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ mask, ...inputProps }, ref) => {
    return <InputMask mask={mask} {...inputProps} />;
  }
);

export function CadastroEmpresa() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [ramo, setRamo] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [severity, setSeverity] = useState<
    'success' | 'info' | 'warning' | 'error'
  >('success');
  const navigate = useNavigate();

  async function cadastrar(e: FormEvent) {
    e.preventDefault();

    await api
      .post('/usuario/cadastro/empresas', {
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
        telefone,
      })
      .then((res) => {
        setOpenSnackbar(true);
        setSeverity('success');
        navigate('/');
      })
      .catch((erro) => {
        setOpenSnackbar(true);
        setSeverity('error');
        setEmail('');
        setSenha('');
        setNome('');
        setCep('');
        setEndereco('');
        setBairro('');
        setCidade('');
        setEstado('');
        setPais('');
        setNumero('');
        setComplemento('');
        setTelefone('');
        setRamo('');
        setCnpj('');
      });
  }

  const checkCEP = () => {
    const cepApi = cep.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cepApi}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setCidade(data.localidade);
        setEstado(data.uf);
        setEndereco(data.logradouro);
        setBairro(data.bairro);
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
        >
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
            <form onSubmit={cadastrar}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="E-mail"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Senha"
                    type="password"
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nome da Empresa"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Ramo da Empresa"
                    value={ramo}
                    onChange={(event) => setRamo(event.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="CNPJ"
                    value={cnpj}
                    onChange={(event) => setCnpj(event.target.value)}
                    InputProps={{
                      inputComponent: MaskedInput as any,
                      inputProps: { mask: '99.999.999/9999-99' },
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="País"
                    value={pais}
                    onChange={(event) => setPais(event.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="CEP"
                    value={cep}
                    onChange={(event) => setCep(event.target.value)}
                    onBlur={checkCEP}
                    InputProps={{
                      inputComponent: MaskedInput as any,
                      inputProps: { mask: '99999-999' },
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Estado"
                    value={estado}
                    onChange={(event) => setEstado(event.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Cidade"
                    value={cidade}
                    onChange={(event) => setCidade(event.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Endereço"
                    value={endereco}
                    onChange={(event) => setEndereco(event.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="Número"
                    value={numero}
                    onChange={(event) =>
                      setNumero(event.target.value.replace(/\D/g, ''))
                    }
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="Bairro"
                    value={bairro}
                    onChange={(event) => setBairro(event.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="Complemento"
                    value={complemento}
                    onChange={(event) => setComplemento(event.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="Telefone"
                    value={telefone}
                    onChange={(event) =>
                      setTelefone(event.target.value.replace(/\D/g, ''))
                    }
                    InputProps={{
                      inputComponent: MaskedInput as any,
                      inputProps: { mask: '(99) 9999-99999' },
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ borderRadius: 50 }}
                    fullWidth
                  >
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
          Empresa cadastrada com sucesso
        </Alert>
      </Snackbar>
    </Box>
  );
}
