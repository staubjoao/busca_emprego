import { useParams } from 'react-router-dom';
import { Box, Button, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SectionCreate } from '../components/SectionCreate';
import { useCallback, useEffect, useState } from 'react';
import { ItensList } from '../types/curriculo';
import { createCurriculo } from '../service';
import { Header } from '../components/HeaderTitle';

const Content = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: '60px',
  padding: theme.spacing(4),
  width: '50%',
  borderRadius: 12,
}));

const ButtonCreate = styled(Button)(({ theme }) => ({
  backgroundColor: '#5E80BB',
  display: 'flex',
  alignSelf: 'flex-end',
  width: '20%',
}));

export function CadastroCurriculo() {
  const { id } = useParams();
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');
  const [cargo, setCargo] = useState('');
  const [experiences, setExperiences] = useState<Array<ItensList>>([]);

  const [idioma, setIdioma] = useState('');
  const [nivel, setNivel] = useState('');
  const [idiomas, setIdiomas] = useState<Array<ItensList>>([]);

  const [curso, setCurso] = useState('');
  const [inicioCurso, setInicioCurso] = useState('');
  const [fimCurso, setFimCurso] = useState('');
  const [cursos, setCursos] = useState<Array<ItensList>>([]);

  const clearStatesExperience = () => {
    setCargo('');
    setInicio('');
    setFim('');
    setNomeEmpresa('');
  };

  const clearStatesIdiomas = () => {
    setIdioma('');
    setNivel('');
  };

  const clearStatesCursos = () => {
    setCurso('');
    setFimCurso('');
    setInicioCurso('');
  };

  useEffect(() => {
    if (!experiences.length) {
      const experienceItem = {
        firstItem: cargo,
        secondItem: fim,
        thirdItem: inicio,
        fourItem: nomeEmpresa,
      };

      setExperiences([experienceItem, ...experiences]);
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

    console.log(experiences, cursos, idiomas);
  }, []);

  const handleSaveExperience = () => {
    const item = {
      firstItem: nomeEmpresa,
      secondItem: cargo,
      thirdItem: inicio,
      fourItem: fim,
    };
    setExperiences([item, ...experiences]);
    clearStatesExperience();
  };

  const handleSaveIdiomas = () => {
    const item = {
      firstItem: idioma,
      secondItem: nivel,
    };
    setIdiomas([item, ...idiomas]);
    clearStatesIdiomas();
  };

  const handleSaveCursos = () => {
    const item = {
      firstItem: curso,
      secondItem: inicioCurso,
      thirdItem: fimCurso,
    };
    setCursos([item, ...cursos]);
    clearStatesCursos();
  };

  useEffect(() => {
    if (cargo && inicio && nomeEmpresa && fim) handleSaveExperience();
  }, [cargo, inicio, nomeEmpresa, fim]);

  useEffect(() => {
    if (inicioCurso && curso && fimCurso) handleSaveCursos();
  }, [inicioCurso, curso, fimCurso]);

  useEffect(() => {
    if (idioma && nivel) handleSaveIdiomas();
  }, [idioma, nivel]);

  const handleCreateCurriculo = useCallback(async () => {
    const experienciasArrayAPI = experiences
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

    await createCurriculo(
      id as any,
      experienciasArrayAPI,
      idiomasArrayAPI,
      cursosAPI
    );
  }, [experiences, idiomas, cursos]);

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
          array={experiences}
          title="Experiências profissionais"
          firstItem={{
            label: 'Nome da empresa',
            placeholder: 'Digite o nome da empresa',
            currentValue: nomeEmpresa,
            setCurrentValue: setNomeEmpresa,
          }}
          secondItem={{
            label: 'Cargo',
            placeholder: 'Digite o cargo',
            currentValue: cargo,
            setCurrentValue: setCargo,
          }}
          thirdItem={{
            label: 'Início',
            placeholder: 'Data de início',
            currentValue: inicio,
            setCurrentValue: setInicio,
          }}
          fourItem={{
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
            label: 'Idioma',
            placeholder: 'Ex: Inglês',
            currentValue: idioma,
            setCurrentValue: setIdioma,
          }}
          secondItem={{
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
            label: 'Curso',
            placeholder: 'Digite o nome do curso',
            currentValue: curso,
            setCurrentValue: setCurso,
          }}
          secondItem={{
            label: 'Início',
            placeholder: 'Data início',
            currentValue: inicioCurso,
            setCurrentValue: setInicioCurso,
          }}
          thirdItem={{
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
    </Box>
  );
}
