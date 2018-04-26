import ReactDOM from 'react-dom';
import App from './App';
import State from './State';
import Theme from './Theme';

ReactDOM.render(
  <State>
    <Theme>
      <App />
    </Theme>
  </State>,
  document.getElementById('root')
);
