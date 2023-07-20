import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import history from './services/history';
import "./services/axios";

import TelaInicial from './telas/TelaInicial';
import TelaRegistro from './telas/TelaRegistro';
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
import TelaBatalha_PVE from './telas/TelaBatalha/Ambiente';
import TelaBatalha_PVP from './telas/TelaBatalha/Jogador';
import NotFound from './telas/NotFound';

import './global.css';

import HookProvider from './hooks/hooksProvider';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
          <HookProvider>
            <div id="RDX">
              <Switch>
                <Route path="/" component={TelaInicial} exact />
                <Route path="/registro" component={TelaRegistro} exact />
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
                <Route path="/batalha-PVE" component={TelaBatalha_PVE} exact />
                <Route path="/batalha-PVP/:battleId" component={TelaBatalha_PVP} exact />
                <Route path="/arena" component={TelaArena} exact />
                <Route component={NotFound} />
              </Switch>
            </div>
          </HookProvider>
      </Router>
    )
  }
}

