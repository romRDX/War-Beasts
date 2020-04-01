import React from 'react';
import { connect } from 'react-redux';

import items from 'Data/Items';

import { Conteiner } from './styles';
import ListaIcones from './components/ListaIcones';
import history from 'services/history';

const Caracteristicas = (props) => {

    const goToHab = () => {
        history.push('/personagem/habilidades');
    }

    const goToItem = () => {
        history.push('/personagem/items');
    }

    const goToTrait = () => {
        history.push('/personagem/tracos');
    }

    return (
        <Conteiner>
            <ListaIcones page={ goToItem } dados={ items }/>
            <ListaIcones page={ goToHab } dados={ props.character.habilidades}/>
            <ListaIcones page={ goToTrait } dados={ props.character.tracos}/>
        </Conteiner>
    )
    
};

export default connect( state => ({ character: state.activeCharacter }))(Caracteristicas);