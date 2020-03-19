/* 
  BrowserRouter => Fazer navegação ente pages colocando "/" Ex: localhost:3000/Contato 
  Switch => Fazer o gerenciamento de 1 rota por vez
  Route => Routa
*/
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
}