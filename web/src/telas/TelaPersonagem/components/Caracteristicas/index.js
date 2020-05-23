import React, {useCallback} from 'react';
import { connect } from 'react-redux';

import items from 'Data/Items';

import { Container, Container_2 } from './styles';
import ListaIcones from 'globalComponents/ListaIcones';
import { useHistory } from 'react-router-dom';

const Caracteristicas = (props) => {
    const history = useHistory();

    const goToDetails = useCallback( (screen) => {
        history.push(`/personagem/${screen}`);
    },[history]);

    return (
        <Container>
            <Container_2 onClick={ () => goToDetails('items')} ><ListaIcones dados={ items }/></Container_2>
            <Container_2 onClick={() => goToDetails('habilidades')} ><ListaIcones dados={ props.character.habilidades}/></Container_2>
            <Container_2 onClick={() => goToDetails('tracos')} ><ListaIcones dados={ props.character.tracos}/></Container_2>
        </Container>
    )
    
};

export default connect( state => ({ character: state.activeCharacter }))(Caracteristicas);