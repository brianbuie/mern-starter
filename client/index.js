import React from 'react';
import ReactDOM from 'react-dom';
import App from '@app/App';
import StateProvider from '@app/State/StateProvider';
import ThemeProvider from '@app/Theme/ThemeProvider';

ReactDOM.render(
  <StateProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StateProvider>,
  document.getElementById('root')
);
