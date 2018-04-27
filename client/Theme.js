import { injectGlobal, ThemeProvider as Provider } from 'styled-components';

export const theme = {
  colors: {
    bkg: '#eee',
    text: '#415a6a',
    primary: '#eb6f5a',
    secondary: '#51b7e0',
    accent: '#caa93e',
    success: '#57b742',
    error: '#dc3a3a'
  },
  sizes: {
    borderRadius: '0.3rem',
    fontSize: '16px'
  }
};

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${theme.sizes.fontSize};
    font-family: sans-serif;
    background-color: ${theme.colors.bkg};
    color: ${theme.colors.text};
  }

  body {
    margin: 0;
  }
`;

// prettier-ignore
const Theme = ({ children }) => (
  <Provider theme={theme}>
    {children}
  </Provider>
);

export default Theme;
