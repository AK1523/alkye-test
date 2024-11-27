'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)', // Your custom font

    // Define typography variants
    h1: {
      fontSize: '3rem', // 48px
      fontWeight: 500, // Bold
      letterSpacing: '-0.02em', // Adjust spacing
      fontFamily: "Söhne Test",
      color: "#000000",
    },
    h2: {
      fontSize: '2.5rem', // 40px
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.015em',
    },
    h3: {
      fontSize: '2rem', // 32px
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontSize: '1.75rem', // 28px
      fontWeight: 500,
      lineHeight: 1.5,
      fontFamily: "Söhne Test",
    },
    h5: {
      fontSize: '1.5rem', // 24px
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: "Söhne Test",
      color: "#000000",
    },
    h6: {
      fontSize: '1.25rem', // 20px
      fontWeight: 400,
      lineHeight: 1.2,
      fontFamily: "Söhne Test",
      color: "#4E4E4E",
    },
    subtitle1: {
      fontSize: '1.5rem', // 16px
      fontWeight: 400,
      lineHeight: 1.75,
      fontFamily: "Söhne Test",
      color: "#4E4E4E",
    },
    subtitle2: {
      fontSize: '0.875rem', // 14px
      fontWeight: 500,
      lineHeight: 1.57,
      fontFamily: "Söhne Test",
      color: "#000000",
    },
    body1: {
      fontSize: '1rem', // 16px
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem', // 14px
      fontWeight: 400,
      lineHeight: 1.43,
      fontFamily: "Söhne Test",
      color: "#4E4E4E",
    },
    button: {
      fontSize: '0.975rem', // 14px
      fontWeight: 500,
    },
    caption: {
      fontSize: '0.75rem', // 12px
      fontWeight: 400,
      lineHeight: 1.66,
    },
    overline: {
      fontSize: '0.75rem', // 12px
      fontWeight: 400,
      lineHeight: 2.66,
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          textTransform: 'none',
          backgroundColor: "#000000",
          color: "#FFFFFF"
        },
        // contained: {
        //   backgroundColor: '#007BFF',
        //   color: '#FFFFFF',
        //   '&:hover': {
        //     backgroundColor: '#0056b3',
        //   },
        // },
        // outlined: {
        //   borderColor: '#007BFF',
        //   color: '#007BFF',
        //   '&:hover': {
        //     backgroundColor: 'rgba(0, 123, 255, 0.1)',
        //   },
        // },
        // text: {
        //   color: '#007BFF',
        //   '&:hover': {
        //     backgroundColor: 'rgba(0, 123, 255, 0.1)',
        //   },
        // },
      },
    },
  },
  // palette: {
  //   primary: {
  //     main: '#007BFF', // Primary color
  //     light: '#66B2FF', // Light variant
  //     dark: '#0056b3', // Dark variant
  //     contrastText: '#FFFFFF', // Text color for primary buttons
  //   },
  //   secondary: {
  //     main: '#FF5722', // Secondary color
  //     light: '#FF8A50', // Light variant
  //     dark: '#D84315', // Dark variant
  //     contrastText: '#FFFFFF', // Text color for secondary buttons
  //   },
  //   // Optional: Add custom colors
  //   custom: {
  //     lightGray: '#F5F5F5',
  //     darkGray: '#424242',
  //   },
  // },
});

theme = responsiveFontSizes(theme, {
    factor: 2, 
    breakpoints: ['sm', 'md', 'lg'],
});

export default theme;
