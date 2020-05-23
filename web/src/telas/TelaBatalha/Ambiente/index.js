import React from 'react';

import { Container } from './styles';

import PlayerCard from './components/PlayerCard';
import PlayerModel from './components/PlayerModel';
import EnemyModel from './components/EnemyModel';
import BottomMenu from './components/BottomMenu';

const Ambiente = () => {
    return (
        <Container>
            <PlayerCard />
            <PlayerModel />
            <EnemyModel />
            <BottomMenu />
        </Container>
    )
}

export default Ambiente;