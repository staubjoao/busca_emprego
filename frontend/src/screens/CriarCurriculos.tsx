import { useNavigate, Link } from 'react-router-dom';
import { api } from '../lib/axios';
import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SectionCreate } from '../components/SectionCreate';

const Content = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: '60px',
  padding: theme.spacing(4),
  width: '50%',
  borderRadius: 16,
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
        <SectionCreate />
      </Content>
    </Box>
  );
}
