import React, { useState, useCallback } from 'react';

import RaceContext from './context/raceContext';

import TelaClasses from './components/TelaRacas';
import TelaRacas from './components/TelaClasses';
import { Container } from "./styles.js";
import { BotaoVoltar } from 'globalComponents/Botoes/styles';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { apiWB } from 'services/axios';


const TelaPersonagensNovo = () => {

    const { authData } = useAuth();
    const history = useHistory();

    const [ races, setRaces ] = useState('');
    const [ selectedRace , setSelectedRace] = useState('');
    const [ selectedClass , setSelectedClass] = useState('');

    const selectRace = useCallback( (race) => {
        setSelectedRace(race);
    },[]);

    const confirmRace = useCallback( (race) => {
        setRaces(race);
    },[]);

    const createCharacter = (characterName) => {

        apiWB.post("/characters/new", {
            params: JSON.stringify({
                raceId: selectedRace.id,
                classId: selectedClass.id,
                name: characterName,
                playerId: authData.id,
            })
        }).then((resp) => {
            if(resp.data.success) history.push("/personagens");
        });
    }
    
    return (
        <Container>
            <BotaoVoltar><Link  to="/personagens">Voltar</Link></BotaoVoltar>
            <RaceContext.Provider value={{ 
                    races,
                    confirmRace,
                    selectedRace,
                    selectRace,
                    selectedClass,
                    setSelectedClass,
                    createCharacter
                }}
            >
            {
                races ? 
                    <TelaClasses /> :
                    <TelaRacas />
            }
            </RaceContext.Provider>
        </Container>
    )

}

export default TelaPersonagensNovo;