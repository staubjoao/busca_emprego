import { Box, ButtonBase, IconButton, Switch, Typography } from '@mui/material'
import empresaIcon from '../../../assets/icons/empresaIcon.svg'
import {
  RemoveRedEyeOutlined,
  VisibilityOffOutlined,
  EditOutlined
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../../hooks/stores'
import { observer } from 'mobx-react-lite'
import {FormEvent} from "react";

interface ListaProps {
  listagem: {
    id: string
    titulo: string
    descricao: string
    periodo: string
    salario: number
    visualizar: number
    EmpresaId: string
    Empresa: {
      logo: string
      nome: string
    }
  }[],
  handleToggle: (
      e: FormEvent,
      id: string,
      visualizar: number,
      token: string
  ) => any
}

export const Lista = observer((props: ListaProps) => {
  const { listagem, handleToggle } = props
  const { loginStore, vagaStore } = useStore()
  const navigate = useNavigate()
  const { visualizar, setVisualizar } = vagaStore

  const handleVisualizar = (visualizar: number) => {
    return visualizar === 1 ? 1 : 0
  }
  return (
    <Box>
      {listagem.map(element => (
        <Box
          key={element.id}
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
                  width="4rem"
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
            <Box
              component="form"
              display="flex"
              onSubmit={e =>
                handleToggle(e, element.id, element.visualizar, loginStore.token)
              }
            >
              <IconButton
                type="submit"
                onClick={() =>
                  setVisualizar(handleVisualizar(Number(element.visualizar)))
                }
              >
                {Number(element.visualizar) === 1 || visualizar === 1 ? (
                  <RemoveRedEyeOutlined />
                ) : (
                  <VisibilityOffOutlined />
                )}
              </IconButton>
              <IconButton
                onClick={e => navigate('/empresa/alterar/vaga/' + element.id)}
              >
                <EditOutlined />
              </IconButton>
            </Box>
          </Box>

          <Box
            marginX="0.5rem"
            fontSize="0.875rem"
            marginTop="0.5rem"
            paddingX="1.25rem"
            paddingBottom="1.25rem"
            color="rgb(107 114 128 / var(--tw-text-opacity))"
          >
            {element.descricao.length < 250
              ? element.descricao
              : element.descricao.substring(0, 50) + ' ...'}
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
                {element.salario !== null
                  ? 'R$ ' + element.salario?.toString().replace('.', ',')
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
                <Box
                  component="span"
                  onClick={() =>
                    navigate('/empresa/vaga/' + element.id + '/curriculos')
                  }
                >
                  Listar Currículos
                </Box>
              </ButtonBase>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
})
