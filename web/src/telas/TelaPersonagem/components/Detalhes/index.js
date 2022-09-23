import { useCharacter } from 'hooks/useCharacter';
import React from 'react';

import { Box } from './styles';

const Detalhes = () => {

    const { selectedCharacter } = useCharacter();
    
    return (
        <Box>
            <div>Nome: {selectedCharacter?.nome}</div>
            <div>Change Titles</div>
            <div>Power: </div>
            <div>EXP: </div>
            <div>level: {selectedCharacter?.nivel}</div>
            <div>{selectedCharacter?.classe}</div>
            <div>Guild Name: </div>
        </Box>                        
    )
};

export default Detalhes;