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

type item = {
  label: string;
  placeholder: string;
};

type PropsSection = {
  title: string;
  firstItem: item;
  secondItem: item;
  thirdItem: item;
  fourItem: item;
};

export function SectionCreate({
  firstItem,
  fourItem,
  secondItem,
  thirdItem,
  title,
}: PropsSection) {
  return (
    <>
      <HeaderSection>
        <TitleSection>{title}</TitleSection>
        <TextButtonAdd>Adicionar</TextButtonAdd>
      </HeaderSection>

      <DvividerStyle />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Label>{firstItem.label}</Label>
          <Field placeholder={firstItem.placeholder} />
        </Grid>
        <Grid item xs={6}>
          <Label>{secondItem.label}</Label>
          <Field placeholder={secondItem.placeholder} />
        </Grid>
        <Grid item xs={3}>
          <Label>{thirdItem.label}</Label>
          <Field placeholder={thirdItem.placeholder} />
        </Grid>
        <Grid item xs={3}>
          <Label>{fourItem.label}</Label>
          <Field placeholder={fourItem.placeholder} />
        </Grid>
      </Grid>
    </>
  );
}
