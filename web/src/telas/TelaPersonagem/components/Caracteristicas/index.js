import React, {useCallback} from 'react';
import { connect } from 'react-redux';

import items from 'Data/Items';

import { Conteiner, Conteiner2 } from './styles';
import ListaIcones from 'globalComponents/ListaIcones';
import history from 'services/history';

const Caracteristicas = (props) => {

    const goToDetails = useCallback( (screen) => {
        history.push(`/personagem/${screen}`);
    },[history]);

    return (
        <Conteiner>
            <Conteiner2 onClick={ () => goToDetails('items')} ><ListaIcones dados={ items }/></Conteiner2>
            <Conteiner2 onClick={() => goToDetails('habilidades')} ><ListaIcones dados={ props.character.habilidades}/></Conteiner2>
            <Conteiner2 onClick={() => goToDetails('tracos')} ><ListaIcones dados={ props.character.tracos}/></Conteiner2>
        </Conteiner>
    )
    
};

export default connect( state => ({ character: state.activeCharacter }))(Caracteristicas);