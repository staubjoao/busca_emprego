import styled from '@emotion/styled';
import { InputBase } from '@mui/material';
import IMaskInput from 'react-input-mask'

export const InputVaga = styled(InputBase)(()=>({
  backgroundColor: 'rgb(245 245 244)',
  borderRadius: '0.25rem',
  borderWidth: '1px',
  width: '100%',
  paddingLeft: '0.3rem'
}))

export const InputSalario = styled(IMaskInput)(()=>({
  backgroundColor: 'rgb(245 245 244)',
  borderRadius: '0.25rem',
  borderWidth: '1px',
  width: '100%',
  padding: '0.25rem'
}))
