import { styled } from '@mui/material/styles';
import { Button, Paper } from '@mui/material';

export const Content = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: '60px',
  padding: theme.spacing(4),
  width: '50%',
  borderRadius: 12,
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

export const ButtonCreate = styled(Button)(({ theme }) => ({
  backgroundColor: '#5E80BB',
  display: 'flex',
  alignSelf: 'flex-end',
  width: '20%',
}));
