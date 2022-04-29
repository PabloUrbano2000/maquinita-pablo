import React from 'react';
import Button from '@mui/material/Button';
import Title from '../../utils/Title';
import SubTitle from '../../utils/SubTitle';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { useRouter } from 'next/router';
import InformationDataUser from '../InformationDataUser';

const InformationHome = ({
  data,
  handleGame,
  fillInData,
  setShowDialog,
  setErrorMessage
}) => {
  const router = useRouter();

  return fillInData ? (
    <InformationDataUser data={data} />
  ) : (
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
      <div>
        <Title
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2rem',
            marginBottom: 20,
            textAlign: 'center'
          }}
        >
          {data.information ? data.information.messageOne : ''}
        </Title>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <SubTitle style={{ fontSize: '1.5rem', display: 'block' }}>
            {data.information ? data.information.messageTwo : ''}{' '}
            <Image
              src={'/img/slot/TROME-CostumerJourney-Icono-Ta.png'}
              alt="img-slot-t"
              width={20}
              height={20}
            />{' '}
            {data.information ? data.information.messageThree : ''}{' '}
            <SubTitle style={{ fontSize: '1.5rem' }}>
              {data.information ? data.information.messageFour : ''}{' '}
              <Title style={{ fontSize: '2rem' }}>
                {data.information ? data.information.messageFive : ''}
              </Title>
            </SubTitle>
          </SubTitle>
        </div>
      </div>
      <div>
        <Button
          variant="contained"
          style={{
            fontSize: '1.4rem',
            paddingLeft: 40,
            paddingRight: 40,
            borderRadius: 80
          }}
          onClick={() => handleGame()}
        >
          {data.buttons ? data.buttons.main : ''}
        </Button>
      </div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'row',
          gap: 2
        }}
      >
        <Checkbox
          sx={{
            marginTop: 0.8,
            width: 15,
            height: 15,
            color: 'black',
            backgroundColor: '#ffffff',
            boxShadow: 'none',
            '&:hover': { backgroundColor: '#ffffff' }
          }}
          checked={true}
          checkedIcon={<CloseIcon htmlColor="#000000" />}
        />
        <div>
          <SubTitle style={{ fontSize: '1.2rem', display: 'flex' }}>
            Acepto los{' '}
            <Button
              variant="contained"
              style={{ fontSize: '0.4rem', marginLeft: 10 }}
              onClick={() => {
                setErrorMessage('Estos son los terminos y condiciones');
                setShowDialog(true);
              }}
            >
              {data.buttons ? data.buttons.terms : ''}
            </Button>
          </SubTitle>
          <SubTitle style={{ fontSize: '1.2rem', display: 'block' }}>
            al participar de la promoción{' '}
            <b style={{ display: 'block' }}>La Máquina Ganadora</b>
          </SubTitle>
        </div>
      </Box>
    </Box>
  );
};

export default InformationHome;
