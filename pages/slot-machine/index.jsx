import React, { useContext, useEffect, useState } from 'react';
import Slot from '../../components/Slot/index';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { DataContext } from '../../context/ProviderData';
import TitleColor from '../../components/utils/TitleColor';
import DialogMessage from '../../components/DialogMessage';
import { useRouter } from 'next/router';

const SlotMachine = () => {
  const { systemData, auth } = useContext(DataContext);
  const [showDialog, setShowDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      console.log('dad', auth);
      setErrorMessage('Disculpe, no tiene permisos para jugar');
      setShowDialog(true);
      setTimeout(() => {
        router.push('/');
      }, 1000);
    }
  }, [auth]);

  const viewGame = (values) => {
    console.log('lazamos', values);
    // setErrorMessage('alguna validacion');
    // setShowDialog(true);
    router.push('/result-game');
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ height: '100vh' }}>
        <Grid container spacing={2} mt={6}>
          <Grid item xs={12}>
            <TitleColor
              style={{
                display: 'block',
                fontSize: '2rem',
                textAlign: 'center'
              }}
            >
              {systemData.game.messageOne}
            </TitleColor>
          </Grid>
          <Grid item xs={12}>
            <Slot viewGame={viewGame} systemData={systemData} />
          </Grid>
        </Grid>
      </Container>
      <DialogMessage
        show={showDialog}
        setShow={setShowDialog}
        title={'Alerta'}
        message={errorMessage}
      />
    </>
  );
};

export default SlotMachine;
