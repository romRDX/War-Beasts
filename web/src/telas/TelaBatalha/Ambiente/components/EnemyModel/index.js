import React, { useContext, useMemo } from 'react';
import { Container } from './styles';

import { Modelo, Life } from './styles'
import { useCharacter } from 'hooks/useCharacter';
import BattleContext from '../../context/BattleContext';

const EnemyModel = () => {

    const { battleState } = useContext(BattleContext);

    console.log("MONSTER: ", battleState?.monsterData);
    console.log("MONSTER: ", battleState?.monsterData);

    const percentageHP = useMemo(() => {
        const x = battleState.monsterData?.HP;
        const y = battleState.monsterInitialData?.HP;
        const z =  battleState.monsterData?.HP*100/battleState.monsterInitialData?.HP;

        console.log("CURRENT HP: ", x);
        console.log("CURRENT HP: ", y);
        console.log("CURRENT HP: ", z);

        return battleState.monsterData?.HP*100/battleState.monsterInitialData?.HP;
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
