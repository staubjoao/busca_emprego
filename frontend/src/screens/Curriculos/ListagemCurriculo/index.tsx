import { useNavigate } from 'react-router-dom';

export function ListagemCurriculos() {
  const navigate = useNavigate();
  return (
    <div>
      ID da empresa é {localStorage.getItem('id')}
      <br />
      <button
        onClick={() => navigate('/empresa/cadastro/vaga')}
        type="submit"
        className="bg-white px-2 py-3"
      >
        Criar Vaga
      </button>
    </div>
  );
}
