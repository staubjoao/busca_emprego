import { Box, ButtonBase, IconButton, Typography } from '@mui/material'
import empresaIcon from '../../../assets/icons/empresaIcon.svg'
import {
  RemoveRedEyeOutlined,
  VisibilityOffOutlined
} from '@mui/icons-material'
import { toggleVaga } from '../../../service/vagas'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ListaProps {
  listagem: {
    id: number
    titulo: string
    descricao: string
    periodo: string
    salario: number
    visualizar: boolean
    EmpresaId: number
    Empresa: {
      nome: string
      logo: string | null
    }
  }[]
}

export function Lista(props: ListaProps) {
  const { listagem } = props
  const navigate = useNavigate()
  const [changeIcon, setChangeIcon] = useState(Boolean)

  function toggle(id: number, visualizar: boolean) {
    const retToggle = toggleVaga(id, visualizar)
    retToggle.then(res => {
      res == 1 ? setChangeIcon(true) : setChangeIcon(false)
      console.log(res)
    })
  }

  return (
    <Box>
      {listagem.map(element => (
        <Box
          key={element.EmpresaId}
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
              {element.Empresa.logo === null ? (
                <Box
                  component="img"
                  src={empresaIcon}
                  alt="Empresa sem foto"
                  width="5rem"
                />
              ) : (
                <Box
                  component="img"
                  src={element.Empresa.logo}
                  width="4rem"
                  alt="Foto da empresa"
                />
              )}
              <Box component="span" paddingTop="0.5rem" marginLeft="1rem">
                <Typography variant="h5" fontWeight="bold" fontSize="0.875rem">
                  {element.titulo}
                </Typography>
                <Typography fontSize="0.875rem">
                  {element.Empresa.nome}
                </Typography>
              </Box>
            </Box>
            <div onClick={e => toggle(element.id, element.visualizar)}>
              <input type="hidden" value={element.id}></input>
              <IconButton>
                {element.visualizar === true ? (
                  <RemoveRedEyeOutlined />
                ) : (
                  <VisibilityOffOutlined />
                )}
              </IconButton>
            </div>
          </Box>

          <Box
            marginX="0.5rem"
            fontSize="0.875rem"
            marginTop="0.5rem"
            paddingX="1.25rem"
            paddingBottom="1.25rem"
            color="rgb(107 114 128 / var(--tw-text-opacity))"
          >
            {element.descricao}
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
                {element.periodo}
              </Typography>
              <Typography variant="subtitle2" color="#5E80BB" fontWeight="bold">
                R$ {element.salario.toString().replace('.', ',')}
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
                onClick={e => navigate('/empresa/alterar/vaga/' + element.id)}
              >
                <Box component="span">Alterar Vaga</Box>
              </ButtonBase>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}