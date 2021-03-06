import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './Global.styled.jsx';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter basename="/find-imgs-router-hooks/">
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
