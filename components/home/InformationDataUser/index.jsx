import React from 'react';
import Button from '@mui/material/Button';
import Title from '../../utils/Title';
import SubTitle from '../../utils/SubTitle';
import Box from '@mui/material/Box';
// import { useRouter } from 'next/router';

const InformationDataUser = ({ data }) => {
  //   const router = useRouter();

  return (
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
          {data.informationDataUser ? data.informationDataUser.messageOne : ''}
        </Title>

        <SubTitle
          style={{ fontSize: '1.5rem', display: 'block', textAlign: 'center' }}
        >
          {data.informationDataUser ? data.informationDataUser.messageTwo : ''}
        </SubTitle>
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
          onClick={() => console.log('redirigir')}
        >
          <div>
            <div>
              {data.informationDataUser
                ? data.informationDataUser.ButtonOne
                : ''}
            </div>
            <div style={{ fontSize: '1rem' }}>
              {data.informationDataUser
                ? data.informationDataUser.ButtonTwo
                : ''}
            </div>
          </div>
        </Button>
      </div>
    </Box>
  );
};

export default InformationDataUser;
