import React, { useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Info, Portrait, Atributos, Detalhes, Divisor, DivisorBotao } from './styles.js';
import PersonagensContext from 'telas/TelaPersonagens/context/PersonagensContext.js';
import { useCharacter } from 'hooks/useCharacter.js';
import { apiWB } from 'services/axios.js';
import { useAuth } from 'hooks/useAuth.js';

const Personagem = ({ setMyCharacters }) => {
    const { setSelectedCharacter } = useCharacter();
    const { authData } = useAuth();

    const history = useHistory();
    const { personagemSelecionado, selecionarPersonagem } = useContext(PersonagensContext);

    const chooseChar = useCallback( () => {
        setSelectedCharacter(personagemSelecionado);
        history.push('/principal');
    }, [personagemSelecionado, history]);

    const deleteChar = () => {
        apiWB.post("/characters/delete", {
            params: JSON.stringify({
                characterId: personagemSelecionado.id,
                playerId: authData.id,
            })
        }).then((resp) => {
            if(resp.data.success){
                selecionarPersonagem(null);
                setMyCharacters(prevValue => {
                    return prevValue.filter((item) => item.id != personagemSelecionado.id);
                })
            }
        })
    };

    return (
        <Info>
            { personagemSelecionado && 
            <>
                <h1>Prefixo - {personagemSelecionado.name} - Sufixo</h1>
                <Portrait >
                    <img src={personagemSelecionado.portrait} />
                </Portrait>
                <Divisor>
                    <h2>Detalhes</h2>
                    <Detalhes>
                        <div>level {personagemSelecionado.level}</div>
                        <div>
                            <p>{personagemSelecionado.race.name}</p> -
                            <p>{personagemSelecionado.race.class.name}</p>
                        </div>
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
                <DivisorBotao>
                    <button onClick={chooseChar}> Entrar </button>
                    <button onClick={deleteChar}> Deletar </button>
                </DivisorBotao>
            </>
            }
        </Info>
    )
}

export default Personagem;
