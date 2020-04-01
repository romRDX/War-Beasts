import React from 'react';
import { connect } from 'react-redux';

import { Conteiner, Atributo, Principais, Secundarios } from './styles';

const Atributos = (props) => (
    <Conteiner>
        <Principais>
            <Atributo className="STR" > STR : {props.character.atributos.STR} </Atributo>
            <Atributo className="DEX" > DEX : {props.character.atributos.DEX} </Atributo>
            <Atributo className="CON" > CON : {props.character.atributos.CON} </Atributo>
            <Atributo className="INT" > INT : {props.character.atributos.INT} </Atributo>
            <Atributo className="TOU" > TOU : {props.character.atributos.TOU} </Atributo>
            <Atributo className="AGI" > AGI : {props.character.atributos.AGI} </Atributo>
        </Principais>        
        <Secundarios>
            <Atributo className="STR" > Dano : {props.character.atributos.STR} </Atributo>
            <Atributo className="DEXINT" > Precisão : {props.character.atributos.INT} </Atributo>
            <Atributo className="DEX" > Chance de Critico : {props.character.atributos.TOU} </Atributo>
            <Atributo className="STR" > Dano Critico : {props.character.atributos.DEX} </Atributo>
            <Atributo className="STRINT" > Chance de Atordoar : {props.character.atributos.CON} </Atributo>
            <Atributo className="DEXAGI" > Velocidade : {props.character.atributos.AGI} </Atributo>
            <Atributo className="CONINT" > Vigor : {props.character.atributos.AGI} </Atributo>
            <Atributo className="AGI" > Evasão : {props.character.atributos.AGI} </Atributo>
            <Atributo className="CON" > Pontos de Vida : {props.character.atributos.AGI} </Atributo>
            <Atributo className="TOU" > Defesa : {props.character.atributos.AGI} </Atributo>
            <Atributo className="AGITOU" > Resistencia a Critico : {props.character.atributos.AGI} </Atributo>
            <Atributo className="TOUCON" > Resistencia a Atordoar : {props.character.atributos.AGI} </Atributo>
        </Secundarios>
    </Conteiner>                        
);

export default connect( state => ({ character: state.activeCharacter }))(Atributos);
