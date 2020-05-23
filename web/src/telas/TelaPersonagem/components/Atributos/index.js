import React from 'react';
import { connect } from 'react-redux';

import { Container, Atributo, Principais, Secundarios } from './styles';

const Atributos = ({character}) => {
    return (
        <Container>
            <Principais>
                <Atributo className="STR" > STR : {character.atributos.STR} </Atributo>
                <Atributo className="DEX" > DEX : {character.atributos.DEX} </Atributo>
                <Atributo className="CON" > CON : {character.atributos.CON} </Atributo>
                <Atributo className="INT" > INT : {character.atributos.INT} </Atributo>
                <Atributo className="TOU" > TOU : {character.atributos.TOU} </Atributo>
                <Atributo className="AGI" > AGI : {character.atributos.AGI} </Atributo>
            </Principais>        
            <Secundarios>
                <Atributo className="STR" > Dano : {character.atributos.STR} </Atributo>
                <Atributo className="DEXINT" > Precisão : {character.atributos.INT} </Atributo>
                <Atributo className="DEX" > Chance de Critico : {character.atributos.TOU} </Atributo>
                <Atributo className="STR" > Dano Critico : {character.atributos.DEX} </Atributo>
                <Atributo className="STRINT" > Chance de Atordoar : {character.atributos.CON} </Atributo>
                <Atributo className="DEXAGI" > Velocidade : {character.atributos.AGI} </Atributo>
                <Atributo className="CONINT" > Vigor : {character.atributos.AGI} </Atributo>
                <Atributo className="AGI" > Evasão : {character.atributos.AGI} </Atributo>
                <Atributo className="CON" > Pontos de Vida : {character.atributos.AGI} </Atributo>
                <Atributo className="TOU" > Defesa : {character.atributos.AGI} </Atributo>
                <Atributo className="AGITOU" > Resistencia a Critico : {character.atributos.AGI} </Atributo>
                <Atributo className="TOUCON" > Resistencia a Atordoar : {character.atributos.AGI} </Atributo>
            </Secundarios>
        </Container>
    )
};

export default connect( state => ({ character: state.activeCharacter }))(Atributos);
