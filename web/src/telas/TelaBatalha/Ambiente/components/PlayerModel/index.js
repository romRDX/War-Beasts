import React from 'react'

import { Conteiner } from './styles'

import { connect } from 'react-redux';

import { Modelo } from './styles';

const index = (props) => {
   
    return (
        <Conteiner>
            <Modelo img={props.player.modelo} />
        </Conteiner>
    )
}

export default connect( state => ({ player: state.activeCharacter }))(index);
