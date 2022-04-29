import React, { useContext, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ImageHome from '../../components/home/ImageHome';
import { DataContext } from '../../context/ProviderData';
import InfoResultGame from '../../components/InfoResultGame';
import Title from '../../components/utils/Title';
import TitleColor from '../../components/utils/TitleColor';

const ResultGame = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { auth } = useContext(DataContext);

  const result = {
    win: true,
    code: 'AS1233'
  };

  useEffect(() => {
    if (auth) {
      console.log('= auth');
      console.log(auth);
    }
  }, [auth]);

  const ImageMachine = () => {
    return (
      <Box
        height={matches ? '70vh' : '40vh'}
        width={'100%'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <ImageHome mediaQuerySm={matches} />
      </Box>
    );
  };

  const BadResult = () => {
    const TitleBadResult = () => {
      return (
        <Box
          style={{
            transform: 'rotate(-10deg)'
          }}
        >
          <TitleColor
            style={{
              fontSize: '3rem',
              display: 'block',
              textAlign: 'center'
            }}
          >
            !ESTUVISTE
          </TitleColor>
          <TitleColor
            style={{
              fontSize: '3rem',
              display: 'block',
              textAlign: 'center'
            }}
          >
            CERCA!
          </TitleColor>
        </Box>
      );
    };

    const SubTitleBadResult = () => {
      return (
        <Title
          style={{
            display: 'block',
            fontSize: '2rem',
            marginTop: 15,
            textAlign: 'center'
          }}
        >
          Recuerda que todos los días tienes una nueva oportunidad.
        </Title>
      );
    };

    const GridMobile = () => (
      <>
        <Grid item xs={12}>
          <TitleBadResult />
        </Grid>
        <Grid item xs={12} style={{ width: '100%' }}>
          <ImageMachine />
        </Grid>
        <Grid item xs={12} style={{ marginBottom: 20 }}>
          <SubTitleBadResult />
        </Grid>
      </>
    );

    const GridDesk = () => (
      <>
        <Grid item xs={12} sm={6}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            style={{ height: '70vh' }}
          >
            <TitleBadResult />
            <SubTitleBadResult />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} style={{ width: '100%' }}>
          <ImageMachine />
        </Grid>
      </>
    );

    return (
      <Grid container mt={6} pl={2} pr={2}>
        {matches ? <GridDesk /> : <GridMobile />}
      </Grid>
    );
  };

  const SuccessResult = () => {
    return (
      <Container maxWidth="lg" sx={{ height: '100vh' }}>
        <Grid container spacing={2} mt={6}>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              height={matches ? '70vh' : '60vh'}
              width={'100%'}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <ImageHome mediaQuerySm={matches} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <InfoResultGame />
          </Grid>
        </Grid>
      </Container>
    );
  };

  return result.win ? <SuccessResult /> : <BadResult />;
};

export default ResultGame;
