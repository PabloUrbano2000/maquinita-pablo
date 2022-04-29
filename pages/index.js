import React, { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import InformationHome from '../components/home/InformationHome/index';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter } from 'next/router';
import ImageHome from '../components/home/ImageHome';
import { DataContext } from '../context/ProviderData';
import DialogMessage from '../components/DialogMessage';

const Home = () => {
  const router = useRouter();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { systemData, auth } = useContext(DataContext);
  const [fillInData, setFillInData] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (auth) {
      console.log('= auth');
      console.log(auth);
    }
  }, [auth]);

  const handleClickOpenDialog = () => {
    setShowDialog(true);
  };

  const handleGame = () => {
    // Validaciones juego //
    //comprobar que el usuario esté en sesión
    const filldata = false;
    if (!auth) {
      setErrorMessage('Debe iniciar sesión en TROME para jugar.');
      handleClickOpenDialog();
    }
    if (filldata) {
      setFillInData(true);
    }
    if (!filldata && auth) {
      router.push('/slot-machine');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ height: '100vh' }}>
      <Grid container mt={matches ? 6 : 0}>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            height={matches ? '70vh' : '60vh'}
            width={'100%'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            {matches ? (
              <InformationHome
                data={systemData}
                handleGame={handleGame}
                fillInData={fillInData}
                setShowDialog={setShowDialog}
                setErrorMessage={setErrorMessage}
              />
            ) : (
              <ImageHome mediaQuerySm={matches} />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          {matches ? (
            <ImageHome mediaQuerySm={matches} />
          ) : (
            <InformationHome
              data={systemData}
              handleGame={handleGame}
              fillInData={fillInData}
              setShowDialog={setShowDialog}
              setErrorMessage={setErrorMessage}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
            <Button
              variant="contained"
              startIcon={<KeyboardArrowDownIcon />}
              style={{ fontSize: '1em', marginTop: 20, marginBottom: 40 }}
              onClick={() => router.push('/know-more')}
            >
              {systemData.buttons.more}
            </Button>
          </Box>
        </Grid>
      </Grid>
      <DialogMessage
        show={showDialog}
        setShow={setShowDialog}
        title={'Alerta'}
        message={errorMessage}
      />
    </Container>
  );
};

export default Home;
