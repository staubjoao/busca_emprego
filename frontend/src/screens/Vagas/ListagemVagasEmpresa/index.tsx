import IMaskInput from 'react-input-mask'
import { useEffect, useState } from 'react'
import { getVagasEmpresa, toggleVaga } from '../../../service/vagas'
import { Box, Pagination, Typography } from '@mui/material'
import { Lista } from '../../../components/ListaVagas/Empresa/ListaEmpresa'

const pageSize = 3

export function ListagemVagasEmpresa() {
  const [lista, setLista] = useState<
    {
      id: number
      titulo: string
      descricao: string
      periodo: string
      salario: number
      visualizar: number
      EmpresaId: number
      Empresa: {
        nome: string
        logo: string | null
      }
    }[]
  >([])

  const [pagination, setPagination] = useState<{
    count: number
    from: number
    to: number
  }>({
    count: 0,
    from: 0,
    to: pageSize
  })

  const handleVagas = async () => {
    const id = localStorage.getItem('id')
    const newList = await getVagasEmpresa(Number(id))
    const data = {
      count: newList.length,
      data: newList.slice(pagination.from, pagination.to)
    }
    setLista(data.data)
    setPagination({ ...pagination, count: data.count })
  }

  useEffect(() => {
    handleVagas()
  }, [pagination.from, pagination.to])

  const handlePageChange = (event: any, page: any) => {
    const from = (page - 1) * pageSize
    const to = (page - 1) * pageSize + pageSize

    setPagination({ ...pagination, from: from, to: to })
  }

  return (
    <Box bgcolor="rgb(245 245 244)">
      <Box
        maxWidth="100%"
        bgcolor="#5E80BB"
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
      <Box minHeight="84.2vh" position="relative" bottom="30px">
        <Lista listagem={lista} />
        <Box
          display="flex"
          justifyContent="center"
          position="relative"
          bottom="-30px"
        >
          <Pagination
            count={Math.ceil(pagination.count / pageSize)}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
    </Box>
  )
}
