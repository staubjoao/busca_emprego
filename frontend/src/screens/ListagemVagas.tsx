import IMaskInput from "react-input-mask";
import {FormEvent, useEffect, useState} from "react";
import {api} from "../lib/axios";
import {Lista} from "../components/Lista"


export function ListagemVagas() {

    const [lista, setLista] = useState<{ id: number,
        titulo: string,
        descricao: string,
        periodo: string,
        salario: number,
        EmpresaId: number,
        Empresa: {
            nome: string,
            logo: string | null
        }}[]>([]);

    useEffect(() => {
        api
            .get('usuario/listar/vagas', {})
            .then(res => {
                const { vagas }  = res.data
                setLista(vagas)
            })

    }, []);

    return (
        <div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-6 h-6 text-white m-3.5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>

            </div>
            <div className="container mx-auto max-w-lg mb-16">
                <h2 className="text-white text-2xl mt-3">Encontramos as seguintes vagas....</h2>
            </div>
            <div className="bg-stone-100">
                <div>
                    <form className="ml-2">
                        <div className="container mx-auto max-w-lg relative bottom-10 flex justify-between">
                            <div className="w-40">
                                <label className="text-sm text-white" htmlFor="empresa">Empresa</label>
                                <input
                                    className="bg-white rounded border w-full p-1 focus:outline-none focus:ring-2 focus:ring-background1"
                                    type="text"
                                    id="empresa"
                                />
                            </div>
                            <div className="w-40">
                                <label className="text-sm text-white" htmlFor="cargo">Cargo</label>
                                <input
                                    className="bg-white rounded border w-full p-1 focus:outline-none focus:ring-2 focus:ring-background1"
                                    type="text"
                                    id="cargo"
                                />
                            </div>
                            <div className="w-40">
                                <label className="text-sm text-white" htmlFor="salario">Pretensão salarial</label>
                                <IMaskInput
                                    className="bg-white rounded border w-full p-1 focus:outline-none focus:ring-2 focus:ring-background1"
                                    mask="R$ 99999999999"
                                    maskChar={""}
                                    id="salario"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <Lista listagem={lista}/>
            </div>
        </div>
    )
}