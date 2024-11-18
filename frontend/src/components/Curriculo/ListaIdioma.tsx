import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

interface Idioma {
    nome: string;
    nivel: string;
}

interface IdiomasProps {
    idiomas: Idioma[];
}

export function ListarIdiomas(props: IdiomasProps) {
    const { idiomas } = props;

    return (
        <Box sx={{ p: 2 }}>
            <Typography fontWeight="bold" color="#32264D" variant="h6">Idiomas</Typography>
            <List sx={{ mb: 2 }}>
                {idiomas.map((idioma) => (
                    <ListItem key={idioma.nome} disablePadding>
                        <ListItemText primary={idioma.nome} secondary={idioma.nivel} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}