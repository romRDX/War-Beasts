import React, {useCallback} from 'react';

import items from 'Data/Items';

import { Container, Container_2 } from './styles';
import ListaIcones from 'globalComponents/ListaIcones';
import { useHistory } from 'react-router-dom';
import { useCharacter } from 'hooks/useCharacter';

const Caracteristicas = () => {
    const history = useHistory();

    const { selectedCharacter } = useCharacter();

    const goToDetails = useCallback( (screen) => {
        history.push(`/personagem/${screen}`);
    },[history]);

    return (
        <Container>
            <Container_2 onClick={ () => goToDetails('items')} ><ListaIcones dados={ items }/></Container_2>
            <Container_2 onClick={() => goToDetails('habilidades')} ><ListaIcones dados={ selectedCharacter?.habilidades}/></Container_2>
            <Container_2 onClick={() => goToDetails('tracos')} ><ListaIcones dados={ selectedCharacter?.tracos}/></Container_2>
        </Container>
    )
    
};

export default Caracteristicas;