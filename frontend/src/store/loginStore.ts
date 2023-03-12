import { makeAutoObservable } from 'mobx';
import { autenticacaoLoginCandidato } from '../service/login';

export interface LoginStoreType {
  typeUser: string;
  setTypeUser: (typeUser: string) => void;
  email: string;
  setEmail: (email: string) => void;
  senha: string;
  setSenha: (senha: string) => void;
  authCandidato: () => void;
  error: string;
  setError: (error: string) => void;
  token: string;
  setToken: (token: string) => void;
  idUser: string;
  setIdUser: (idUser: string) => void;
}

export class LoginStore implements LoginStoreType {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  typeUser: string = '';
  setTypeUser = (typeUser: string) => {
    this.typeUser = typeUser;
  };

  email: string = '';
  setEmail = (email: string) => {
    this.email = email;
  };

  senha: string = '';
  setSenha = (senha: string) => {
    this.senha = senha;
  };

  error: string = '';
  setError = (error: string) => {
    this.error = error;
  };

  token: string = '';
  setToken = (token: string) => {
    this.token = token;
  };

  idUser: string = '';
  setIdUser = (idUser: string) => {
    this.idUser = idUser;
  };

  authCandidato = async () => {
    const response = await autenticacaoLoginCandidato(this.email, this.senha);

    if (response?.data.erro) {
      this.setError(response.data.mensagem);
      return { ok: false };
    } else {
      localStorage.setItem('id', response?.data.id);
      localStorage.setItem('token', response?.data.token);
      this.setToken(response?.data.token);
      this.setIdUser(response?.data.id);
      this.setTypeUser('candidato');
      return { ok: true };
    }
  };
}
