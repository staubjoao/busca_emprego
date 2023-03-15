import { useEffect, useState } from 'react';
import { getCurriculo } from '../../../service/curriculo';
import { ListarIdiomas } from '../../../components/Curriculo/ListaIdioma';
import { ListarCursos } from '../../../components/Curriculo/ListaCurso';
import { ListarExperiencias } from '../../../components/Curriculo/ListaExperiencia';
import { Typography, List, ListItem, ListItemText, Box, Container, Paper, Avatar, Grid, Button } from '@mui/material';

export function ListagemCurriculoCompleto() {
    const idiomas = [
        { nome: 'Inglês', nivel: 'Avançado' },
        { nome: 'Espanhol', nivel: 'Intermediário' },
        { nome: 'Francês', nivel: 'Básico' },
    ];

    const cursos = [
        { curso: "Curso 1", inicio: "01/01/2022", termino: "01/02/2022" },
        { curso: "Curso 2", inicio: "02/01/2022", termino: "02/02/2022" },
        { curso: "Curso 3", inicio: "03/01/2022", termino: "03/02/2022" },
    ];
    const experiencias = [
        { empresa: "Empresa 1", ramo: "Ramo 1", inicio: "01/01/2022", termino: "01/02/2022", cidade: "Cidade 1", pais: "Pais 1", cargo: "Cargo 1" },
        { empresa: "Empresa 2", ramo: "Ramo 1", inicio: "01/01/2022", termino: "01/02/2022", cidade: "Cidade 2", pais: "Pais 2", cargo: "Cargo 2" },
        { empresa: "Empresa 3", ramo: "Ramo 1", inicio: "01/01/2022", termino: "01/02/2022", cidade: "Cidade 3", pais: "Pais 3", cargo: "Cargo 3" },
    ];

    return (
        <div>
            <Paper
                sx={{
                    backgroundColor: '#5E80BB',
                    height: '100px',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
            </Paper>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: 'calc(100vh - 50px)',
                    backgroundColor: '#fff',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <Container maxWidth="sm">
                    <Paper
                        sx={{
                            marginTop: '-50px',
                            backgroundColor: '#f2f2f2',
                            borderRadius: '10px',
                            padding: '20px',
                            margin: '5px',
                            zIndex: 3,
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={2}>
                                <Avatar
                                    sx={{ width: '80px', height: '80px' }}
                                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                                    alt="Foto de perfil"
                                />
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <Typography variant="h4" align="left">
                                    João da Silva
                                </Typography>
                                <Typography variant="h6" align="left">
                                    Desenvolvedor Full-stack
                                </Typography>
                            </Grid>
                        </Grid>
                        <Box margin={2}>
                            <Typography variant="body1" align="justify">
                                Sou um desenvolvedor experiente em tecnologias web modernas,
                                com mais de 5 anos de experiência em projetos de grande porte.
                            </Typography>
                        </Box>
                        <Box>
                            <ListarCursos cursos={cursos} />
                        </Box>
                        <Box>
                            <ListarExperiencias experiencias={experiencias} />
                        </Box>
                        <Box>
                            <ListarIdiomas idiomas={idiomas} />
                        </Box>
                        <Button variant="contained" color="primary">
                            Entrar em contato
                        </Button>
                    </Paper>
                </Container>
            </Box >
        </div >
    )
}