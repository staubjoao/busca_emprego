import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { ButtonBase, FormLabel, Typography } from '@mui/material'
import { InputSalario, InputVaga } from './styles'
import warning from '../../../assets/images/warning.svg'
import { alteracaoVaga, getInfoVaga } from '../../../service/vagas'

export function AlterarVaga() {
  const [erro, setErro] = useState('')
  const [titulo, setTitulo] = useState('')
  const [periodo, setPeriodo] = useState('')
  const [salario, setSalario] = useState(0)
  const [descricao, setDescricao] = useState('')
  const [canNavigate, setCanNavigate] = useState(false)
  const [objVaga, setObjVaga] = useState(Object)

  const EmpresaId = localStorage.getItem('id')
  const idVaga = useParams()
  const navigate = useNavigate()

  function loadDadosVaga() {
    getInfoVaga(Number(idVaga.id)).then(res => setObjVaga(res))
    setTitulo(objVaga.titulo)
    setPeriodo(objVaga.periodo)
    setSalario(objVaga.salario)
    setDescricao(objVaga.descricao)
    console.log(objVaga)
  }

  useEffect(() => {
    loadDadosVaga()
  }, [])

  return (
    <div>
      <Box width="100%" marginX="auto" maxWidth="32rem" marginBottom="4rem">
        <Typography color="#FFFFFF" fontSize="1.5rem" marginTop="1.5rem">
          Alteração de vaga "{objVaga.titulo}"
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
          <form
            onSubmit={e => {
              alteracaoVaga(
                idVaga.id,
                e,
                titulo,
                periodo,
                descricao,
                salario,
                EmpresaId,
                setErro
              )
              navigate('/empresa/vagas/' + EmpresaId)
            }}
          >
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
                value={titulo || objVaga.titulo}
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
                value={periodo || objVaga.periodo}
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
                value={salario || objVaga.salario}
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
                value={descricao || objVaga.descricao}
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
}
