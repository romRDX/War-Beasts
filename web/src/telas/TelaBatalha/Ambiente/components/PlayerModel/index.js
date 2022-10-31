import React from 'react'

import { Container } from './styles'
import { Modelo } from './styles';
import { useCharacter } from 'hooks/useCharacter';

const PlayerModel = () => {

    const { selectedCharacter } = useCharacter();
   
    return (
        <Container>
            <Modelo img={selectedCharacter?.portrait} />
        </Container>
    )
}

export default PlayerModel;
