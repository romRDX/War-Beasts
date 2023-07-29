import React from 'react';

import SkillsButtons from './components/SkillsButtons';
import Detalhes from './components/Detalhes';

import { Container } from './styles';

const PlayerCard = ({ player }) => {
    
    return (
        <Container>
            <Detalhes player={player} />
            <SkillsButtons player={player} />
        </Container>
    )
}

export default PlayerCard;