import { Rotas } from './routes/Rotas';
import Sidebar from '../src/components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar typeUser="empresa" />
      <Rotas />
    </div>
  );
}

export default App;
