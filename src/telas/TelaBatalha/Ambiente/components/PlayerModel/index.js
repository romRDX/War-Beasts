import React, { useMemo, useContext } from 'react';

import { Container, Life } from './styles'
import { Modelo } from './styles';
import { useCharacter } from 'hooks/useCharacter';
import BattleContext from '../../context/BattleContext';

const PlayerModel = () => {

    const { selectedCharacter } = useCharacter();
    const { battleState } = useContext(BattleContext);

    const hpData = useMemo(() => {
        const characterCurrentHP = battleState.characterData?.HP;
        const characterMaxHP = battleState.characterInitialData?.HP;

        const finalData = {
            maxHP: characterMaxHP,
            currentHP: characterCurrentHP,
            percentageHP: 0
        }

        if(characterMaxHP && characterCurrentHP){
            const finalHP = characterCurrentHP*100/characterMaxHP;

            if(finalHP < 0){
                finalData.percentageHP = 0;
            } else {
                finalData.percentageHP = finalHP    
            };
        } else {
            finalData.percentageHP = 100;
        }

        return finalData;
    }, [battleState]);
   
    return (
        <Container>
            <div />
            <Modelo img={selectedCharacter?.portrait} />
            <Life percentageHP={hpData.percentageHP}>
                <div />
                <p>{Math.round(hpData.currentHP)}/{hpData.maxHP}</p>
            </Life>
        </Container>
    )
}

export default PlayerModel;
