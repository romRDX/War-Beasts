import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './telas/Login';
import Personagens from './telas/Personagens';
import Menu from './telas/Menu';
import Arena from './telas/Arena';
import Personagem from './telas/Personagem';
import Mapa from './telas/Mapa';
import NotFound from './telas/NotFound';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/personagens" component={Personagens} />
          <Route path="/main" component={Menu} />
          <Route path="/personagem" component={Personagem} />
          <Route path="/mapa" component={Mapa} />
          <Route path="/arena" component={Arena} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

