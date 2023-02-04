import {
  HeaderSection,
  TextButtonAdd,
  TitleSection,
  DvividerStyle,
} from './styles';

import { Button } from '@mui/material';

import { Header as HeaderProps } from '../../types/curriculo';

export function Header({ title, onPressAdd }: HeaderProps) {
  return (
    <>
      <HeaderSection>
        <TitleSection>{title}</TitleSection>
        {onPressAdd && (
          <Button onClick={onPressAdd}>
            <TextButtonAdd>Adicionar</TextButtonAdd>
          </Button>
        )}
      </HeaderSection>
      <DvividerStyle />
    </>
  );
}
