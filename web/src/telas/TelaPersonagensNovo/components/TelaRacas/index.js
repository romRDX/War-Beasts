import React, { useState, useEffect } from 'react';
import store from 'store';
import history from 'services/history';

import RacasContext from './context/RacasContext';

import Detalhes from './components/Detalhes';
import Opcoes from './components/Opcoes';

import personagemFactory from './functions/personagemFactory';

import { Conteiner } from './styles.js';
import RacaContext from './context/RacasContext';

const TelaRacas = ( props ) => {

    const [raca, setRaca ] = useState();

    const selecionarRaca = (racax) => {
        setRaca(racax);
    }

    const criarPersonagem = () => {

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
    }

    useEffect( ()=> {

        return () => {

        };

    }, [raca]);

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
