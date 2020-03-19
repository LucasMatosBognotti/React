/* 
  BrowserRouter => Fazer navegação ente pages colocando "/" Ex: localhost:3000/Contato 
  Switch => Fazer o gerenciamento de 1 rota por vez
  Route => Routa
*/
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BayMax from './pages/BayMax';
import Mushroom from './pages/Mushroom';
import Finn from './pages/Finn';
import BB8 from './pages/BB-8';

export default function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={BayMax} />
      <Route path="/mush" component={Mushroom} />
      <Route path="/finn" component={Finn}/>
      <Route path="/bb8" component={BB8} />
    </Switch>
  );
}