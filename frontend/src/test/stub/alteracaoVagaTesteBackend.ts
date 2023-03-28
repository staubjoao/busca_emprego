export const put = (titulo: string,
  periodo: string,
  salario: number,
  descricao: string,
  EmpresaId: string | null, token: string) => {
    
    if(token !== 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5NTU4NzB9.NH2B2vBGU7wlNBecPVsLftzgkK309iUA4nyPHoFdQo8'){ 
      return false; 
    }

    if(EmpresaId === null || EmpresaId !== '1' ){ 
      return false;
    }

    return true;
}
   