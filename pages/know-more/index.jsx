import React, { useContext } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import Title from '../../components/utils/Title';
import SubTitle from '../../components/utils/SubTitle';
import TitleColor from '../../components/utils/TitleColor';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { DataContext } from '../../context/ProviderData';
import ReactHtmlParser from 'react-html-parser';

const KnowMore = () => {
  const router = useRouter();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { systemData } = useContext(DataContext);

  const ListItem = ({ question, children }) => {
    return (
      <li style={{ marginBottom: 20 }}>
        <Title
          style={{
            display: 'block',
            color: 'rgba(253, 139, 45, 1)',
            fontSize: '1.2rem'
          }}
        >
          {question}
        </Title>
        <SubTitle style={{ fontSize: '1.1rem' }}>{children}</SubTitle>
      </li>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ height: '100vh' }}>
      <Grid container spacing={2} mt={6}>
        <Grid item xs={12}>
          <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
            <Button
              variant="contained"
              startIcon={<KeyboardArrowUpIcon />}
              style={{ fontSize: 16 }}
              onClick={() => router.push('/')}
            >
              {systemData.buttons.participates}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <SubTitle
            style={{
              fontSize: '1.5rem',
              display: 'block',
              marginBottom: 5,
              textAlign: matches ? 'left' : 'center'
            }}
          >
            {systemData.knowMore.messageOne}
          </SubTitle>
          <TitleColor
            style={{
              fontSize: '2rem',
              display: 'block',
              marginBottom: 5,
              textAlign: matches ? 'left' : 'center'
            }}
          >
            {systemData.knowMore.messageTwo}
            <TitleColor style={{ fontSize: '2.5rem', marginBottom: 5 }}>
              {systemData.knowMore.messageThree}
            </TitleColor>
          </TitleColor>
        </Grid>
        <Grid item xs={12} sm={6} md={6}></Grid>
        <Grid item xs={12}>
          <SubTitle
            style={{
              fontSize: '1.5rem',
              display: 'block',
              marginBottom: 5,
              textAlign: matches ? 'left' : 'center'
            }}
          >
            {systemData.knowMore.messageFour}
          </SubTitle>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <ul
                style={{
                  listStyle: 'none'
                }}
              >
                {systemData.knowMore.questions.map((item, index) => (
                  <ListItem key={`list-${index}`} question={item.question}>
                    {ReactHtmlParser(item.answer)}
                  </ListItem>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default KnowMore;
