import {
  Box,
  Paper,
  Typography,
  TextField,
  Divider,
  Container,
  Grid,
} from '@mui/material';

import {
  Content,
  DvividerStyle,
  Field,
  HeaderSection,
  Label,
  TextButtonAdd,
  TitleSection,
} from './styles';

export function SectionCreate() {
  return (
    <>
      <HeaderSection>
        <TitleSection>Experiências profissionais</TitleSection>
        <TextButtonAdd>Adicionar</TextButtonAdd>
      </HeaderSection>

      <DvividerStyle />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Label>Nome da empresa</Label>
          <Field placeholder="Digite o nome" />
        </Grid>
        <Grid item xs={6}>
          <Label>Cargo</Label>
          <Field placeholder="Digite o cargo" />
        </Grid>
        <Grid item xs={3}>
          <Label>Início</Label>
          <Field placeholder="Data de inicio" />
        </Grid>
        <Grid item xs={3}>
          <Label>Fim</Label>
          <Field placeholder="Data de fim" />
        </Grid>
      </Grid>
    </>
  );
}
