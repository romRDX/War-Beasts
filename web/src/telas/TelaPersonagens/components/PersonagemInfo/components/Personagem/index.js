import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from 'store';
import history from 'services/history';

import { Info, Portrait, Atributos, Detalhes, Divisor } from './styles.js';

class Personagem extends Component {

    chooseChar = () => {
        // console.log(this.props.characters); OK
        // console.log(this.props.char)

        const dispatcher = {
            type: 'SELECT_CHARACTER',
            char: this.props.char
        }

        store.dispatch(dispatcher);

        history.push('/principal');
    };

    render() {
        return (
            <Info>
                <h1>Prefixo - {this.props.char.nome} - Sufixo</h1>

                <Portrait ></Portrait>
                <Divisor>
                    <h2>Detalhes</h2>
                    <Detalhes>
                        <div>level {this.props.char.nivel}</div>
                        <div>{this.props.char.classe}</div>
                        <div>Guild Name</div>
                    </Detalhes>
                </Divisor>
                <Divisor>
                    <h2>Atributos</h2>
                    <Atributos>
                        <div className="STR" >STR : {this.props.char.atributos.STR}</div>
                        <div className="DEX" >DEX : {this.props.char.atributos.DEX}</div>
                        <div className="CON" >CON : {this.props.char.atributos.CON}</div>
                        <div className="INT" >INT : {this.props.char.atributos.INT}</div>
                        <div className="TOU" >TOU : {this.props.char.atributos.TOU}</div>
                        <div className="AGI" >AGI : {this.props.char.atributos.AGI}</div>
                    </Atributos>
                </Divisor> 
                <button onClick={this.chooseChar}> Entrar </button>
            </Info>
        )
    }
}

export default connect( state => ({ characters: state.characters }))(Personagem);
