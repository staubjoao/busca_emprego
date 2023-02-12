import { Link } from 'react-router-dom'

export function ListagemCurriculos() {
  return (
    <div>
      ID da empresa é {localStorage.getItem('id')}
      <br />
      <button type="submit" className="bg-white px-2 py-3">
        <Link to={'/empresa/cadastro/vaga'}>Criar Vaga</Link>
      </button>
    </div>
  )
}
