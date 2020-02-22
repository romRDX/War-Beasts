import React, { Component } from 'react';

import { Conteiner } from './styles';
import { Portrait, Info, Life, Secundarios } from './styles';

export default class index extends Component {
    render() {
        return (
            <Conteiner>
                <div className='test1'>
                    <Portrait>
                    </Portrait>
                    <Info>
                        <div className="nome"> {this.props.player.nome} </div>
                        <Secundarios>
                            <h2 className="STR" > Dano : {this.props.player.atributos.STR} </h2>
                            <h2 className="DEXINT" > Precisão : {this.props.player.atributos.INT} </h2>
                            <h2 className="DEX" > C. Critico : {this.props.player.atributos.TOU} </h2>
                            <h2 className="STR" > Dano Critico : {this.props.player.atributos.DEX} </h2>
                            <h2 className="STRINT" > C. Atordoar : {this.props.player.atributos.CON} </h2>
                            <h2 className="DEXAGI" > Velocidade : {this.props.player.atributos.AGI} </h2>
                            <h2 className="CONINT" > Vigor : {this.props.player.atributos.AGI} </h2>
                            <h2 className="AGI" > Evasão : {this.props.player.atributos.AGI} </h2>
                            <h2 className="CON" > Pontos de Vida : {this.props.player.atributos.AGI} </h2>
                            <h2 className="TOU" > Defesa : {this.props.player.atributos.AGI} </h2>
                            <h2 className="AGITOU" > Resist. Critico : {this.props.player.atributos.AGI} </h2>
                            <h2 className="TOUCON" > Resist. Atordoar : {this.props.player.atributos.AGI} </h2>
                        </Secundarios>
                    </Info>
                    <Life>
                    </Life>
                </div>
            </Conteiner>
        )
    }
}
