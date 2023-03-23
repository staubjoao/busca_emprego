import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCurriculo } from '../../../service/curriculo';
import { ListarIdiomas } from '../../../components/Curriculo/ListaIdioma';
import { ListarCursos } from '../../../components/Curriculo/ListaCurso';
import { ListarExperiencias } from '../../../components/Curriculo/ListaExperiencia';
import { Typography, ButtonBase, Box, Snackbar, Alert } from '@mui/material';
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
    instituicao: string;
    cidade: string;
    pais: string;
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
    const { snackbarStore } = useStore();
    const { idCurriculo } = useParams();
    const { loginStore } = useStore();

    const [curriculo, setCurriculo] = useState<
        {
            id: string,
            email: string,
            perfil: string
            nome: string
            areaAtuacao: string
            descricao: string
            idiomas: Idioma[]
            cursos: Curso[]
            experiencias: Experiencia[]
        }
    >({ id: "", email: "", perfil: "", nome: "", areaAtuacao: "", descricao: "", idiomas: [], cursos: [], experiencias: [] })
    const { openSnackbar, setOpenSnackbar, severity, setSeverity, showSnackBar, message, setMessage } =
        snackbarStore;

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
                const inicio = item.CurriculosCursos.inicio
                const dataInicio = inicio.split('T')[0]
                let termino = item.CurriculosCursos.termino
                if (termino === "" || termino === null)
                    termino = "Atualmente"
                return {
                    curso: item.curso,
                    inicio: dataInicio,
                    termino: termino,
                    instituicao: item.Instituicaos[0].nome,
                    cidade: item.Instituicaos[0].cidade,
                    pais: item.Instituicaos[0].pais
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
            const auxCurriculo = {
                id: newList.id,
                email: newList.email,
                perfil: newList.perfil,
                nome: newList.nome,
                areaAtuacao: newList.areaAtuacao,
                descricao: newList.descricao,
                idiomas: idiomas,
                cursos: cursos,
                experiencias: experiencias,
            }
            setCurriculo(auxCurriculo);
        }
        handleCurriculos()
    }, [])

    const copiarEmail = () => {
        navigator.clipboard.writeText(curriculo.email)
        setOpenSnackbar(true)
        setSeverity('success')
        setMessage('Email copiado para a área de transferência')
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
                                <Box onClick={copiarEmail} component="span">Entrar em contato</Box>
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
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(!openSnackbar)}
            >
                <Alert
                    onClose={() => setOpenSnackbar(!openSnackbar)}
                    severity={severity}
                    sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </Box>
    )
}