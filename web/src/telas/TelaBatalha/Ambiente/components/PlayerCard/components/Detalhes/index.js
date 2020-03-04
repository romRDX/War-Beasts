import React from 'react';

import { Conteiner } from './styles';
import { Portrait, Info, Life, Secundarios } from './styles';

const Detalhes = (props) => { 
    return (
        <Conteiner>
            <div className='test1'>
                <Portrait img={ props.player.portrait }>
                </Portrait>
                <Info>
                    <div className="nome"> {props.player.nome} </div>
                    <Secundarios>
                        <h2 className="STR" > Dano : {props.player.atributos.STR} </h2>
                        <h2 className="DEXINT" > Precisão : {props.player.atributos.INT} </h2>
                        <h2 className="DEX" > C. Critico : {props.player.atributos.TOU} </h2>
                        <h2 className="STR" > Dano Critico : {props.player.atributos.DEX} </h2>
                        <h2 className="STRINT" > C. Atordoar : {props.player.atributos.CON} </h2>
                        <h2 className="DEXAGI" > Velocidade : {props.player.atributos.AGI} </h2>
                        <h2 className="CONINT" > Vigor : {props.player.atributos.AGI} </h2>
                        <h2 className="AGI" > Evasão : {props.player.atributos.AGI} </h2>
                        <h2 className="CON" > Pontos de Vida : {props.player.atributos.AGI} </h2>
                        <h2 className="TOU" > Defesa : {props.player.atributos.AGI} </h2>
                        <h2 className="AGITOU" > Resist. Critico : {props.player.atributos.AGI} </h2>
                        <h2 className="TOUCON" > Resist. Atordoar : {props.player.atributos.AGI} </h2>
                    </Secundarios>
                </Info>
                <Life>
                </Life>
            </div>
        </Conteiner>
    )
}

export default Detalhes;
