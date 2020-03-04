import React from 'react';

import { Conteiner, Buttons, EnergyBar, Skill } from "./styles";

const SkillsButtons = (props) => {
    
    return (
        <Conteiner>
            <Buttons>
                {
                    props.skills.habilidades.ativas.map( hab => (
                        <Skill className='skill' icone={hab.icone} ><h2>{hab.custo}</h2></Skill>
                    ))
                }
            </Buttons>
            <EnergyBar>
                    <div className='skill'></div>
                    <div className="bar" ></div>
            </EnergyBar>
        </Conteiner>
    )
}

export default SkillsButtons;