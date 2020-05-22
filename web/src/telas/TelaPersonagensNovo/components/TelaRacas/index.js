import React, { useState, useEffect, useCallback } from 'react';
import store from 'store';
import { useHistory } from 'react-router-dom';

import RacasContext from './context/RacasContext';

import Detalhes from './components/Detalhes';
import Opcoes from './components/Opcoes';

import personagemFactory from './functions/personagemFactory';

import { Conteiner } from './styles.js';

const TelaRacas = ( props ) => {
    const history = useHistory();

    const [raca, setRaca ] = useState();

    useEffect( ()=> {

        return () => {

        };

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

            store.dispatch(dispatcher);

            history.push('/personagens');
        }
    }, [raca, store, history]);

    return (
        <Conteiner>
            <RacasContext.Provider value={{ raca, criarPersonagem, selecionarRaca }}>
                <Detalhes />
                <Opcoes />
            </RacasContext.Provider>
        </Conteiner>
    )
};

export default TelaRacas;
