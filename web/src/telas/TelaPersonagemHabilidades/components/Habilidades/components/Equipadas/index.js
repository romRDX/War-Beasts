import React, { useContext } from 'react';
import { connect } from 'react-redux';

import { Conteiner } from './styles.js';
import ListaIcones from 'globalComponents/ListaIcones';

import HabPersonagemContext from 'telas/TelaPersonagemHabilidades/context/HabPersonagemContext';

const Habilidades = (props) => {
    const { setHabSelecionada } = useContext(HabPersonagemContext);

    return (
        <Conteiner>
            <ListaIcones dados={props.habilidades} selecionar={setHabSelecionada} />
        </Conteiner>
    ) 
}

export default connect( state => ({ habilidades: state.activeCharacter.habilidades }))(Habilidades);