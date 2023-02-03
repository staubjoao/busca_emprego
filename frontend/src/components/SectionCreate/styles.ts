import {
  Box,
  Paper,
  Typography,
  TextField,
  Divider,
  Container,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const Content = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

export const HeaderSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}));

export const Field = styled(TextField)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
}));

export const DvividerStyle = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const Label = styled(Typography)(({ theme }) => ({
  color: '#9C98A6',
  fontSize: 16,
}));

export const TitleSection = styled(Typography)(({ theme }) => ({
  color: '#32264D',
  fontWeight: 'bold',
  fontSize: 24,
}));

export const TextButtonAdd = styled(Typography)(({ theme }) => ({
  color: '#5E80BB',
  fontWeight: 'bold',
  fontSize: 20,
}));
