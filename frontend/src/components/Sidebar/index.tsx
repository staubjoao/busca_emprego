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
import { useStore } from '../../hooks/stores';

interface SideBarProps {
  typeUser: string;
  navigate: any;
}

const empresaScreens = (idEMpresa: string | undefined) => [
  {
    name: 'Cadastrar vagas',
    navigateTo: '/empresa/cadastro/vaga',
  },
  {
    name: 'Vagas',
    navigateTo: `/empresa/vagas/${idEMpresa}`,
  },
];

const candidatoScreens = (idCandidato: string | undefined) => [
  {
    name: 'Vagas',
    navigateTo: '/candidato/vagas',
  },
  {
    name: 'Cadastrar currículo',
    navigateTo: `/candidato/${idCandidato}/curriculo`,
  },
];

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

export default function MiniDrawer({ typeUser, navigate }: SideBarProps) {
  const [open, setOpen] = React.useState(false);
  const { loginStore } = useStore();
  const screens =
    typeUser === 'empresa'
      ? empresaScreens(loginStore.user.id)
      : candidatoScreens(loginStore.user.id);

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
        {open && <Styled.NameAvatar>{loginStore.user.nome}</Styled.NameAvatar>}

        <Divider />
        <List>
          {screens.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => navigate(item.navigateTo)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {typeUser === 'empresa'
                    ? empresaIcons(item.name)
                    : candidatoIcons(item.name)}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {open ? (
          <Styled.Button
            onClick={() => {
              loginStore.logout();
              navigate('/');
            }}
          >
            <Logout sx={{ color: '#eee' }} fontSize="small" />
            <Styled.Typography>Sair</Styled.Typography>
          </Styled.Button>
        ) : (
          <Styled.Button
            onClick={() => {
              loginStore.logout();
              navigate('/');
            }}
          >
            <Logout sx={{ color: '#eee' }} fontSize="small" />
          </Styled.Button>
        )}
      </Styled.Drawer>
    </Box>
  );
}
