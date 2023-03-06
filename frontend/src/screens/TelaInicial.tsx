import people from '../assets/images/people.svg'
import { useNavigate } from 'react-router-dom'
import { Box, ButtonBase, Container, Typography } from '@mui/material'

export function TelaInicial() {
  const navigate = useNavigate()
  return (
    <Container>
      <Box display="grid" gap="5rem" marginTop="5rem">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="10rem"
        >
          <Box color="#FFFFFF">
            <Typography variant="h2" fontWeight="bolder">
              buscaEmpregos
            </Typography>
            <Typography variant="h4">
              Sua plataforma de empregos online
            </Typography>
          </Box>
          <div>
            <img src={people} />
          </div>
        </Box>

        <Box display="flex" gap="1rem" maxWidth="100%">
          <ButtonBase
            type="button"
            onClick={() => navigate('/login/candidato')}
            sx={{
              display: 'inline-block',
              bgcolor: '#4766AC',
              color: '#FFFFFF',
              paddingInline: '3.5rem',
              paddingBlock: '1.24rem',
              borderRadius: '0.25rem',
              fontSize: '1.5rem',
              ':hover': {
                bgcolor: '#3F5E9B',
                transition: '0.5s'
              }
            }}
          >
            Candidato
          </ButtonBase>
          <ButtonBase
            type="button"
            onClick={() => navigate('/login/empresa')}
            sx={{
              display: 'inline-block',
              bgcolor: '#FFFFFF',
              color: '#4766AC',
              paddingInline: '3.9rem',
              paddingBlock: '1.24rem',
              borderRadius: '0.25rem',
              fontSize: '1.5rem',
              ':hover': {
                bgcolor: '#EAEAEA',
                transition: '0.5s'
              }
            }}
          >
            Empresa
          </ButtonBase>
        </Box>
      </Box>
    </Container>
  )
}
