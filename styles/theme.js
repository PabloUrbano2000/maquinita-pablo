import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            border: `2px solid white`,
            borderRadius: 28,
            color: 'white',
            fontWeight: 'bold',
            background: `linear-gradient(90deg, rgba(255, 175, 80, 1) 0%, rgba(226,57,55,1) 60%)`,
            fontFamily: 'Gibson-BoldItalic'
          }
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            border: `4px dashed blue`
          }
        }
      ]
    }
  }
});
