import React, { useContext } from 'react';
import { connect } from 'react-redux';

import { Container } from './styles.js';
import ListaIcones from 'globalComponents/ListaIcones';

import HabPersonagemContext from 'telas/TelaPersonagemHabilidades/context/HabPersonagemContext';

const Habilidades = ({habilidades}) => {
    const { setHabSelecionada } = useContext(HabPersonagemContext);

    return (
        <Container>
            <ListaIcones dados={habilidades} selecionar={setHabSelecionada} />
        </Container>
    ) 
}

export default connect( state => ({ habilidades: state.activeCharacter.habilidades }))(Habilidades);