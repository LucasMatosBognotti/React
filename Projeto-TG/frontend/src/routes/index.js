import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './redirect';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import List from '../pages/List';
import Item from '../pages/Item';
import Profile from '../pages/Profile';
import Chat from '../pages/Chatt';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
        
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/item" component={Item} isPrivate />
      <Route path="/list" component={List} isPrivate />
      <Route path="/chat" component={Chat} isPrivate />

    </Switch>
  );
}