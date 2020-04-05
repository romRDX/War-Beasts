import React from 'react';
import { connect } from 'react-redux';

import items from 'Data/Items';

import { Conteiner, Conteiner2 } from './styles';
import ListaIcones from 'globalComponents/ListaIcones';
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
            <Conteiner2 onClick={goToItem} ><ListaIcones page={ goToItem } dados={ items }/></Conteiner2>
            <Conteiner2 onClick={goToHab} ><ListaIcones page={ goToHab } dados={ props.character.habilidades}/></Conteiner2>
            <Conteiner2 onClick={goToTrait} ><ListaIcones page={ goToTrait } dados={ props.character.tracos}/></Conteiner2>
        </Conteiner>
    )
    
};

export default connect( state => ({ character: state.activeCharacter }))(Caracteristicas);