import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/Pages/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './config/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
