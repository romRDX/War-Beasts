import React, { useMemo, useContext } from 'react';

import { Container, Life } from './styles'
import { Modelo } from './styles';
import { useCharacter } from 'hooks/useCharacter';
import BattleContext from '../../context/BattleContext';

const PlayerModel = () => {

    const { selectedCharacter } = useCharacter();
    const { battleState } = useContext(BattleContext);

    const percentageHP = useMemo(() => {
        const characterMaxHP = battleState.characterData?.HP;
        const characterCurrentHP = battleState.characterInitialData?.HP;

        if(characterMaxHP && characterCurrentHP){
            const finalHP = characterMaxHP*100/characterCurrentHP;

            if(finalHP < 0){
                return 0;
            } else {
                return finalHP    
            };
        } else {
            return 100;
        }
    }, [battleState]);
   
    return (
        <Container>
            <div />
            <Modelo img={selectedCharacter?.portrait} />
            <Life percentageHP={percentageHP}>
                <div />
            </Life>
        </Container>
    )
}

export default PlayerModel;
