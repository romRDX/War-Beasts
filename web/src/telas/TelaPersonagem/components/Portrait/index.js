import { useCharacter } from 'hooks/useCharacter';
import React from 'react';

import { Box } from './styles';

const Portrait = () => {

    const { selectedCharacter } = useCharacter();

    return (
        <Box>
            <img src={selectedCharacter.portrait} />
        </Box>
    );
};

export default Portrait;