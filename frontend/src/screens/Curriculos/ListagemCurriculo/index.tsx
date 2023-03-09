import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurriculosVaga } from '../../../service/curriculo';
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

  function Cartao({ perfil, nome, areaAtuacao, descricao }: CartaoProps) {
    return (
      <CartaoContainer sx={{ borderRadius: "20px", border: 'none', boxShadow: 'none' }}>
        <CardHeader
          title={nome}
          subheader={areaAtuacao}
          avatar={<Avatar src={perfil} alt="Foto de perfil" />}
          titleTypographyProps={{ variant: 'h5' }}
          subheaderTypographyProps={{ variant: 'body1' }}
        />
        <CardContent>
          {descricao}
        </CardContent>
        <AcoesContainer>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ borderRadius: 50 }}>
            Ver currículo</Button>
        </AcoesContainer>
      </CartaoContainer>
    )
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

  const handleCurriculos = async () => {
    // const id = localStorage.getItem('id')
    const newList = await getCurriculosVaga('1')
    setLista(newList)
    const { perfil, nome } = newList
  }


  useEffect(() => {
    handleCurriculos()
  }, [])

  const cartoes = [
    {
      perfil: 'https://via.placeholder.com/150',
      nome: 'Fulano de Tal',
      areaAtuacao: 'Desenvolvedor web',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada velit et nibh bibendum laoreet. Donec volutpat, ex ut vestibulum blandit, eros mi maximus ante, vel auctor justo nunc ac est.'
    },
    {
      perfil: 'https://via.placeholder.com/150',
      nome: 'Beltrano da Silva',
      areaAtuacao: 'Designer gráfico',
      descricao: 'Praesent luctus ornare augue, at facilisis tellus faucibus in. Donec ut venenatis erat. Duis faucibus enim sit amet purus tincidunt auctor. Donec efficitur rhoncus ligula, ut tristique felis mattis ac. Cras pellentesque, ex at ullamcorper tincidunt, ipsum arcu elementum elit, vitae finibus sapien odio sit amet elit.'
    },
    {
      perfil: 'https://via.placeholder.com/150',
      nome: 'Sicrano da Silva',
      areaAtuacao: 'Marketing digital',
      descricao: 'Aenean at erat lectus. Nulla facilisi. Fusce dapibus massa vel tellus eleifend, a ultrices tellus volutpat. Sed in mauris semper, tincidunt velit ac, consectetur mauris. Vivamus hendrerit mauris non felis finibus, sit amet blandit nibh laoreet. In vel lacinia augue. Suspendisse vitae orci augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    }
  ]

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
        {lista.map((cartao, index) => (
          <Cartao key={index} {...cartao} />
        ))}
      </Box>
    </Box>
  )
}
