import { useCharacter } from 'hooks/useCharacter';
import React from 'react';

import { Container, Buttons, EnergyBar, Skill } from "./styles";

const SkillsButtons = ({player}) => {

    const { selectedCharacter } = useCharacter();
    
    return (
        <Container>
            <Buttons>
                {
                    player.habilidades.map( hab => (
                        <Skill className='skill' icone={hab.icone} ><h2>{hab.custo}</h2></Skill>
                    ))
                }
            </Buttons>
            <EnergyBar>
                    <div className='skill'></div>
                    <div className="bar" ></div>
            </EnergyBar>
        </Container>
    )
}

export default SkillsButtons;