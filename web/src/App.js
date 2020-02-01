import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import TelaLogin from './telas/TelaLogin';
import TelaPersonagens from './telas/TelaPersonagens';
import TelaMenu from './telas/TelaMenu';
import TelaArena from './telas/TelaArena';
import TelaPersonagem from './telas/TelaPersonagem';
import TelaMapa from './telas/TelaMapa';
import NotFound from './telas/NotFound';

import history from './services/history';

import './global.css';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div id="RDX">
          <Switch>
            <Route path="/login" component={TelaLogin} />
            <Route path="/personagens" component={TelaPersonagens} />
            <Route path="/main" component={TelaMenu} />
            <Route path="/personagem" component={TelaPersonagem} />
            <Route path="/mapa" component={TelaMapa} />
            <Route path="/arena" component={TelaArena} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

