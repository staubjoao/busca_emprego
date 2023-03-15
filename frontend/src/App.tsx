import { Rotas } from './routes/Rotas';
import Sidebar from '../src/components/Sidebar';
import { useStore } from '../src/hooks/stores';
import { useNavigate } from 'react-router-dom';

function App() {
  const { loginStore } = useStore();
  const navigate = useNavigate();

  return (
    <div className="App">
      {loginStore.typeUser && (
        <Sidebar typeUser={loginStore.typeUser} navigate={navigate} />
      )}
      <Rotas />
    </div>
  );
}

export default App;
