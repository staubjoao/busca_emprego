import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './AuthRoutes';
import { useStore } from '../hooks/stores';
import { observer } from 'mobx-react-lite';

export const Rotas = observer(() => {
  const { loginStore } = useStore();
  const isLogged = loginStore.token !== '';
  return !isLogged ? <AuthRoutes /> : <AppRoutes />;
});
