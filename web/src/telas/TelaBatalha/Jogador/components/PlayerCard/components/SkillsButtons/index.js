import { useCharacter } from 'hooks/useCharacter';
import React, { useContext, useMemo } from 'react';
import BattleContext from 'telas/TelaBatalha/Ambiente/context/BattleContext';
import SkillItem from './components/SkillItem/SkillItem';

import { Container, Buttons, EnergyBar } from "./styles";

const SkillsButtons = () => {

    const { selectedCharacter } = useCharacter();
    const { battleState } = useContext(BattleContext);
    const { handleSendActionMessage } = useContext(BattleContext);

    const energyData = useMemo(() => {
        const monsterCurrentEnergy = battleState.characterData?.energy;
        const monsterMaxEnergy = battleState.characterInitialData?.energy;

        const finalData = {
            maxEnergy: monsterMaxEnergy,
            currentEnergy: monsterCurrentEnergy,
            percentageEnergy: 0
        }

        if(monsterMaxEnergy && monsterCurrentEnergy){
            const finalHP = monsterCurrentEnergy*100/monsterMaxEnergy;

            if(finalHP < 0){
                finalData.percentageEnergy = 0;
            } else {
                finalData.percentageEnergy = finalHP    
            };
        } else {
            finalData.percentageEnergy = 100;
        }

        return finalData;
    }, [battleState]);
    
    return (
        <Container>
            <Buttons>
                {
                    // selectedCharacter?.skills?.map( skill => (
                    //     <SkillItem key={skill?.id} className='skill' activateSkill={handleSendActionMessage} skill={skill} disabled={battleState.battleResults} />
                    // ))
                    selectedCharacter?.skills?.map( skill => {
                        return skill ? <SkillItem key={skill?.id} className='skill' activateSkill={handleSendActionMessage} skill={skill} disabled={battleState.battleResults} /> : null;
                    })
                }
            </Buttons>
            <EnergyBar percentageEnergy={energyData.percentageEnergy}>
                    <div className='skill'></div>
                    <div className="bar" >
                        <div />
                        <p>{energyData.currentEnergy}/{energyData.maxEnergy}</p>
                        {/* MECANICA SKILL <div>{battleState?.characterData?.energy || 0 }</div> */}
                    </div>
            </EnergyBar>
        </Container>
    )
}

export default SkillsButtons;