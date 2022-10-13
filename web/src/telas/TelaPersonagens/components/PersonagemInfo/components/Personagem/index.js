import React, { useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Info, Portrait, Atributos, Detalhes, Divisor } from './styles.js';
import PersonagensContext from 'telas/TelaPersonagens/context/PersonagensContext.js';
import { useCharacter } from 'hooks/useCharacter.js';

const Personagem = () => {
    const { setSelectedCharacter } = useCharacter();

    const history = useHistory();
    const { personagemSelecionado } = useContext(PersonagensContext);

    const chooseChar = useCallback( () => {
        setSelectedCharacter(personagemSelecionado);
        history.push('/principal');
    }, [personagemSelecionado, history]);

    return (
        <Info>
            { personagemSelecionado.atributes && 
            <>
                <h1>Prefixo - {personagemSelecionado.name} - Sufixo</h1>
                <Portrait ></Portrait>
                <Divisor>
                    <h2>Detalhes</h2>
                    <Detalhes>
                        <div>level {personagemSelecionado.level}</div>
                        <div>{personagemSelecionado.class_id}</div>
                        { personagemSelecionado.guild_id && <div>Guild Name: {personagemSelecionado.guild_name}</div>}
                    </Detalhes>
                </Divisor>
                <Divisor>
                    <h2>Atributos</h2>
                    <Atributos>
                        <div className="STR" >STR : {personagemSelecionado.atributes.STR}</div>
                        <div className="DEX" >DEX : {personagemSelecionado.atributes.DEX}</div>
                        <div className="CON" >CON : {personagemSelecionado.atributes.CON}</div>
                        <div className="INT" >INT : {personagemSelecionado.atributes.INT}</div>
                        <div className="TOU" >TOU : {personagemSelecionado.atributes.TOU}</div>
                        <div className="AGI" >AGI : {personagemSelecionado.atributes.AGI}</div>
                    </Atributos>
                </Divisor> 
                <button onClick={chooseChar}> Entrar </button>
            </>
            }
        </Info>
    )
}

export default Personagem;
