import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCurriculo } from '../../../service/curriculo';
import { ListarIdiomas } from '../../../components/Curriculo/ListaIdioma';
import { ListarCursos } from '../../../components/Curriculo/ListaCurso';
import { ListarExperiencias } from '../../../components/Curriculo/ListaExperiencia';
import { Typography, ButtonBase, Box } from '@mui/material';
import { useStore } from '../../../hooks/stores';
import perfilIcon from '../../../assets/icons/perfil.png';

export function ListagemCurriculoCompleto() {
    const { idCurriculo } = useParams();
    const { loginStore } = useStore();

    const [curriculo, setCurriculo] = useState<
        {
            id: string,
            perfil: string
            nome: string
            areaAtuacao: string
            descricao: string
            idiomas: { nome: string, nivel: string }[]
            cursos: { titulo: string, inicio: string, termino: string }[]
            experiencias: { empresa: string, ramo: string, inicio: string, termino: string, cidade: string, pais: string, cargo: string }[]
        }
    >()

    const cursos = [
        { curso: "Curso 1", inicio: "01/01/2022", termino: "01/02/2022" },
        { curso: "Curso 2", inicio: "02/01/2022", termino: "02/02/2022" },
        { curso: "Curso 3", inicio: "03/01/2022", termino: "03/02/2022" },
    ];
    const experiencias = [
        { empresa: "Empresa 1", ramo: "Ramo 1", inicio: "01/01/2022", termino: "01/02/2022", cidade: "Cidade 1", pais: "Pais 1", cargo: "Cargo 1" },
        { empresa: "Empresa 2", ramo: "Ramo 2", inicio: "01/01/2022", termino: "01/02/2022", cidade: "Cidade 2", pais: "Pais 2", cargo: "Cargo 2" },
        { empresa: "Empresa 3", ramo: "Ramo 3", inicio: "01/01/2022", termino: "01/02/2022", cidade: "Cidade 3", pais: "Pais 3", cargo: "Cargo 3" },
    ];

    // const perfil = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    // const nome = "João da Silva"
    // const areaAtuacao = "Desenvolvedor Full-stack"
    // const descricao = "Sou um desenvolvedor experiente em tecnologias web modernas, com mais de 5 anos de experiência em projetos de grande porte."

    useEffect(() => {
        async function handleCurriculos() {
            const newList = await getCurriculo(idCurriculo as any, loginStore.token);

            console.log(newList.descricao)
            const idiomas = newList.Idiomas.map((item: any) => {
                return {
                    nome: item.idioma,
                    nivel: item.CurriculosIdiomas.nivel,
                }
            })

            const areaAtuacaoTeste = "teste"
            const auxCurriculo = {
                id: newList.id,
                perfil: newList.perfil,
                nome: newList.nome,
                areaAtuacao: areaAtuacaoTeste,
                descricao: newList.descricao,
                idioma: idiomas,
                curso: [],
                experiencia: [],
            }
            // const curriculos = newList.map((item: { Curriculo: any; }) => {
            //     const curriculo = item.Curriculo;
            //     return {
            //         id: curriculo.id,
            //         nome: curriculo.nome || "",
            //         perfil: curriculo.perfil || "",
            //         descricao: curriculo.descricao || "nsei",
            //         areaAtuacao: curriculo.areaAtuacao || "Teste",
            //     };
            // });
            setCurriculo(auxCurriculo);
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
            </Box>
            <Box minHeight="84.2vh" position="relative" bottom="30px">
                <Box
                    // key={element.id}
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
                            <Box display="flex">
                                {curriculo?.perfil === null || curriculo?.perfil as any === "" ? (
                                    <Box
                                        component="img"
                                        src={perfilIcon}
                                        alt="Currículo sem foto"
                                        width="5rem"
                                    />
                                ) : (
                                    <Box
                                        component="img"
                                        src={curriculo?.perfil}
                                        width="4rem"
                                        alt="Foto do candidato(a)"
                                    />
                                )}
                                <Box component="span" paddingTop="0.5rem" marginLeft="1rem">
                                    <Typography variant="h5" fontWeight="bold" fontSize="0.875rem">
                                        {curriculo?.nome}
                                    </Typography>
                                    <Typography fontSize="0.875rem">
                                        {curriculo?.areaAtuacao}
                                    </Typography>
                                </Box>
                            </Box>
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
                        {/* {curriculo?.descricao.length < 250
                            ? curriculo?.descricao
                            : curriculo?.descricao.substring(0, 50) + ' ...'} */}
                        curriculo?.descricao
                    </Box>
                    <Box>
                        <ListarCursos cursos={cursos} />
                    </Box>
                    <Box>
                        <ListarExperiencias experiencias={experiencias} />
                    </Box>
                    <Box>
                        <ListarIdiomas idiomas={curriculo?.idiomas} />
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
                                <Box component="span">Entrar em contato</Box>
                            </ButtonBase>
                        </Box>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    position="relative"
                    bottom="-30px"
                >
                </Box>
            </Box>
        </Box>
    )
}