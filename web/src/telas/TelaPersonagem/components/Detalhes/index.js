import React from 'react';
import { connect } from 'react-redux';

import { Box } from './styles';

const Detalhes = (props) => (
    <Box>
        <div>Nome: {props.character.nome}</div>
        <div>Change Titles</div>
        <div>Power: </div>
        <div>EXP: </div>
        <div>level: {props.character.nivel}</div>
        <div>{props.character.classe}</div>
        <div>Guild Name: </div>
    </Box>                        
);

export default connect( state => ({ character: state.activeCharacter }))(Detalhes);