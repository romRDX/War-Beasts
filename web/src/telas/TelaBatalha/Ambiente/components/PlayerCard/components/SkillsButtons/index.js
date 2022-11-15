import { useCharacter } from 'hooks/useCharacter';
import React, { useContext, useMemo } from 'react';
import BattleContext from 'telas/TelaBatalha/Ambiente/context/BattleContext';
import SkillItem from './components/SkillItem/SkillItem';

import { Container, Buttons, EnergyBar } from "./styles";

const SkillsButtons = () => {

    const { selectedCharacter } = useCharacter();
    const { battleState } = useContext(BattleContext);
    const { handleSendActionMessage } = useContext(BattleContext);

    const percentageEnergy = useMemo(() => {
        const monsterMaxHP = battleState.characterData?.energy;
        const monsterCurrentHP = battleState.characterInitialData?.energy;

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
            <Buttons>
                {
                    selectedCharacter?.skills?.map( skill => (
                        <SkillItem key={skill.id} className='skill' activateSkill={handleSendActionMessage} skill={skill} />
                    ))
                }
            </Buttons>
            <EnergyBar percentageEnergy={percentageEnergy}>
                    <div className='skill'></div>
                    <div className="bar" >
                        <div />
                        {/* MECANICA SKILL <div>{battleState?.characterData?.energy || 0 }</div> */}
                    </div>
            </EnergyBar>
        </Container>
    )
}

export default SkillsButtons;