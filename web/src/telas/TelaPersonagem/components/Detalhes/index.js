import { useCharacter } from 'hooks/useCharacter';
import React from 'react';

import { Box } from './styles';

const Detalhes = () => {

    const { selectedCharacter } = useCharacter();
    
    return (
        <Box>
            <div>Name: {selectedCharacter?.name}</div>
            <div>Power: --</div>
            <div>EXP: {selectedCharacter?.experience}</div>
            <div>level: {selectedCharacter?.level}</div>
            <div>race: {selectedCharacter?.race.name}</div>
            <div>class: {selectedCharacter?.race.class.name}</div>
            <div>Guild Name: --</div>
        </Box>                        
    )
};

export default Detalhes;