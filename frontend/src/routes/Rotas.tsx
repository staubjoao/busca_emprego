import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './AuthRoutes';
import { useStore } from '../hooks/stores';

export function Rotas() {
  const { loginStore } = useStore();
  const isLogged = loginStore.token !== '';
  console.log('LOGGED', isLogged);
  return !isLogged ? <AuthRoutes /> : <AppRoutes />;
}
