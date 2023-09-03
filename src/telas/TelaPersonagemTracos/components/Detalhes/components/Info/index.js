import React, { useContext } from 'react';

import { Container } from './styles';
import CharacterTraitsContext from 'telas/TelaPersonagemTracos/context/characterTraitsContext';

const Info = () => {
    const { selectedTrait } = useContext(CharacterTraitsContext);
    return (
        <Container>
            { selectedTrait && 
                <>
                    <h1>{ selectedTrait.name }</h1>
                    {/* <p>STR: {selectedTrait.STR}</p>
                    <p>DEX: {selectedTrait.DEX}</p>
                    <p>CON: {selectedTrait.CON}</p>
                    <p>AGI: {selectedTrait.AGI}</p>
                    <p>INT: {selectedTrait.INT}</p>
                    <p>TOU: {selectedTrait.TOU}</p> */}
                    <p>Description:</p>
                    <p>{selectedTrait.description}</p>
                </>
            }            
        </Container>
    )
    
};

export default Info;