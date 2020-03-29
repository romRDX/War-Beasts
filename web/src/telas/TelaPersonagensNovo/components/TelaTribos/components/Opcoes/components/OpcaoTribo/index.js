import React, { useContext } from 'react';

import { Conteiner } from './styles';
import TriboContext from 'telas/TelaPersonagensNovo/context/TriboContext';

const OpcaoTribo = ( props ) => {
        const { selecionarTribo } = useContext(TriboContext);

        return (
                <Conteiner onClick={() => selecionarTribo(props.tribo) }>
                        <h2>{props.tribo.nome}</h2>
                </Conteiner>
        )
        
};

export default OpcaoTribo;
