import React, { useContext } from 'react';

import { Container } from './styles.js';
import ListaIcones from 'globalComponents/ListaIcones';

import { useCharacter } from 'hooks/useCharacter';
import ItemsPersonagemContext from 'telas/TelaPersonagemHabilidades/context/characterSkillsContext.js';

const Itens = () => {

    const { selectedCharacter } = useCharacter();

    const { selectedCharacterSlot, setSelectedCharacterSlot, setSelectedSkill } = useContext(ItemsPersonagemContext);

    return (
        <Container>
            <ListaIcones dados={selectedCharacter?.skills} slots selected={selectedCharacterSlot} setSelectedItemFromList={setSelectedCharacterSlot} setSelected={setSelectedSkill} />
        </Container>
    ) 
}

export default Itens;