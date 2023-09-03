import React, { useContext, useMemo } from 'react';
import { Container } from './styles';

import { Modelo, Life } from './styles'
import { useCharacter } from 'hooks/useCharacter';
import BattleContext from '../../context/BattleContext';

const EnemyModel = ({ player }) => {

    const { battleState } = useContext(BattleContext);

    const hpData = useMemo(() => {
        console.log("PLAY: ", player);
        const monsterMaxHP = player?.characterInitialData?.HP;
        const monsterCurrentHP = player?.characterData?.HP;

        const finalData = {
            maxHP: monsterMaxHP,
            currentHP: monsterCurrentHP,
            percentageHP: 0
        }

        if(monsterMaxHP && monsterCurrentHP){
            const finalHPpercentage = monsterCurrentHP*100/monsterMaxHP;

            if(finalHPpercentage < 0){
                finalData.percentageHP = 0;
            } else {
                finalData.percentageHP = finalHPpercentage;
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
                <p>{Math.round(hpData.currentHP)}/{Math.round(hpData.maxHP)}</p>
            </Life>
        </Container>
    )
}

export default EnemyModel;
