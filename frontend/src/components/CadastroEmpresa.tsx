import { Link } from 'react-router-dom'
// import paper from '../assets/images/paper.png'
import IMaskInput from 'react-input-mask'
import { api } from '../lib/axios'
import { FormEvent, useState } from 'react'

export function CadastroEmpresa() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')
    const [pais, setPais] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [telefone, setTelefone] = useState('')
    const [ramo, setRamo] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [erro, setErro] = useState('')

    async function cadastrar(e: FormEvent) {

    }

    const checkCEP = () => {
        const cepApi = cep.replace(/\D/g, '')
        fetch(`https://viacep.com.br/ws/${cepApi}/json/`)
            .then(res => res.json()).then(data => {
                setCidade(data.localidade)
                setUf(data.uf)
                setEndereco(data.logradouro)
                setBairro(data.bairro)
            })
    }

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
                <div className="flex flex-col gap-3 text-center">
                    <h2 className="text-white font-semibold lg:text-2xl md:text-xl">
                        Encontre os melhores currículos para sua vaga
                    </h2>
                </div>
            </div>
            <div className="bg-white h-screen w-4/5 rounded-l-4xl flex flex-col justify-center">
                <h2 className="text-textColor1 text-center font-semibold text-2xl mb-10 lg:text-3xl md:text-2xl">
                    Criar uma conta
                </h2>
                <form onSubmit={cadastrar} className="sm:mx-10 lg:mx-40">
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <input
                            className="block mb-4 border border-borderColor1 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-background1 px-3"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                        <input
                            className="block mb-4 border border-borderColor1 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-background1 px-3"
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            onChange={event => setSenha(event.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="col-span-1">
                            <input
                                className="block mb-4 border border-borderColor1 w-full py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-background1 px-3"
                                type="text"
                                placeholder="Nome da empresa"
                                value={nome}
                                onChange={event => setNome(event.target.value)}
                            />
                        </div>
                        <div className="col-span-1">
                            <input
                                className="block mb-4 border border-borderColor1 w-full py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-background1 px-3"
                                type="text"
                                placeholder="Ramo da empresa"
                                value={ramo}
                                onChange={event => setRamo(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 w-full">
                        <div className="col-span-3">
                            <IMaskInput
                                className="block mb-4 border border-borderColor1 w-full py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-background1 px-3"
                                mask="99.999.999/9999-99"
                                placeholder="CNPJ"
                                value={cnpj}
                                onChange={event => setCnpj(event.target.value)}
                            />
                        </div>
                        <div className="col-span-2">
                            <div className="col-span-1">
                                <input
                                    className="block mb-4 border border-borderColor1 w-full py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-background1 px-3"
                                    type="text"
                                    placeholder="País"
                                    value={pais}
                                    onChange={event => setPais(event.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 w-full">
                        <div className="col-span-1">
                            <IMaskInput
                                className="block mb-4 border border-borderColor1 w-full py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-background1 px-3"
                                mask="99999-999"
                                placeholder="CEP"
                                value={cep}
                                onChange={event => setCep(event.target.value)}
                                onBlur={checkCEP}
                            />
                        </div>
                        <div className="col-span-1">
                            <input
                                className="block mb-4 border border-borderColor1 w-full py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-background1 px-3"
                                type="text"
                                placeholder="UF"
                                value={uf}
                                onChange={event => setUf(event.target.value)}
                            />
                        </div>
                        <div className="col-span-2">
                            <input
                                className="block mb-4 border border-borderColor1 w-full py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-background1 px-3"
                                type="text"
                                placeholder="Cidade"
                                value={cidade}
                                onChange={event => setCidade(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 w-full">
                        <div className="col-span-3">
                            <input
                                className="block mb-4 border border-borderColor1 w-full py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-background1 px-3"
                                type="text"
                                placeholder="Endereço"
                                value={endereco}
                                onChange={event => setEndereco(event.target.value)}
                            />
                        </div>
                        <div className="col-span-1">
                            <input
                                className="block mb-4 border border-borderColor1 w-full py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-background1 px-3"
                                type="number"
                                placeholder="Número"
                                value={numero}
                                onChange={event => setNumero(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 w-full">
                        <div className="col-span-1">
                            <input
                                className="block mb-4 border border-borderColor1 w-full py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-background1 px-3"
                                type="text"
                                placeholder="Bairro"
                                value={bairro}
                                onChange={event => setBairro(event.target.value)}
                            />
                        </div>
                        <div className="col-span-1">
                            <input
                                className="block mb-4 border border-borderColor1 w-full py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-background1 px-3"
                                type="text"
                                placeholder="Complemento"
                                value={complemento}
                                onChange={event => setComplemento(event.target.value)}
                            />
                        </div>
                        <div className="col-span-1">
                            <input
                                className="block mb-4 border border-borderColor1 w-full py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-background1 px-3"
                                type="text"
                                placeholder="Telefone"
                                value={telefone}
                                onChange={event => setTelefone(event.target.value)}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-background1 text-white w-full py-1 rounded-3xl hover:bg-btnColor2 transition-colors"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}
