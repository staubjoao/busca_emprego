import { makeAutoObservable } from 'mobx';

type SeverityType = 'success' | 'info' | 'warning' | 'error';
type SuccessMessage =
  | ''
  | 'Currículo salvo com sucesso'
  | 'Candidato salvo com sucesso'
  | 'Empresa cadastrada com sucesso'
  | 'Campo(s) em branco'
  | 'Falha ao cadastrar a empresa';
type ErrorMessage = 'Ops, algo deu errado :(';

export interface SnackbarStoreType {
  openSnackbar: boolean;
  setOpenSnackbar: (
    openSnackbar: boolean
  ) => void | React.Dispatch<React.SetStateAction<string>>;

  severity: SeverityType;
  setSeverity: (
    severity: SeverityType
  ) => void | React.Dispatch<React.SetStateAction<string>>;

  message: SuccessMessage | ErrorMessage;
  setMessage: (
    message: SuccessMessage | ErrorMessage
  ) => void | React.Dispatch<React.SetStateAction<string>>;

  showSnackBar: (responseStatus: string) => void;
}

export class SnackbarStore implements SnackbarStoreType {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  severity: SeverityType = 'info';
  setSeverity(severity: SeverityType) {
    this.severity = severity;
  }

  openSnackbar: boolean = false;
  setOpenSnackbar(openSnackbar: boolean) {
    this.openSnackbar = openSnackbar;
  }

  message: SuccessMessage | ErrorMessage = '';
  setMessage(message: SuccessMessage | ErrorMessage) {
    this.message = message;
  }

  showSnackBar(responseStatus: string) {
    if (responseStatus == 'OK') {
      this.setOpenSnackbar(true);
      this.setSeverity('success');
    } else {
      this.setOpenSnackbar(true);
      this.setSeverity('error');
    }
  }
}
