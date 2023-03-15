import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

interface Curso {
    curso: string;
    inicio: string;
    termino: string;
}

interface CursoProps {
    cursos: Curso[];
}

export function ListarCursos(props: CursoProps) {
    const { cursos } = props;

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Curso(s)</Typography>
            <List sx={{ mb: 2 }} >
                {cursos.map((curso) => (
                    <ListItem key={curso.curso} disablePadding>
                        <ListItemText
                            primary={curso.curso}
                            secondary={`${curso.inicio} - ${curso.termino}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Box >
    );
}