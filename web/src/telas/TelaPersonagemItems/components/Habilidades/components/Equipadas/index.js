import React, { useContext } from 'react';

import { Container } from './styles.js';
import ListaIcones from 'globalComponents/ListaIcones';

import { useCharacter } from 'hooks/useCharacter';
import ItemsPersonagemContext from 'telas/TelaPersonagemItems/context/ItemsPersonagemContext.js';

const Itens = () => {

    const { selectedCharacter } = useCharacter();

    const { selectedCharacterSlot, setSelectedCharacterSlot, setItemSelecionado } = useContext(ItemsPersonagemContext);

    return (
        <Container>
            <ListaIcones dados={selectedCharacter?.itens} slots selected={selectedCharacterSlot} setSelectedItemFromList={setSelectedCharacterSlot} setSelected={setItemSelecionado} />
        </Container>
    ) 
}

export default Itens;