import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Snackbar, Alert } from '@mui/material';
import { SectionCreate } from '../../../components/SectionCreate';
import { useCallback, useEffect, useState } from 'react';
import { createCurriculo } from '../../../service';
import { ButtonCreate, Content } from './styles';
import { useStore } from '../../../hooks/stores';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

export const CadastroCurriculo = observer(() => {
  const { id } = useParams();
  const { curriculoStore, idiomaStore, cursoStore } = useStore();
  const {
    nomeEmpresa,
    setNomeEmpresa,
    cargo,
    experiencias,
    fim,
    inicio,
    setCargo,
    setExperiencias,
    setFim,
    setInicio,
    handleSaveExperience,
  } = curriculoStore;

  const {
    idioma,
    idiomas,
    nivel,
    setIdioma,
    setIdiomas,
    setNivel,
    handleSaveIdiomas,
  } = idiomaStore;

  const {
    curso,
    cursos,
    fimCurso,
    inicioCurso,
    setCurso,
    setCursos,
    setFimCurso,
    setInicioCurso,
    handleSaveCursos,
  } = cursoStore;

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [severity, setSeverity] = useState<
    'success' | 'info' | 'warning' | 'error'
  >('success');
  const navigate = useNavigate();

  useEffect(() => {
    if (!experiencias.length) {
      const experienceItem = {
        firstItem: cargo,
        secondItem: fim,
        thirdItem: inicio,
        fourItem: nomeEmpresa,
      };

      setExperiencias([experienceItem, ...experiencias]);
    }

    if (!idiomas.length) {
      const idiomaItem = {
        firstItem: idioma,
        secondItem: nivel,
      };

      setIdiomas([idiomaItem, ...idiomas]);
    }

    if (!cursos.length) {
      const cursoItem = {
        firstItem: curso,
        secondItem: inicioCurso,
        thirdItem: fimCurso,
      };

      setCursos([cursoItem, ...cursos]);
    }

    console.log(experiencias, cursos, idiomas);
  }, []);

  const handleCreateCurriculo = useCallback(async () => {
    const experienciasArrayAPI = experiencias
      .filter((i) => i.firstItem !== '')
      .map((i, index) => {
        return {
          id: index + 10,
          empresa: i.firstItem,
          cargo: i.secondItem,
          inicio: i.thirdItem,
          termino: i.fourItem,
          endereco: 'Rua Palmital',
          ramo: 'algum',
        };
      });

    const idiomasArrayAPI = idiomas
      .filter((i) => i.firstItem !== '')
      .map((i, index) => {
        return {
          id: index + 10,
          idioma: i.firstItem,
          nivel: i.secondItem,
        };
      });

    const cursosAPI = cursos
      .filter((i) => i.firstItem !== '')
      .map((i, index) => {
        return {
          id: index + 10,
          curso: i.firstItem,
          inicio: i.secondItem,
          fim: i.thirdItem,
        };
      });

    const response = await createCurriculo(
      id as any,
      experienciasArrayAPI,
      idiomasArrayAPI,
      cursosAPI
    );

    if (response.ok === 'OK') {
      setOpenSnackbar(true);
      setSeverity('success');
      navigate('/candidato/vagas');
    } else {
      setOpenSnackbar(true);
      setSeverity('error');
    }
  }, [experiencias, idiomas, cursos]);

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
          onClick={handleCreateCurriculo}
        >
          <Typography>Salvar</Typography>
        </ButtonCreate>
      </Content>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
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
