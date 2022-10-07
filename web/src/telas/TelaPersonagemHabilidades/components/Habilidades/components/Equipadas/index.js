import React, { useContext } from 'react';
import { connect } from 'react-redux';

import { Container } from './styles.js';
import ListaIcones from 'globalComponents/ListaIcones';

import HabPersonagemContext from 'telas/TelaPersonagemHabilidades/context/HabPersonagemContext';
import { useCharacter } from 'hooks/useCharacter.js';

const Habilidades = () => {
    const { setHabSelecionada } = useContext(HabPersonagemContext);
    const { selectedCharacter } = useCharacter();
    return (
        <Container>
            <ListaIcones dados={selectedCharacter?.habilidades} selecionar={setHabSelecionada} />
        </Container>
    ) 
}

export default Habilidades;