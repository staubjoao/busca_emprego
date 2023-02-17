import { Link } from 'react-router-dom';
import people from '../assets/images/people.png';
import { useNavigate } from 'react-router-dom';

export function TelaInicial() {
  const navigate = useNavigate();
  return (
    <div className="grid items-center justify-center container max-w-6xl mx-auto px-10 mt-40">
      <div className="flex items-center justify-evenly md:gap-x-10">
        <div className="flex flex-col lg:gap-y-16 md:gap-y-10">
          <h1 className="text-white lg:text-6xl md:text-4xl font-bold">
            buscaEmpregos
          </h1>
          <p className="text-white lg:text-4xl md:text-2xl">
            Sua plataforma de empregos online
          </p>
        </div>
        <div>
          <img src={people}></img>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <button
          type="button"
          className="bg-btnColor1 text-white py-5 px-10 rounded lg:text-xl font-semibold hover:bg-btnColor2 transition-colors"
          onClick={() => navigate('/login/candidato')}
        >
          Candidato
        </button>
        <button
          type="button"
          className="bg-white text-btnColor1 py-5 px-12 rounded lg:text-xl font-semibold hover:bg-btnColor3 transition-colors"
          onClick={() => navigate('/login/empresa')}
        >
          Empresa
        </button>
      </div>
    </div>
  );
}
