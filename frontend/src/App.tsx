import { Rotas } from './routes/Rotas';
import Sidebar from '../src/components/Sidebar';
import { useStore } from '../src/hooks/stores';

function App() {
  const { loginStore } = useStore();

  return (
    <div className="App">
      <Sidebar typeUser={loginStore.typeUser} />
      <Rotas />
    </div>
  );
}

export default App;
