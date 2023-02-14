import { Link, useNavigate } from 'react-router-dom';
import paper from '../assets/images/paper.png';
import IMaskInput from 'react-input-mask';
import { useState } from 'react';
import { autenticacaoLoginEmpresa } from '../service/login';

export function LoginEmpresa() {
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();
  const [canNavigate, setCanNavigate] = useState(false);

  return (
    <div className="flex mx-auto justify-evenly items-center gap-20">
      <button className="text-white absolute top-0 left-0 text-2xl p-5">
        <Link to={'/'} className="transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Link>
      </button>
      <div className="mx-auto max-w-sm">
        <img src={paper} className="mx-auto my-5" />
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-white font-semibold lg:text-2xl md:text-xl">
            Bem vindo(a)
          </h2>
          <p className="text-white text-base">
            O buscaEmprego ajuda você a se conectar e compartilhar seus
            objetivos.
          </p>
        </div>
      </div>
      <div className="bg-white h-screen w-2/5 rounded-l-4xl flex flex-col justify-center">
        <h2 className="text-textColor1 text-center font-semibold text-2xl mb-10 lg:text-3xl md:text-2xl">
          Faça Login
        </h2>
        <form
          onSubmit={(e) => {
            autenticacaoLoginEmpresa(e, cnpj, senha, setErro, setCanNavigate);
            canNavigate && navigate('/empresa/curriculos');
          }}
          className="sm:mx-10 lg:mx-40"
        >
          <IMaskInput
            className="block mb-4 border border-borderColor1 w-full py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-background1 px-3"
            mask="99.999.999/9999-99"
            placeholder="CNPJ"
            value={cnpj}
            onChange={(event) => setCnpj(event.target.value)}
          />
          <input
            className="block border border-borderColor1 w-full py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-background1 px-3"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
          <div className="flex justify-between items-center mb-5">
            {erro !== '' ? (
              <span className="text-red-600">{erro}</span>
            ) : (
              <div></div>
            )}
            <div className="text-right text-background1 ">
              <Link to={'/'}>Esqueceu a senha?</Link>
            </div>
          </div>
          <button
            type="submit"
            className="bg-background1 text-white w-full py-1 rounded-3xl hover:bg-btnColor2 transition-colors"
          >
            Entrar
          </button>
          <p className="text-center mb-4 mt-2">Ou</p>
          <p className="text-center mb-4">Ainda não tem uma conta?</p>
          <button className="border border-background1 w-full py-1 rounded-3xl  text-background1 hover:bg-background1 hover:text-white hover:border-background1 transition-colors ">
            <Link to={'/cadastro/empresa'}>Cadastrar</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
