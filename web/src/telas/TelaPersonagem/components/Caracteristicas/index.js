import React, {useCallback} from 'react';

import items from 'Data/Items';

import { Container, Container2 } from './styles';
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
            <Container2 onClick={ () => goToDetails('items')} ><ListaIcones showOnly dados={ selectedCharacter?.itens }/></Container2>
            <Container2 onClick={() => goToDetails('habilidades')} ><ListaIcones showOnly dados={ selectedCharacter?.skills}/></Container2>
            <Container2 onClick={() => goToDetails('tracos')} ><ListaIcones showOnly dados={ selectedCharacter?.traits}/></Container2>
        </Container>
    )
};

export default Caracteristicas;