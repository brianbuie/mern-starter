import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';

injectGlobal`
  html {
    font-size: 16px;
    font-family: sans-serif;
  }

  body {
    min-height: 100vh;
    margin: 0;
    background-color: #eee;
  }
`;

const theme = {
  primary: '#eb6f5a'
};

// prettier-ignore
const ThemeComponent = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default ThemeComponent;
