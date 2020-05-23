import React from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';
import { Portrait, Info, Life, Secundarios } from './styles';

const Detalhes = ({player}) => { 
    return (
        <Container>
            <div className='playerInfo'>
                <Portrait img={ player.portrait }>
                </Portrait>
                <Info>
                    <h3> {player.nome} </h3>
                    <Secundarios>
                        <h2 className="STR" > Dano : {player.atributos.STR} </h2>
                        <h2 className="DEXINT" > Precisão : {player.atributos.INT} </h2>
                        <h2 className="DEX" > C. Critico : {player.atributos.TOU} </h2>
                        <h2 className="STR" > Dano Critico : {player.atributos.DEX} </h2>
                        <h2 className="STRINT" > C. Atordoar : {player.atributos.CON} </h2>
                        <h2 className="DEXAGI" > Velocidade : {player.atributos.AGI} </h2>
                        <h2 className="CONINT" > Vigor : {player.atributos.AGI} </h2>
                        <h2 className="AGI" > Evasão : {player.atributos.AGI} </h2>
                        <h2 className="CON" > Pontos de Vida : {player.atributos.AGI} </h2>
                        <h2 className="TOU" > Defesa : {player.atributos.AGI} </h2>
                        <h2 className="AGITOU" > Resist. Critico : {player.atributos.AGI} </h2>
                        <h2 className="TOUCON" > Resist. Atordoar : {player.atributos.AGI} </h2>
                    </Secundarios>
                </Info>
                <Life>
                </Life>
            </div>
        </Container>
    )
};

export default connect( state => ({ player: state.activeCharacter }))(Detalhes);
