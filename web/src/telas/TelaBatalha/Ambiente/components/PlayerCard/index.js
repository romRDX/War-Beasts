import React from 'react';

import { connect } from 'react-redux';

import SkillsButtons from './components/SkillsButtons';
import Detalhes from './components/Detalhes';

import { Conteiner } from './styles';

const PlayerCard = (props) => {
    
    return (
        <Conteiner>
            <Detalhes />
            <SkillsButtons />
        </Conteiner>
    )
}

export default PlayerCard;