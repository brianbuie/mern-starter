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
  darkGray: '#415a6a',
  orange: '#eb6f5a',
  blue: '#51b7e0',
  gold: '#caa93e'
};

// prettier-ignore
const ThemeProvider = ({ children }) => (
  <Provider theme={theme}>
    {children}
  </Provider>
);

export default ThemeProvider;
