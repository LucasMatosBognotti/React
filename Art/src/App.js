import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';
import Header from './components/header';


export default function App() {
  return (
    <>
      <Router history={history}>
        <GlobalStyle />
        <Header />
        <Routes />
      </Router>
    </>
  );
}

