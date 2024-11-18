import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
 // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 4
};

type Props = {
    open: boolean, handleClose: (open: boolean) => void, title: string, children: any
}

export const BasicModal = ({open, handleClose, title, children}: Props) => {
   return (
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography color="#32264D" fontWeight="bold" id="modal-modal-title" variant="h6" component="h2">
      {title}
    </Typography>
    {children}
  
  </Box>
</Modal>
   ) 
}