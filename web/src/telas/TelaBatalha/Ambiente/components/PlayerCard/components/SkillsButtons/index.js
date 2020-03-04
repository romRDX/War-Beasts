import React from 'react';

import { Conteiner, Buttons, EnergyBar } from "./styles";

 const SkillsButtons = (props) => {
    
    return (
        <Conteiner>
            <Buttons>
                <div className='skill'></div>
                <div className='skill'></div>
                <div className='skill'></div>
                <div className='skill'></div>
                <div className='skill'></div>
                <div className='skill'></div>
                <div className='skill'></div>
                <div className='skill'></div>
                <div className='skill'></div>
            </Buttons>
            <EnergyBar>
                    <div className='skill'></div>
                    <div className="bar" ></div>
            </EnergyBar>
        </Conteiner>
    )
}

export default SkillsButtons;