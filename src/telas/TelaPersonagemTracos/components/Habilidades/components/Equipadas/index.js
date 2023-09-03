import React, { useContext } from 'react';

import { Container } from './styles.js';
import ListaIcones from 'globalComponents/ListaIcones';

import { useCharacter } from 'hooks/useCharacter';
import CharacterTraitsContext from 'telas/TelaPersonagemTracos/context/characterTraitsContext.js';

const Traits = () => {

    const { selectedCharacter } = useCharacter();

    const { selectedCharacterSlot, setSelectedCharacterSlot, setSelectedTrait } = useContext(CharacterTraitsContext);

    return (
        <Container>
            <ListaIcones dados={selectedCharacter?.traits} slots selected={selectedCharacterSlot} setSelectedItemFromList={setSelectedCharacterSlot} setSelected={setSelectedTrait} />
        </Container>
    ) 
}

export default Traits;