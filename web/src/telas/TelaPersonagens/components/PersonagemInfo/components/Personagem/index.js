import React from 'react';
import { connect } from 'react-redux';
import store from 'store';
import history from 'services/history';

import { Info, Portrait, Atributos, Detalhes, Divisor } from './styles.js';

const Personagem = (props) => {
    const chooseChar = () => {
        const dispatcher = {
            type: 'SELECT_CHARACTER',
            char: props.char
        }
        store.dispatch(dispatcher);
        history.push('/principal');
    };

    return (
        <Info>
            <h1>Prefixo - {props.char.nome} - Sufixo</h1>
            <Portrait ></Portrait>
            <Divisor>
                <h2>Detalhes</h2>
                <Detalhes>
                    <div>level {props.char.nivel}</div>
                    <div>{props.char.classe}</div>
                    <div>Guild Name</div>
                </Detalhes>
            </Divisor>
            <Divisor>
                <h2>Atributos</h2>
                <Atributos>
                    <div className="STR" >STR : {props.char.atributos.STR}</div>
                    <div className="DEX" >DEX : {props.char.atributos.DEX}</div>
                    <div className="CON" >CON : {props.char.atributos.CON}</div>
                    <div className="INT" >INT : {props.char.atributos.INT}</div>
                    <div className="TOU" >TOU : {props.char.atributos.TOU}</div>
                    <div className="AGI" >AGI : {props.char.atributos.AGI}</div>
                </Atributos>
            </Divisor> 
            <button onClick={chooseChar}> Entrar </button>
        </Info>
    )

}

export default connect( state => ({ characters: state.characters }))(Personagem);
