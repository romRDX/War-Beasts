import React from 'react';

import { connect } from 'react-redux';

import SkillsButtons from './components/SkillsButtons';
import Detalhes from './components/Detalhes';

import { Conteiner } from './styles';

const PlayerCard = (props) => {
  
    return (
        <Conteiner>
            <Detalhes player={props.player} />
            <SkillsButtons skills={props.player} />
        </Conteiner>
    )
}

export default connect( state => ({ player: state.activeCharacter }))(PlayerCard);