import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
//udah import App dan di App udah ada index.css
import App from './App';
import reportWebVitals from './reportWebVitals';
import './components/SpotifyAuth/styles.css';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

