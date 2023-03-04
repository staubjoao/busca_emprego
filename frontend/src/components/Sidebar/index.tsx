import * as React from 'react';
import {
  Box,
  List,
  CssBaseline,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import {
  Dashboard,
  PermContactCalendar,
  ListAlt,
  ChevronLeft,
  ChevronRight,
  Logout,
} from '@mui/icons-material';

import * as Styled from './styles';

interface SideBarProps {
  typeUser: string;
}

const empresaScreens = ['Curriculos', 'Cadastrar vagas', 'Vagas'];
const candidatoScreens = ['Vagas', 'Cadastrar currículo'];

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
    case 'Vagas':
      return <Dashboard />;
    case 'Cadastrar currículo':
      return <PermContactCalendar />;
    default:
      break;
  }
};

export default function MiniDrawer({ typeUser }: SideBarProps) {
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
            {open ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </Styled.DrawerHeader>
        <Styled.Avatar />
        {open && <Styled.NameAvatar>Maria Cecília</Styled.NameAvatar>}

        <Divider />
        <List>
          {screens.map((text, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
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
        {open ? (
          <Styled.Button>
            <Logout sx={{ color: '#eee' }} fontSize="small" />
            <Styled.Typography>Sair</Styled.Typography>
          </Styled.Button>
        ) : (
          <Styled.Button>
            <Logout sx={{ color: '#eee' }} fontSize="small" />
          </Styled.Button>
        )}
      </Styled.Drawer>
    </Box>
  );
}
