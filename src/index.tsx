import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import GlobalCSS from './global.css';

const root = ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <HashRouter>
      <GlobalCSS />
      <App />
    </HashRouter>
  </Provider>,
);
