import { useNavigate, Link } from 'react-router-dom';
// import paper from '../assets/images/paper.png'
import IMaskInput from 'react-input-mask';
import { api } from '../lib/axios';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Divider,
  Container,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Content = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: '60px',
  padding: theme.spacing(4),
  width: '50%',
  borderRadius: 16,
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}));

const Field = styled(TextField)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
}));

const DvividerStyle = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const Label = styled(Typography)(({ theme }) => ({
  color: '#9C98A6',
  fontSize: 16,
}));

const TitleSection = styled(Typography)(({ theme }) => ({
  color: '#32264D',
  fontWeight: 'bold',
  fontSize: 24,
}));

const TextButtonAdd = styled(Typography)(({ theme }) => ({
  color: '#5E80BB',
  fontWeight: 'bold',
  fontSize: 20,
}));

export function CadastroCurriculo() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Content>
        <HeaderSection>
          <TitleSection>Experiências profissionais</TitleSection>
          <TextButtonAdd>Adicionar</TextButtonAdd>
        </HeaderSection>

        <DvividerStyle />

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Label>Nome da empresa</Label>
            <Field placeholder="Digite o nome" />
          </Grid>
          <Grid item xs={6}>
            <Label>Cargo</Label>
            <Field placeholder="Digite o cargo" />
          </Grid>
          <Grid item xs={3}>
            <Label>Início</Label>
            <Field placeholder="Data de inicio" />
          </Grid>
          <Grid item xs={3}>
            <Label>Fim</Label>
            <Field placeholder="Data de fim" />
          </Grid>
        </Grid>
      </Content>
    </Box>
  );
}
