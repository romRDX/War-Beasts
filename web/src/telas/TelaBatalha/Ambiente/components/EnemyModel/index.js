import React, { useContext } from 'react';
import { Container } from './styles';

import { Modelo, Life } from './styles'
import { useCharacter } from 'hooks/useCharacter';
import BattleContext from '../../context/BattleContext';

const EnemyModel = () => {

    const { monsterData } = useContext(BattleContext);

    console.log("MONSTER: ", monsterData);
   
    return (
        <Container>
            <h2>{monsterData? monsterData.name : "TESTE"}</h2>
            <Modelo img={monsterData?.portrait} />
            <Life />
        </Container>
    )
}

export default EnemyModel;
