import { useCharacter } from 'hooks/useCharacter';
import React from 'react';

import { Box } from './styles';

const Detalhes = () => {

    const { selectedCharacter } = useCharacter();
    
    return (
        <Box>
            <div>Nome: {selectedCharacter?.name}</div>
            <div>Power: </div>
            <div>EXP: </div>
            <div>level: {selectedCharacter?.level}</div>
            <div>class: {selectedCharacter?.class_id} race: </div>
            <div>Guild Name: </div>
        </Box>                        
    )
};

export default Detalhes;