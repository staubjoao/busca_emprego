import { styled } from '@mui/material/styles';
import { ButtonBase, IconButton, InputBase } from '@mui/material';

export const ExitButton = styled(IconButton)(() => ({
  color: '#FFFFFF',
  position: 'absolute',
  top: 0,
  left: 0,
  margin: '1rem',
}));

export const InputLogin = styled(InputBase)(() => ({
  marginTop: '0.5rem',
  marginBottom: '0.4rem',
  width: '100%',
  paddingRight: '0.75rem',
  paddingLeft: '2.2rem',
  borderWidth: '1px',
  borderColor: '#E7E7E7',
  borderRadius: '0.375rem',
  display: 'inline-block',
}));

export const LoginButton = styled(ButtonBase)(() => ({
  borderRadius: '1.5rem',
  width: '100%',
  color: '#FFFFFF',
  marginTop: '0.5rem',
  paddingBlock: '0.5rem',
  backgroundColor: '#5E80BB',
  ':hover': {
    backgroundColor: '#3F5E9B',
    transition: '0.2s',
  },
}));

export const RegisterButton = styled(ButtonBase)(() => ({
  borderRadius: '1.5rem',
  border: 'solid',
  borderColor: '#5E80BB',
  width: '100%',
  color: '#5E80BB',
  paddingBlock: '0.35rem',
  ':hover': {
    backgroundColor: '#3F5E9B',
    color: '#FFFFFF',
    transition: '0.2s',
  },
}));
