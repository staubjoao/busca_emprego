import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

interface Experiencia {
    empresa: string;
    ramo: string;
    inicio: string;
    termino: string;
    cidade: string;
    pais: string;
    cargo: string;
}

interface ExperienciaProps {
    experiencias: Experiencia[];
}

export function ListarExperiencias(props: ExperienciaProps) {
    const { experiencias } = props;

    return (
        <Box sx={{ p: 2 }}>
            <Typography fontWeight="bold" color="#32264D" variant="h6">Experiências profissionais</Typography>
            <List sx={{ mb: 2 }} >
                {experiencias.map((experiencia) => (
                    <ListItem key={experiencia.empresa} disablePadding>
                        <ListItemText
                            primary={experiencia.cargo}
                            secondary={
                                <>
                                    {experiencia.empresa}, {experiencia.ramo}, {experiencia.cidade}, {experiencia.pais}
                                    <br />
                                    {experiencia.inicio} - {experiencia.termino}
                                </>
                            }
                        />
                        <ListItemText />
                    </ListItem>
                ))}
            </List>
        </Box >
    );
}