import { useEffect, useState } from 'react'
import { Box, Pagination, Typography } from '@mui/material'
import { Lista } from '../../../components/ListaVagas/Empresa/ListaEmpresa'
import { useStore } from '../../../hooks/stores'

const pageSize = 3

export function ListagemVagasEmpresa() {
  const { loginStore, vagaStore } = useStore()
  const { vagas, setVagas } = vagaStore

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
    if (loginStore.user.id !== undefined) {
      const response = await vagaStore.handleListarVagasEmpresa(
        loginStore.user.id,
        loginStore.token
      )

      const paginationData = {
        count: response.length,
        data: response.slice(pagination.from, pagination.to)
      }
      setVagas(paginationData.data)
      console.log(response)
      setPagination({ ...pagination, count: paginationData.count })
    }
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
        <Lista listagem={vagas} />
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
