import React from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';

import PlayerCard from './components/PlayerCard';
import PlayerTeam from './components/PlayerTeam';
import EnemyTeam from './components/EnemyTeam';
import BottomMenu from './components/BottomMenu';


const Ambiente = () => {

    return (
        <Container>
            <PlayerCard />
            <PlayerTeam />
            <EnemyTeam />
            <BottomMenu />
        </Container>
    )
}

export default connect( state => ({ stage: state.activeStage }))(Ambiente);