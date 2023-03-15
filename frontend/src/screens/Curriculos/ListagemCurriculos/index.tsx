import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurriculosVaga } from '../../../service/curriculo';
import { ListarCurriculos } from '../../../components/Curriculo/ListaCurriculo';
import { Typography, styled, Box, Card, CardHeader, CardContent, CardActions, Button } from '@mui/material';

export function ListagemCurriculos() {
  const [selecionado, setSelecionado] = useState(false)


  interface CartaoProps {
    perfil: string
    nome: string
    areaAtuacao: string
    descricao: string
  }

  const [lista, setLista] = useState<
    {
      id: string,
      perfil: string
      nome: string
      areaAtuacao: string
      descricao: string
    }[]
  >([])

  interface EmpresaCardProps {
    nome: string
    descricao: string
    perfil: string
  }

  const Avatar = styled('img')({
    borderRadius: '50%',
  })

  const CartaoContainer = styled(Card)({
    margin: '1rem',
  })

  const AcoesContainer = styled(CardActions)({
    flexGrow: 1,
    justifyContent: 'flex-end',
  })

  const handleClick = () => {
    setSelecionado(!selecionado);
  }

  const EmpresaCard = ({ nome, descricao, perfil }: EmpresaCardProps) => {
    return (
      <Card sx={{ maxWidth: 400, border: 'none', boxShadow: 'none', borderRadius: 0 }} >
        <CardHeader
          avatar={<Avatar src={perfil} alt="Foto de perfil" sx={{ width: 150, height: 150 }} />}
          title={nome}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            px: 2,
            pb: 0
          }}
        />
        <CardContent sx={{ pt: 0 }}>
          <Typography variant="body1" align="center">{descricao}</Typography>
        </CardContent>
      </Card >
    )
  }

  useEffect(() => {
    async function handleCurriculos() {
      // const id = localStorage.getItem('id')
      const newList = await getCurriculosVaga('1');

      const curriculos = newList.map((item: { Curriculo: any; }) => {
        const curriculo = item.Curriculo;
        return {
          id: curriculo.id,
          nome: curriculo.nome || "",
          perfil: curriculo.perfil || "",
          descricao: curriculo.descricao || "nsei",
          areaAtuacao: curriculo.areaAtuacao || "Teste",
        };
      });

      setLista(curriculos);
    }
    handleCurriculos()
  }, [])

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 1,
        gridTemplateRows: 'auto',
        gridTemplateAreas: `"sidebar main main main"`,
      }}
    >
      <Box sx={{ gridArea: 'sidebar', backgroundColor: '#f5f5f5' }}>
        <EmpresaCard
          nome="Nome da Empresa"
          descricao="Descrição da empresa aqui."
          perfil="https://via.placeholder.com/150"
        />
        <Box sx={{ bgcolor: selecionado ? 'primary.main' : 'white', border: '1px solid black', p: 2 }}>
          <Button
            variant="contained"
            onClick={handleClick}
            sx={{
              bgcolor: selecionado ? 'primary.main' : 'initial',
              color: selecionado ? 'common.white' : 'initial',
            }}
          >
            Selecionar
          </Button>
        </Box>
      </Box>
      <Box sx={{ gridArea: 'main' }}>
        <ListarCurriculos listagem={lista} />
        {/* {lista.map((cartao, index) => (
          <Cartao key={index} {...cartao} />
        ))} */}
      </Box>
    </Box>
  )
}
