import React, { useContext, useMemo } from 'react';
import { Container } from './styles';

import { Modelo, Life } from './styles'
import { useCharacter } from 'hooks/useCharacter';
import BattleContext from '../../context/BattleContext';

const EnemyModel = () => {

    const { battleState } = useContext(BattleContext);

    const hpData = useMemo(() => {
        const monsterCurrentHP = battleState.monsterData?.HP;
        const monsterMaxHP = battleState.monsterInitialData?.HP;

        const finalData = {
            maxHP: monsterMaxHP,
            currentHP: monsterCurrentHP,
            percentageHP: 0
        }

        if(monsterMaxHP && monsterCurrentHP){
            const finalHP = monsterCurrentHP*100/monsterMaxHP;

            if(finalHP < 0){
                finalData.percentageHP = 0;
            } else {
                finalData.percentageHP = finalHP    ;
            };
        } else {
            finalData.percentageHP = 100;
        }

        return finalData;

    }, [battleState]);

    
   
    return (
        <Container>
            <h2>{battleState.monsterData?.name}</h2>
            <Modelo img={battleState.monsterData?.portrait} />
            <Life percentageHP={hpData.percentageHP}>
                <div />
                <p>{Math.round(hpData.currentHP)}/{hpData.maxHP}</p>
            </Life>
        </Container>
    )
}

export default EnemyModel;
