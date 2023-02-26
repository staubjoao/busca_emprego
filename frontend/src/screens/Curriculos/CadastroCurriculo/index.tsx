import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Snackbar, Alert } from '@mui/material';
import { SectionCreate } from '../../../components/SectionCreate';
import { useEffect } from 'react';
import { ButtonCreate, Content } from './styles';
import { useStore } from '../../../hooks/stores';
import { observer } from 'mobx-react-lite';

export const CadastroCurriculo = observer(() => {
  const { id } = useParams();
  const { curriculoStore, idiomaStore, cursoStore, snackbarStore } = useStore();
  const {
    nomeEmpresa,
    setNomeEmpresa,
    cargo,
    experiencias,
    fim,
    inicio,
    setCargo,
    setFim,
    setInicio,
    handleSaveExperience,
    createNewExperience,
    createExperience,
    handleCreateCurriculo,
  } = curriculoStore;

  const {
    idioma,
    idiomas,
    nivel,
    setIdioma,
    setNivel,
    handleSaveIdiomas,
    createNewIdioma,
    createIdioma,
  } = idiomaStore;

  const {
    curso,
    cursos,
    fimCurso,
    inicioCurso,
    setCurso,
    setFimCurso,
    setInicioCurso,
    handleSaveCursos,
    createNewCurso,
    createCursos,
  } = cursoStore;

  const { openSnackbar, setOpenSnackbar, severity, showSnackBar } =
    snackbarStore;

  const navigate = useNavigate();

  useEffect(() => {
    createNewExperience();
    createNewIdioma();
    createNewCurso();
  }, []);

  const createCurriculo = async () => {
    const response = await handleCreateCurriculo(
      id as any,
      createExperience,
      createIdioma,
      createCursos
    );

    showSnackBar(response.ok);
    //navigate('candidato/vagas');
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
          array={experiencias}
          title="Experiências profissionais"
          firstItem={{
            xs: 12,
            label: 'Nome da empresa',
            placeholder: 'Digite o nome da empresa',
            currentValue: nomeEmpresa,
            setCurrentValue: setNomeEmpresa,
          }}
          secondItem={{
            xs: 6,
            label: 'Cargo',
            placeholder: 'Digite o cargo',
            currentValue: cargo,
            setCurrentValue: setCargo,
          }}
          thirdItem={{
            xs: 3,
            label: 'Início',
            placeholder: 'Data de início',
            currentValue: inicio,
            setCurrentValue: setInicio,
          }}
          fourItem={{
            xs: 3,
            label: 'Fim',
            placeholder: 'Data de fim',
            currentValue: fim,
            setCurrentValue: setFim,
          }}
          onPressAdd={handleSaveExperience}
        />
        <SectionCreate
          title="Idiomas"
          array={idiomas}
          firstItem={{
            xs: 6,
            label: 'Idioma',
            placeholder: 'Ex: Inglês',
            currentValue: idioma,
            setCurrentValue: setIdioma,
          }}
          secondItem={{
            xs: 6,
            label: 'Nível',
            placeholder: 'Ex: Intermediário',
            currentValue: nivel,
            setCurrentValue: setNivel,
          }}
          onPressAdd={handleSaveIdiomas}
        />
        <SectionCreate
          title="Cursos"
          array={cursos}
          firstItem={{
            xs: 12,
            label: 'Curso',
            placeholder: 'Digite o nome do curso',
            currentValue: curso,
            setCurrentValue: setCurso,
          }}
          secondItem={{
            xs: 4,
            label: 'Início',
            placeholder: 'Data início',
            currentValue: inicioCurso,
            setCurrentValue: setInicioCurso,
          }}
          thirdItem={{
            xs: 4,
            label: 'Fim',
            placeholder: 'Data fim',
            currentValue: fimCurso,
            setCurrentValue: setFimCurso,
          }}
          onPressAdd={handleSaveCursos}
        />

        <ButtonCreate
          sx={{ marginLeft: 'auto' }}
          variant="contained"
          onClick={createCurriculo}
        >
          <Typography>Salvar</Typography>
        </ButtonCreate>
      </Content>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={1000}
        onClose={() => setOpenSnackbar(!openSnackbar)}
      >
        <Alert
          onClose={() => setOpenSnackbar(!openSnackbar)}
          severity={severity}
          sx={{ width: '100%' }}
        >
          Currículo salvo com sucesso
        </Alert>
      </Snackbar>
    </Box>
  );
});
