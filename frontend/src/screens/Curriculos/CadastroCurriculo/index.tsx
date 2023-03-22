import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import { SectionCreate } from '../../../components/SectionCreate';
import { useEffect } from 'react';
import { ButtonCreate, Content } from './styles';
import { useStore } from '../../../hooks/stores';
import { observer } from 'mobx-react-lite';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const CadastroCurriculo = observer(() => {
  const { id } = useParams();
  const { curriculoStore, idiomaStore, cursoStore, snackbarStore, loginStore } =
    useStore();

  useEffect(() => {
    curriculoStore.createNewExperience();
    idiomaStore.createNewIdioma();
    cursoStore.createNewCurso();
  }, []);

  const createCurriculo = async () => {
    curriculoStore.setLoading(true);
    const response = await curriculoStore.handleCreateCurriculo(
      loginStore.token,
      id as any,
      curriculoStore.createExperience,
      idiomaStore.createIdioma,
      cursoStore.createCursos
    );
    await delay(1000);

    curriculoStore.setLoading(false);

    snackbarStore.setOpenSnackbar(true);
    !response.ok
      ? snackbarStore.setSeverity('error')
      : snackbarStore.setSeverity('success');

    snackbarStore.setMessage(response.message);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      marginY={8}
    >
      <Content>
        <SectionCreate
          array={curriculoStore.experiencias}
          title="Experiências profissionais"
          firstItem={{
            xs: 12,
            label: 'Nome da empresa',
            placeholder: 'Digite o nome da empresa',
            currentValue: curriculoStore.nomeEmpresa,
            setCurrentValue: curriculoStore.setNomeEmpresa,
          }}
          secondItem={{
            xs: 6,
            label: 'Cargo',
            placeholder: 'Digite o cargo',
            currentValue: curriculoStore.cargo,
            setCurrentValue: curriculoStore.setCargo,
          }}
          thirdItem={{
            xs: 3,
            label: 'Início',
            placeholder: 'Data de início',
            currentValue: curriculoStore.inicio,
            setCurrentValue: curriculoStore.setInicio,
          }}
          fourItem={{
            xs: 3,
            label: 'Fim',
            placeholder: 'Data de fim',
            currentValue: curriculoStore.fim,
            setCurrentValue: curriculoStore.setFim,
          }}
          onPressAdd={curriculoStore.handleSaveExperience}
        />
        <SectionCreate
          title="Idiomas"
          array={idiomaStore.idiomas}
          firstItem={{
            xs: 6,
            label: 'Idioma',
            placeholder: 'Ex: Inglês',
            currentValue: idiomaStore.idioma,
            setCurrentValue: idiomaStore.setIdioma,
          }}
          secondItem={{
            xs: 6,
            label: 'Nível',
            placeholder: 'Ex: Intermediário',
            currentValue: idiomaStore.nivel,
            setCurrentValue: idiomaStore.setNivel,
          }}
          onPressAdd={idiomaStore.handleSaveIdiomas}
        />
        <SectionCreate
          title="Cursos"
          array={cursoStore.cursos}
          firstItem={{
            xs: 12,
            label: 'Curso',
            placeholder: 'Digite o nome do curso',
            currentValue: cursoStore.curso,
            setCurrentValue: cursoStore.setCurso,
          }}
          secondItem={{
            xs: 4,
            label: 'Início',
            placeholder: 'Data início',
            currentValue: cursoStore.inicioCurso,
            setCurrentValue: cursoStore.setInicioCurso,
          }}
          thirdItem={{
            xs: 4,
            label: 'Fim',
            placeholder: 'Data fim',
            currentValue: cursoStore.fimCurso,
            setCurrentValue: cursoStore.setFimCurso,
          }}
          onPressAdd={cursoStore.handleSaveCursos}
        />

        <ButtonCreate
          sx={{ marginLeft: 'auto' }}
          variant="contained"
          onClick={createCurriculo}
        >
          {curriculoStore.loading ? (
            <CircularProgress color="inherit" size={20} />
          ) : (
            <Typography>Salvar</Typography>
          )}
        </ButtonCreate>
      </Content>

      <Snackbar
        open={snackbarStore.openSnackbar}
        autoHideDuration={1000}
        onClose={() =>
          snackbarStore.setOpenSnackbar(!snackbarStore.openSnackbar)
        }
      >
        <Alert
          onClose={() =>
            snackbarStore.setOpenSnackbar(!snackbarStore.openSnackbar)
          }
          severity={snackbarStore.severity}
          sx={{ width: '100%' }}
        >
          {snackbarStore.message}
        </Alert>
      </Snackbar>
    </Box>
  );
});
