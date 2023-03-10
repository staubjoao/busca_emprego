import { Box, Card, CardHeader, CardContent, CardActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'

const CartaoContainer = styled(Card)({
    borderRadius: '20px',
    border: 'none',
    boxShadow: 'none'
});

const AcoesContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px'
});

interface CartaoProps {
    listagem: {
        id: string
        perfil: string
        nome: string
        areaAtuacao: string
        descricao: string
    }[]
}

export function ListarCurriculos(props: CartaoProps) {
    const { listagem } = props
    const navigate = useNavigate()

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

    return (
        <Box>
            {listagem.map(element => (
                <CartaoContainer sx={{ borderRadius: "20px", border: 'none', boxShadow: 'none' }}>
                    <CardHeader
                        title={element.nome}
                        subheader={element.areaAtuacao}
                        avatar={<Avatar src={element.perfil} sx={{ width: 150, height: 150 }} alt="Foto de perfil" />}
                        titleTypographyProps={{ variant: 'h5' }}
                        subheaderTypographyProps={{ variant: 'body1' }}
                    />
                    <CardContent>
                        {element.descricao}
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
            ))
            }
        </Box>
    )
}