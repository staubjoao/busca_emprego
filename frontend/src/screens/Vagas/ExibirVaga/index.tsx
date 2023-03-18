import { Box, ButtonBase, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { exibirVaga } from '../../../service/vagas'
import empresaIcon from '../../../assets/icons/empresaIcon.svg'
import { useStore } from '../../../hooks/stores'

export function ExibirVaga() {
  const idVaga = useParams()
  const { loginStore } = useStore()

  const [vaga, setVaga] = useState<{
    id: number
    titulo: string
    descricao: string
    periodo: string
    salario: number | null
    visualizar: boolean
    EmpresaId: number
    Empresa: {
      nome: string
      logo: string | null
    }
  }>()

  const handleVagas = async () => {
    if (idVaga.id !== undefined) {
      await exibirVaga(idVaga.id, loginStore.token).then(res => setVaga(res))
    }
  }

  useEffect(() => {
    handleVagas()
  }, [])

  return (
    <Box bgcolor="rgb(245 245 244)">
      <Box
        maxWidth="100%"
        bgcolor="#5E80BB"
        sx={{
          paddingBlock: '3.6rem'
        }}
      />
      <Box minHeight="87.5vh" position="relative" bottom="30px" marginX="auto">
        <Box
          marginX="auto"
          maxWidth="32rem"
          bgcolor="#FFFFFF"
          border-width="px"
          borderRadius="0.25rem"
          marginBottom="20px"
        >
          <Box
            display="flex"
            paddingX="1.25rem"
            paddingTop="1.25rem"
            alignItems="start"
            justifyContent="space-between"
          >
            <Box display="flex">
              {vaga?.Empresa.logo === null ? (
                <Box
                  component="img"
                  src={empresaIcon}
                  alt="Empresa sem foto"
                  width="5rem"
                />
              ) : (
                <Box
                  component="img"
                  src={vaga?.Empresa.logo}
                  width="4rem"
                  alt="Foto da empresa"
                />
              )}
              <Box component="span" paddingTop="0.5rem" marginLeft="1rem">
                <Typography variant="h5" fontWeight="bold" fontSize="0.875rem">
                  {vaga?.titulo}
                </Typography>
                <Typography fontSize="0.875rem">
                  {vaga?.Empresa.nome}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box component="h5" padding="2rem">
            {vaga?.descricao}
          </Box>
          <Box bgcolor="rgb(250 250 249)">
            <Box
              padding="1.25rem"
              marginX="0.5rem"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              border-width="2px"
            >
              <Typography variant="subtitle2" color="rgb(148 163 184)">
                {vaga?.periodo}
              </Typography>
              <Typography variant="subtitle2" color="#5E80BB" fontWeight="bold">
                R${' '}
                {vaga?.salario !== null
                  ? 'R$ ' + vaga?.salario.toString().replace('.', ',')
                  : 'Faixa de salário indisponível'}
              </Typography>
              <ButtonBase
                sx={{
                  backgroundColor: '#5E80BB',
                  color: '#FFFFFF',
                  paddingBlock: '0.625rem',
                  paddingInline: '1.5rem',
                  borderRadius: '0.25rem',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  ':hover': {
                    backgroundColor: '#4766AC'
                  }
                }}
              >
                <Box component="span">Candidatar-se</Box>
              </ButtonBase>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
