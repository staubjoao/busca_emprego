import { makeAutoObservable } from 'mobx';

export interface LoginStoreType {
  typeUser: string;
  setTypeUser: (typeUser: string) => void;
}

export class LoginStore implements LoginStoreType {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  typeUser: string = '';
  setTypeUser = (typeUser: string) => {
    this.typeUser = typeUser;
  };
}
