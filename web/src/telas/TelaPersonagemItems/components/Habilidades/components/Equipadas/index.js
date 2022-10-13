import React from 'react';

import { Container } from './styles.js';
import ListaIcones from 'globalComponents/ListaIcones';

import { useCharacter } from 'hooks/useCharacter';

const Itens = () => {

    const { selectedCharacter } = useCharacter();

    return (
        <Container>
            <ListaIcones dados={selectedCharacter?.itens} />
        </Container>
    ) 
}

export default Itens;