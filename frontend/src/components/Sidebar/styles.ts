import { styled, Theme, CSSObject } from '@mui/material/styles';
import {
  Drawer as MuiDrawer,
  Button as MuiButton,
  Typography as MuiTypography,
  Avatar as MuiAvatar,
} from '@mui/material';

const drawerWidth = 240;

export const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

export const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(10)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
  backgroundColor: '#F4F6FF',
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  flex: 1,
  position: 'absolute',
  bottom: 10,
  backgroundColor: '#5E80BB',
  alignSelf: 'center',
  width: '40%',
  flexDirection: 'row',
}));

export const Typography = styled(MuiTypography)(({ theme }) => ({
  color: '#eee',
  fontWeight: 'bold',
  marginLeft: theme.spacing(1),
  fontSize: 12,
}));

export const Avatar = styled(MuiAvatar)(({ theme }) => ({
  alignSelf: 'center',
  width: 60,
  height: 60,
  marginBottom: theme.spacing(2),
}));

export const NameAvatar = styled(MuiTypography)(({ theme }) => ({
  color: '#5E80BB',
  fontWeight: 'bold',
  fontSize: 16,
  alignSelf: 'center',
  marginBottom: theme.spacing(2),
}));
