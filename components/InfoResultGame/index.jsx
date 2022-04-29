import React from 'react';
import Title from '../utils/Title';
import SubTitle from '../utils/SubTitle';
import TitleColor from '../utils/TitleColor';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const InfoResultGame = () => {
  return (
    <Paper elevation={3} sx={{ padding: 5 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5
        }}
        pl={'10%'}
        pr={'10%'}
      >
        <Box style={{ transform: 'rotate(-3deg)' }}>
          <TitleColor
            style={{
              fontSize: '2.3rem',
              display: 'block',
              marginBottom: 5,
              textAlign: 'center'
            }}
          >
            !FELICITACIONES!
          </TitleColor>
        </Box>
        <SubTitle
          style={{
            fontSize: '1.3rem',
            textAlign: 'center'
          }}
        >
          Eres el afortunado ganador en llevarse el{' '}
          <Title
            style={{
              fontSize: '1.5rem',
              textAlign: 'center'
            }}
          >
            PREMIAZO DE TROME.
          </Title>
        </SubTitle>

        <Title
          style={{
            display: 'block',
            fontSize: '1.5rem',
            textAlign: 'center',
            color: '#ffaf50'
          }}
        >
          NOMBRE Y APELLIDO
          <Title
            style={{
              display: 'block',
              fontSize: '1.5rem',
              textAlign: 'center',
              color: '#ffaf50'
            }}
          >
            DNI: 123123131
          </Title>
        </Title>

        <Title
          style={{
            display: 'block',
            fontSize: '1.3rem',
            textAlign: 'center'
          }}
        >
          Atento, porque estaremos enviando el código de validación a tu correo.
        </Title>
        <Button
          variant="contained"
          style={{
            fontSize: '1.3rem',
            borderRadius: 80
          }}
          onClick={() => console.log('envia')}
        >
          Enviar código al correo
        </Button>
      </Box>
    </Paper>
  );
};

export default InfoResultGame;
