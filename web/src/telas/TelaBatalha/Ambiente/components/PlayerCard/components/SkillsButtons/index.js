import React from 'react';
import { connect } from 'react-redux';

import { Container, Buttons, EnergyBar, Skill } from "./styles";

const SkillsButtons = ({player}) => {
    
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

export default connect( state => ({ player: state.activeCharacter }))(SkillsButtons);