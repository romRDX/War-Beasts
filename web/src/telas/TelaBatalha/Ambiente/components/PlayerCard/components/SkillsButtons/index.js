import React, { Component } from 'react';

import { Conteiner, Buttons, EnergyBar } from "./styles";

export default class SkillsButtons extends Component {
    render() {
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
}


// <div>
                    // <div className='skill'></div>
                    // <div className='skill'></div>
                    // <div className='skill'></div>
                    // <div className='skill'></div>
                    // <div className='skill'></div>
                    // <div className='skill'></div>
                    // <div className='skill'></div>
                    // <div className='skill'></div>
                    // <div className='skill'></div>
//                 </div>
//                 <div className="energyBar" ></div>