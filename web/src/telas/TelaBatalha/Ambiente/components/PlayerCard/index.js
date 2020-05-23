import React from 'react';

import SkillsButtons from './components/SkillsButtons';
import Detalhes from './components/Detalhes';

import { Container } from './styles';

const PlayerCard = () => {
    
    return (
        <Container>
            <Detalhes />
            <SkillsButtons />
        </Container>
    )
}

export default PlayerCard;