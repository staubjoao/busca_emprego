import { Grid, Button } from '@mui/material';

import { Content, DvividerStyle, Field, Label } from './styles';

import { PropsSection } from '../../types/curriculo';
import { Header } from '../HeaderTitle';

export function SectionCreate({
  firstItem,
  fourItem,
  secondItem,
  thirdItem,
  title,
  onPressAdd,
  array,
}: PropsSection) {
  return (
    <Content>
      <Header title={title} onPressAdd={onPressAdd} />

      {array.map((item) =>
        item.firstItem === '' ? (
          <Grid container spacing={2} marginBottom={6}>
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
            {thirdItem && (
              <Grid item xs={3}>
                <Label>{thirdItem.label}</Label>
                <Field
                  placeholder={thirdItem.placeholder}
                  value={thirdItem.currentValue}
                  onChange={(e) => thirdItem.setCurrentValue(e.target.value)}
                />
              </Grid>
            )}
            {fourItem && (
              <Grid item xs={3}>
                <Label>{fourItem.label}</Label>
                <Field
                  placeholder={fourItem.placeholder}
                  value={fourItem.currentValue}
                  onChange={(e) => fourItem.setCurrentValue(e.target.value)}
                />
              </Grid>
            )}
          </Grid>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Label>{firstItem.label}</Label>
              <Field
                placeholder={firstItem.placeholder}
                value={item.firstItem}
                // onChange={(e) => firstItem.setCurrentValue(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Label>{secondItem.label}</Label>
              <Field
                placeholder={secondItem.placeholder}
                value={item.secondItem}
                // onChange={(e) => secondItem.setCurrentValue(e.target.value)}
              />
            </Grid>
            {thirdItem && (
              <Grid item xs={3}>
                <Label>{thirdItem.label}</Label>
                <Field
                  placeholder={thirdItem.placeholder}
                  value={item.thirdItem}
                />
              </Grid>
            )}
            {fourItem && (
              <Grid item xs={3}>
                <Label>{fourItem.label}</Label>
                <Field
                  placeholder={fourItem.placeholder}
                  value={item.fourItem}
                />
              </Grid>
            )}
          </Grid>
        )
      )}
    </Content>
  );
}
