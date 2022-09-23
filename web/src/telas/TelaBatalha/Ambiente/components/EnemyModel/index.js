import React from 'react';
import { Container } from './styles';

import { Modelo } from './styles'
import { useCharacter } from 'hooks/useCharacter';

const EnemyModel = () => {

    const { selectedCharacter } = useCharacter();
   
    return (
        <Container>
            <Modelo img={selectedCharacter.modelo} />
        </Container>
    )
}

export default EnemyModel;
