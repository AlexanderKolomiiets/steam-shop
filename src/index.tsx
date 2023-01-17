import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import GlobalCSS from './global.css';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <GlobalCSS />
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
