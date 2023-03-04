import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Dashboard, PermContactCalendar, ListAlt } from '@mui/icons-material';

import * as Styled from './styles';

interface SideBarProps {
  typeUser: string;
}

const empresaScreens = ['Curriculos', 'Cadastrar vagas', 'Vagas'];
const candidatoScreens = ['Curriculos', 'Cadastrar vagas', 'Vagas'];

const empresaIcons = (screen: string) => {
  switch (screen) {
    case 'Curriculos':
      return <Dashboard />;
    case 'Cadastrar vagas':
      return <ListAlt />;
    case 'Vagas':
      return <PermContactCalendar />;
    default:
      break;
  }
};

const candidatoIcons = (screen: string) => {
  switch (screen) {
    case 'Curriculos':
      return <Dashboard />;
    case 'Vagas':
      return <PermContactCalendar />;
    default:
      break;
  }
};

export default function MiniDrawer({ typeUser }: SideBarProps) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const screens = typeUser === 'empresa' ? empresaScreens : candidatoScreens;

  const handleDrawerOpen = (open: boolean) => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Styled.Drawer variant="permanent" open={open}>
        <Styled.DrawerHeader>
          <IconButton onClick={() => handleDrawerOpen(open)}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </Styled.DrawerHeader>
        <Divider />
        <List>
          {screens.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {typeUser === 'empresa'
                    ? empresaIcons(text)
                    : candidatoIcons(text)}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Styled.Drawer>
    </Box>
  );
}
