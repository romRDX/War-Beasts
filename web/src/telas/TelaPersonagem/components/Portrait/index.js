import { useCharacter } from 'hooks/useCharacter';
import React from 'react';

import { Box } from './styles';

const Portrait = () => {

    const { selectedCharacter } = useCharacter();

    console.log("FASDASD: ", selectedCharacter);

    return (
        <Box>
            <img src={selectedCharacter.portrait} />
        </Box>
    );
};

export default Portrait;