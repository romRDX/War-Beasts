import React, { useContext } from 'react';

import OpcaoRaca from './components/OpcaoRaca';

import { Conteiner } from './styles';
import TriboContext from 'telas/TelaPersonagensNovo/context/TriboContext';

const Opcoes = ( props ) => {
        const { tribo } = useContext(TriboContext)

        return (
                <Conteiner>
                {
                        tribo.racas.map( raca => (
                                <OpcaoRaca key={raca.nome} raca={raca } />
                        ))
                }
                </Conteiner>
        )
        
};

export default Opcoes;