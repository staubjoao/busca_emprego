import { useNavigate, Link } from 'react-router-dom';
import { api } from '../lib/axios';
import { Box, Divider, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SectionCreate } from '../components/SectionCreate';
import { useState } from 'react';

const Content = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: '60px',
  padding: theme.spacing(4),
  width: '50%',
  borderRadius: 16,
}));

export function CadastroCurriculo() {
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');
  const [cargo, setCargo] = useState('');

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Content>
        <SectionCreate
          title="Experiências profissionais"
          firstItem={{
            label: 'Nome da empresa',
            placeholder: 'Digite o nome da empresa',
            currentValue: nomeEmpresa,
            setCurrentValue: setNomeEmpresa,
          }}
          secondItem={{
            label: 'Cargo',
            placeholder: 'Digite o cargo',
            currentValue: cargo,
            setCurrentValue: setCargo,
          }}
          thirdItem={{
            label: 'Início',
            placeholder: 'Data de início',
            currentValue: inicio,
            setCurrentValue: setInicio,
          }}
          fourItem={{
            label: 'Fim',
            placeholder: 'Data de fim',
            currentValue: fim,
            setCurrentValue: setFim,
          }}
        />
        {/* <SectionCreate
          title="Idiomas"
          firstItem={{
            label: 'Idioma',
            placeholder: 'Digite o nome da empresa',
          }}
          secondItem={{
            label: 'Nível',
            placeholder: 'Digite o cargo',
          }}
          thirdItem={{
            label: 'Início',
            placeholder: 'Data de início',
          }}
          fourItem={{
            label: 'Fim',
            placeholder: 'Data de fim',
          }}
        /> */}
      </Content>
    </Box>
  );
}
