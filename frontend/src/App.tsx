import { Rotas } from './routes/Rotas';
import Sidebar from '../src/components/Sidebar';
import { useStore } from '../src/hooks/stores';
import { useNavigate } from 'react-router-dom';

function App() {
  const { loginStore } = useStore();
  const navigate = useNavigate();
  console.log('TYPE --->', loginStore.typeUser);
  return (
    <div className="App">
      <Sidebar typeUser={loginStore.typeUser} navigate={navigate} />
      <Rotas />
    </div>
  );
}

export default App;
