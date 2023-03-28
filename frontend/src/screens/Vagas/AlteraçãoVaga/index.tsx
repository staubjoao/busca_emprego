import { useNavigate, useParams } from 'react-router-dom'
import { FormEvent, useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { ButtonBase, FormLabel, Typography } from '@mui/material'
import { InputSalario, InputVaga } from './styles'
import warning from '../../../assets/images/warning.svg'
import { useStore } from '../../../hooks/stores'
import { observer } from 'mobx-react-lite'

export const AlterarVaga = observer(() => {
  const { loginStore, vagaStore } = useStore()
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    vaga,
    setVaga,
    titulo,
    setTitulo,
    periodo,
    setPeriodo,
    salario,
    setSalario,
    descricao,
    setDescricao,
    setErro,
    canNavigate,
    setCanNavigate
  } = vagaStore

  const handleVaga = async () => {
    if (id !== undefined) {
      setVaga(await vagaStore.handleShowVagaEmpresa(id, loginStore.token))
    }
  }

  const handleEditVaga = (e: FormEvent) => {
    e.preventDefault()
    if (id !== undefined) {
      vagaStore.handleEditVaga(
        id,
        loginStore.token,
        e,
        titulo,
        periodo,
        descricao,
        salario,
        loginStore.user.id,
        setErro,
        setCanNavigate
      )
      canNavigate && navigate('/empresa/vagas/' + loginStore.user.id)
    }
  }

  useEffect(() => {
    handleVaga()
  }, [])

  return (
    <div>
      <Box width="100%" marginX="auto" maxWidth="32rem" marginBottom="4rem">
        <Typography color="#FFFFFF" fontSize="1.5rem" marginTop="1.5rem">
          Alteração de vaga "{vaga.titulo}"
        </Typography>
        <Typography color="rgb(209 213 219)" marginTop="1rem">
          Preencha o formulário de vagas abaixo
        </Typography>
      </Box>
      <Box bgcolor="rgb(245 245 244)" minHeight="82.2vh">
        <Box
          width="100%"
          marginX="auto"
          maxWidth="32rem"
          padding="2rem"
          bgcolor="#FFFFFF"
          position="relative"
          bottom="2.5rem"
          borderRadius="0.5rem"
        >
          <form onSubmit={e => handleEditVaga(e)}>
            <Typography
              fontSize="1.25rem"
              fontWeight="600"
              marginBottom="0.5rem"
            >
              Dados da Vaga
            </Typography>

            <hr />

            <Box marginTop="1rem">
              <FormLabel
                className="rgb(107 114 128)"
                sx={{ fontSize: '0.875rem', lineHeight: '1.25rem' }}
                htmlFor="titulo"
              >
                Título
              </FormLabel>
              <InputVaga
                type="text"
                id="titulo"
                value={titulo || vaga.titulo}
                onChange={event => setTitulo(event.target.value)}
              />
            </Box>
            <Box marginTop="1rem">
              <FormLabel
                className="rgb(107 114 128)"
                sx={{ fontSize: '0.875rem', lineHeight: '1.25rem' }}
                htmlFor="periodo"
              >
                Período
              </FormLabel>
              <InputVaga
                type="text"
                id="periodo"
                value={periodo || vaga.periodo}
                onChange={event => setPeriodo(event.target.value)}
              />
            </Box>

            <Box marginTop="1rem">
              <FormLabel
                className="rgb(107 114 128)"
                sx={{ fontSize: '0.875rem', lineHeight: '1.25rem' }}
                htmlFor="periodo"
              >
                Salário
              </FormLabel>
              <InputSalario
                mask="R$ 99999999999"
                id="salario"
                maskChar={''}
                value={salario || vaga.salario}
                onChange={event =>
                  setSalario(parseFloat(event.target.value.slice(3)))
                }
              />
            </Box>

            <Box marginTop="1rem">
              <FormLabel
                className="rgb(107 114 128)"
                sx={{ fontSize: '0.875rem', lineHeight: '1.25rem' }}
                htmlFor="descricao"
              >
                Descrição
              </FormLabel>
              <Box
                component="textarea"
                sx={{
                  backgroundColor: 'rgb(245 245 244)',
                  borderRadius: '0.25rem',
                  borderWidth: '1px',
                  width: '100%',
                  paddingLeft: '0.3rem',
                  padding: '0.25rem',
                  height: '16rem'
                }}
                id="descricao"
                value={descricao || vaga.descricao}
                onChange={event => setDescricao(event.target.value)}
              />
            </Box>

            <Box display="flex" justifyContent="space-between" marginTop="1rem">
              <Box display="flex" alignItems="center">
                <Box component="img" src={warning} alt="Aviso" width="1.5rem" />
                <Box
                  component="span"
                  fontSize="0.875rem"
                  lineHeight="1.25rem"
                  color="rgb(107 114 128)"
                  marginLeft="0.5rem"
                >
                  Importante! <br /> Preencha todos os dados
                </Box>
              </Box>
              <div>
                <ButtonBase
                  type="submit"
                  sx={{
                    backgroundColor: '#5E80BB',
                    color: '#FFFFFF',
                    paddingBlock: '0.625rem',
                    paddingInline: '1.5rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    ':hover': {
                      backgroundColor: '#4766AC'
                    }
                  }}
                >
                  Salvar Vaga
                </ButtonBase>
              </div>
            </Box>
          </form>
        </Box>
      </Box>
    </div>
  )
})
