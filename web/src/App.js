import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TelaLogin from './telas/TelaLogin';
import TelaPersonagens from './telas/TelaPersonagens';
import TelaMenu from './telas/TelaMenu';
import TelaArena from './telas/TelaArena';
import TelaPersonagem from './telas/TelaPersonagem';
import TelaMapa from './telas/TelaMapa';
import NotFound from './telas/NotFound';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={TelaLogin} />
          <Route path="/personagens" component={TelaPersonagens} />
          <Route path="/main" component={TelaMenu} />
          <Route path="/personagem" component={TelaPersonagem} />
          <Route path="/mapa" component={TelaMapa} />
          <Route path="/arena" component={TelaArena} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

