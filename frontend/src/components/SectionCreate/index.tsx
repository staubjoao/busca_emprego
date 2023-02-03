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
  currentValue: any;
  setCurrentValue: React.Dispatch<React.SetStateAction<string>>;
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
          <Field
            placeholder={firstItem.placeholder}
            value={firstItem.currentValue}
            onChange={(e) => firstItem.setCurrentValue(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Label>{secondItem.label}</Label>
          <Field
            placeholder={secondItem.placeholder}
            value={secondItem.currentValue}
            onChange={(e) => secondItem.setCurrentValue(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Label>{thirdItem.label}</Label>
          <Field
            placeholder={thirdItem.placeholder}
            value={thirdItem.currentValue}
            onChange={(e) => thirdItem.setCurrentValue(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Label>{fourItem.label}</Label>
          <Field
            placeholder={fourItem.placeholder}
            value={fourItem.currentValue}
            onChange={(e) => fourItem.setCurrentValue(e.target.value)}
          />
        </Grid>
      </Grid>
    </>
  );
}
