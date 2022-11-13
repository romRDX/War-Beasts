import React, { useContext, useMemo } from 'react';
import { Container } from './styles';

import { Modelo, Life } from './styles'
import { useCharacter } from 'hooks/useCharacter';
import BattleContext from '../../context/BattleContext';

const EnemyModel = () => {

    const { battleState } = useContext(BattleContext);

    const percentageHP = useMemo(() => {
        const monsterMaxHP = battleState.monsterData?.HP;
        const monsterCurrentHP = battleState.monsterInitialData?.HP;

        if(monsterMaxHP && monsterCurrentHP){
            const finalHP = monsterMaxHP*100/monsterCurrentHP;

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
            <h2>{battleState.monsterData?.name}</h2>
            <Modelo img={battleState.monsterData?.portrait} />
            <Life percentageHP={percentageHP}>
                <div />
            </Life>
        </Container>
    )
}

export default EnemyModel;
