import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import TelaLogin from './telas/TelaLogin';
import TelaPersonagens from './telas/TelaPersonagens';
import TelaPersonagensNovo from './telas/TelaPersonagensNovo';
import TelaMenu from './telas/TelaMenu';
import TelaArena from './telas/TelaArena';
import TelaPersonagem from './telas/TelaPersonagem';
import TelaPersonagemHabilidades from './telas/TelaPersonagemHabilidades';
import TelaPersonagemTracos from './telas/TelaPersonagemTracos';
import TelaPersonagemItems from './telas/TelaPersonagemItems';
import TelaMapa from './telas/TelaMapa';
import TelaMapas from './telas/TelaMapas';
import TelaBatalha_A from './telas/TelaBatalha/Ambiente';
import NotFound from './telas/NotFound';

import history from './services/history';

import { Provider } from 'react-redux';
import store from './store';

import './global.css';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={store}>
          <div id="RDX">
            <Switch>
              <Route path="/login" component={TelaLogin} exact />
              <Route path="/personagens" component={TelaPersonagens}  exact />
                <Route path="/personagens/novo" component={TelaPersonagensNovo} exact />
              <Route path="/principal" component={TelaMenu} exact />
              <Route path="/personagem" component={TelaPersonagem} exact />
                <Route path="/personagem/habilidades" component={TelaPersonagemHabilidades} exact />
                <Route path="/personagem/items" component={TelaPersonagemItems} exact />
                <Route path="/personagem/tracos" component={TelaPersonagemTracos} exact />
              <Route path="/mapa" component={TelaMapa} exact />
              <Route path="/mapas" component={TelaMapas} exact />
              <Route path="/batalha-A" component={TelaBatalha_A} exact />
              <Route path="/arena" component={TelaArena} exact />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Provider>
      </Router>
    )
  }
}

