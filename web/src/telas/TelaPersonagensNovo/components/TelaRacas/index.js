import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import RacasContext from './context/RacasContext';

import Detalhes from './components/Detalhes';
import Opcoes from './components/Opcoes';

import personagemFactory from './functions/personagemFactory';

import { Container } from './styles.js';

const TelaRacas = () => {
    const history = useHistory();
    const [raca, setRaca ] = useState();

    useEffect( ()=> {

    }, [raca]);

    const selecionarRaca = useCallback( (racax) => {
        setRaca(racax);
    },[]);

    const criarPersonagem = useCallback( () => {

        if (raca) {
            const nomePersonagem = document.getElementById('nomePersonagem').value;

            const novoPersonagem = personagemFactory(raca, 1, nomePersonagem);

            const dispatcher = {
                type: 'CREATE_CHARACTER',
                novoPersonagem: novoPersonagem
            }

            history.push('/personagens');
        }
    }, [raca, history]);

    return (
        <Container>
            <RacasContext.Provider value={{ raca, criarPersonagem, selecionarRaca }}>
                <Detalhes />
                <Opcoes />
            </RacasContext.Provider>
        </Container>
    )
};

export default TelaRacas;
