import React, { useContext, useMemo } from 'react';
import { Container } from './styles';

import { Modelo, Life } from './styles'
import { useCharacter } from 'hooks/useCharacter';
import BattleContext from '../../context/BattleContext';

const EnemyModel = ({ player }) => {

    const { battleState } = useContext(BattleContext);

    const hpData = useMemo(() => {
        const monsterCurrentHP = player?.characterInitialData?.HP;
        const monsterMaxHP = player?.characterData?.HP;

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

    }, [player]);

    
   
    return (
        <Container>
            <h2>{player?.characterInitialData?.name}</h2>
            <Modelo img={player?.characterInitialData?.portrait} />
            <Life percentageHP={hpData.percentageHP}>
                <div />
                <p>{Math.round(hpData.currentHP)}/{hpData.maxHP}</p>
            </Life>
        </Container>
    )
}

export default EnemyModel;
