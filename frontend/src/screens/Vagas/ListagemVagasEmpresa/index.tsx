import IMaskInput from 'react-input-mask'
import { useEffect, useState } from 'react'
import { getVagasEmpresa } from '../../../service/vagas'
import { Box, Typography } from '@mui/material'
import { Lista } from '../../../components/ListaVagas/Empresa/ListaEmpresa'

export function ListagemVagasEmpresa() {
  const [lista, setLista] = useState<
    {
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
  >([])

  const handleVagas = async () => {
    const newList = await getVagasEmpresa()
    setLista(newList)
  }

  useEffect(() => {
    handleVagas()
  }, [])

  return (
    <Box bgcolor="rgb(245 245 244)">
      <Box
        maxWidth="100%"
        bgcolor="#5E80BB"
        marginBottom="4rem"
        marginTop="0"
        sx={{
          paddingBlock: '3.6rem'
        }}
      >
        <Typography
          variant="h5"
          color="#FFFFFF"
          maxWidth="32rem"
          textAlign="left"
          marginX="auto"
        >
          Estas são suas vagas...
        </Typography>
      </Box>
      <Box maxHeight="100%">
        <Lista listagem={lista} />
      </Box>
    </Box>
  )
}
