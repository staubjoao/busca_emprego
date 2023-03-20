import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCurriculosVaga } from '../../../service/curriculo';
import { ListarCurriculos } from '../../../components/Curriculo/ListaCurriculo';
import { Typography, Pagination, Box } from '@mui/material';
import { useStore } from '../../../hooks/stores';

const pageSize = 3

export function ListagemCurriculos() {
  const { idVaga } = useParams();
  const [selecionado, setSelecionado] = useState(false);
  const { loginStore } = useStore();

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

  const [pagination, setPagination] = useState<{
    count: number
    from: number
    to: number
  }>({
    count: 0,
    from: 0,
    to: pageSize
  })

  const handlePageChange = (event: any, page: any) => {
    const from = (page - 1) * pageSize
    const to = (page - 1) * pageSize + pageSize

    setPagination({ ...pagination, from: from, to: to })
  }

  // interface EmpresaCardProps {
  //   nome: string
  //   descricao: string
  //   perfil: string
  // }

  // const Avatar = styled('img')({
  //   borderRadius: '50%',
  // })

  const handleClick = () => {
    setSelecionado(!selecionado);
  }

  // const EmpresaCard = ({ nome, descricao, perfil }: EmpresaCardProps) => {
  //   return (
  //     <Card sx={{ maxWidth: 400, border: 'none', boxShadow: 'none', borderRadius: 0 }} >
  //       <CardHeader
  //         avatar={<Avatar src={perfil} alt="Foto de perfil" sx={{ width: 150, height: 150 }} />}
  //         title={nome}
  //         sx={{
  //           display: 'flex',
  //           flexDirection: 'column',
  //           alignItems: 'center',
  //           textAlign: 'center',
  //           px: 2,
  //           pb: 0
  //         }}
  //       />
  //       <CardContent sx={{ pt: 0 }}>
  //         <Typography variant="body1" align="center">{descricao}</Typography>
  //       </CardContent>
  //     </Card >
  //   )
  // }

  useEffect(() => {
    async function handleCurriculos() {
      // const id = localStorage.getItem('id')
      console.log(loginStore.token)
      // descomentar depois
      // const newList = await getCurriculosVaga(idVaga as any, loginStore.token);

      // const curriculos = newList.map((item: { Curriculo: any; }) => {
      //   const curriculo = item.Curriculo;
      //   return {
      //     id: curriculo.id,
      //     nome: curriculo.nome || "",
      //     perfil: curriculo.perfil || "",
      //     descricao: curriculo.descricao || "nsei",
      //     areaAtuacao: curriculo.areaAtuacao || "Teste",
      //   };
      // });

      // setLista(curriculos);


      // para teste

      let novoItem = { id: "1", perfil: "", nome: "João Silva", areaAtuacao: "Finanças", descricao: "Especialista em contabilidade com mais de 10 anos de experiência." };

      setLista(prevLista => [...prevLista, novoItem]);

      novoItem = { id: "2", perfil: "", nome: "Maria Santos", areaAtuacao: "Tecnologia", descricao: "Programadora sênior com habilidades em várias linguagens de programação e ampla experiência em desenvolvimento web." };

      setLista(prevLista => [...prevLista, novoItem]);

      novoItem = { id: "3", perfil: "Consultor", nome: "José Oliveira", areaAtuacao: "Gestão de Negócios", descricao: "Consultor empresarial com mais de 15 anos de experiência em gestão estratégica e operacional." };

      setLista(prevLista => [...prevLista, novoItem]);
    }
    handleCurriculos()
  }, [])

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
          Estas são os currículos da vaga...
        </Typography>
      </Box>
      <Box minHeight="84.2vh" position="relative" bottom="30px">
        <ListarCurriculos listagem={lista} />
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
    // <Box sx={{ gridArea: 'main' }}>
    //   <ListarCurriculos listagem={lista} />
    //   {/* {lista.map((cartao, index) => (
    //       <Cartao key={index} {...cartao} />
    //     ))} */}
    // </Box>
  )
}
