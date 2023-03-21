import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCurriculo } from '../../../service/curriculo';
import { ListarIdiomas } from '../../../components/Curriculo/ListaIdioma';
import { ListarCursos } from '../../../components/Curriculo/ListaCurso';
import { ListarExperiencias } from '../../../components/Curriculo/ListaExperiencia';
import { Typography, ButtonBase, Box } from '@mui/material';
import { useStore } from '../../../hooks/stores';
import perfilIcon from '../../../assets/icons/perfil.png';

interface Idioma {
    nome: string;
    nivel: string;
}

interface Curso {
    curso: string;
    inicio: string;
    termino: string;
}

interface Experiencia {
    empresa: string;
    ramo: string;
    inicio: string;
    termino: string;
    cidade: string;
    pais: string;
    cargo: string;
}

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
            // idiomas: { nome: string, nivel: string }[]
            idiomas: Idioma[]
            // cursos: { titulo: string, inicio: string, termino: string }[]
            cursos: Curso[]
            // experiencias: {
            //     empresa: string,
            //     ramo: string,
            //     inicio: string,
            //     termino: string,
            //     cidade: string,
            //     pais: string,
            //     cargo: string
            // }[]
            experiencias: Experiencia[]
        }
    >({ id: "", perfil: "", nome: "", areaAtuacao: "", descricao: "", idiomas: [], cursos: [], experiencias: [] })

    useEffect(() => {
        async function handleCurriculos() {
            const newList = await getCurriculo(idCurriculo as any, loginStore.token);

            const idiomas = newList.Idiomas.map((item: any) => {
                return {
                    nome: item.idioma,
                    nivel: item.CurriculosIdiomas.nivel,
                }
            })

            const cursos = newList.Cursos.map((item: any) => {
                
                return {
                    titulo: item.curso,
                    inicio: item.CurriculosCursos.inicio,
                    termino: item.CurriculosCursos.termino,
                }
            })

            const experiencias = newList.Experiencias.map((item: any) => {
                const inicio = item.CurriculosExperiencias.inicio
                const dataInicio = inicio.split('T')[0]
                let termino = item.CurriculosExperiencias.termino
                if (termino === "" || termino === null)
                    termino = "Atualmente"
                return {
                    empresa: item.empresa,
                    ramo: item.ramo,
                    inicio: dataInicio,
                    termino: termino,
                    cidade: item.CurriculosExperiencias.cidade,
                    pais: item.CurriculosExperiencias.pais,
                    cargo: item.CurriculosExperiencias.cargo
                }
            })

            console.log(experiencias)

            const areaAtuacaoTeste = "teste"
            const auxCurriculo = {
                id: newList.id,
                perfil: newList.perfil,
                nome: newList.nome,
                areaAtuacao: areaAtuacaoTeste,
                descricao: newList.descricao,
                idiomas: idiomas,
                cursos: cursos,
                experiencias: experiencias,
            }
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
                                {curriculo.perfil === null || curriculo.perfil as any === "" ? (
                                    <Box
                                        component="img"
                                        src={perfilIcon}
                                        alt="Currículo sem foto"
                                        width="5rem"
                                    />
                                ) : (
                                    <Box
                                        component="img"
                                        src={curriculo.perfil}
                                        width="4rem"
                                        alt="Foto do candidato(a)"
                                    />
                                )}
                                <Box component="span" paddingTop="0.5rem" marginLeft="1rem">
                                    <Typography variant="h5" fontWeight="bold" fontSize="0.875rem">
                                        {curriculo.nome}
                                    </Typography>
                                    <Typography fontSize="0.875rem">
                                        {curriculo.areaAtuacao}
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
                        {curriculo.descricao}
                    </Box>
                    <Box>
                        <ListarCursos cursos={curriculo.cursos} />
                    </Box>
                    <Box>
                        <ListarExperiencias experiencias={curriculo.experiencias} />
                    </Box>
                    <Box>
                        <ListarIdiomas idiomas={curriculo.idiomas} />
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