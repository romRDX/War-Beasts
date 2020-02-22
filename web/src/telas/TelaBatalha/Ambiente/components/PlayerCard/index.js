import React, { Component } from 'react';

import { connect } from 'react-redux';

import SkillsButtons from './components/SkillsButtons';
import Detalhes from './components/Detalhes';

import { Conteiner } from './styles';

class PlayerCard extends Component {
    render() {
        return (
            <Conteiner>
                <Detalhes player={this.props.player} />
                <SkillsButtons skills={this.props.player} />
            </Conteiner>
        )
    }
}

export default connect( state => ({ player: state.activeCharacter }))(PlayerCard);