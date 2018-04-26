import { injectGlobal, ThemeProvider as Provider } from 'styled-components';

injectGlobal`
  html {
    font-size: 16px;
    font-family: sans-serif;
    background-color: #eee;
  }

  body {
    margin: 0;
  }
`;

const theme = {
  primary: '#eb6f5a'
};

// prettier-ignore
const ThemeProvider = ({ children }) => (
  <Provider theme={theme}>
    {children}
  </Provider>
);

export default ThemeProvider;
