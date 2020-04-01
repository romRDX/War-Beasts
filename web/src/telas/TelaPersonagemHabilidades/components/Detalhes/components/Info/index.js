import React, { useContext } from 'react';

import { Conteiner } from './styles';
import HabPersonagemContext from 'telas/TelaPersonagemHabilidades/context/HabPersonagemContext';


const Info = (props) => {
    const { habSelecionada } = useContext(HabPersonagemContext);

    return (
        <Conteiner>
            { habSelecionada.nome && <h1>{ habSelecionada.nome }</h1> }
            { habSelecionada.custo && <h2>Custo: { habSelecionada.custo}</h2> }
            <h3></h3>
                
                
            
        </Conteiner>
    )
    
};

export default Info;