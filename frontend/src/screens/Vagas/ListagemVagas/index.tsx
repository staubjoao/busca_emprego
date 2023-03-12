import IMaskInput from 'react-input-mask';
import { useEffect, useState } from 'react';
import { Lista } from '../../../components/Lista';
import { getVagas } from '../../../service/vagas';
import { useStore } from '../../../hooks/stores';

export function ListagemVagas() {
  const { loginStore } = useStore();
  const [lista, setLista] = useState<
    {
      id: number;
      titulo: string;
      descricao: string;
      periodo: string;
      salario: number;
      EmpresaId: number;
      Empresa: {
        nome: string;
        logo: string | null;
      };
    }[]
  >([]);

  const handleVagas = async () => {
    const newList = await getVagas(loginStore.token);
    setLista(newList);
  };

  useEffect(() => {
    handleVagas();
  }, []);

  return (
    <div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white m-3.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className="container mx-auto max-w-lg mb-16">
        <h2 className="text-white text-2xl mt-3">
          Encontramos as seguintes vagas....
        </h2>
      </div>
      <div className="bg-stone-100">
        <div>
          <form className="ml-2">
            <div className="container mx-auto max-w-lg relative bottom-10 flex justify-between">
              <div className="w-40">
                <label className="text-sm text-white" htmlFor="empresa">
                  Empresa
                </label>
                <input
                  className="bg-white rounded border w-full p-1 focus:outline-none focus:ring-2 focus:ring-background1"
                  type="text"
                  id="empresa"
                />
              </div>
              <div className="w-40">
                <label className="text-sm text-white" htmlFor="cargo">
                  Cargo
                </label>
                <input
                  className="bg-white rounded border w-full p-1 focus:outline-none focus:ring-2 focus:ring-background1"
                  type="text"
                  id="cargo"
                />
              </div>
              <div className="w-40">
                <label className="text-sm text-white" htmlFor="salario">
                  Pretensão salarial
                </label>
                <IMaskInput
                  className="bg-white rounded border w-full p-1 focus:outline-none focus:ring-2 focus:ring-background1"
                  mask="R$ 99999999999"
                  maskChar={''}
                  id="salario"
                />
              </div>
            </div>
          </form>
        </div>
        <Lista listagem={lista} />
      </div>
    </div>
  );
}
