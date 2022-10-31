import { useCharacter } from 'hooks/useCharacter';
import React from 'react';

import { Container, Buttons, EnergyBar, Skill } from "./styles";

const SkillsButtons = ({player}) => {

    const { selectedCharacter } = useCharacter();
    
    return (
        <Container>
            <Buttons>
                {
                    selectedCharacter?.skills?.map( hab => (
                        <Skill key={hab.id} className='skill' >
                            <img src={hab.icon} />
                            <h2>{hab.energy}</h2>
                        </Skill>
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