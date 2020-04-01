import React, { useContext } from 'react';

import { Conteiner , Dado} from './styles';
import HabPersonagemContext from 'telas/TelaPersonagemHabilidades/context/HabPersonagemContext';

const ListaIcones = (props) => {
    const { setHabSelecionada } = useContext(HabPersonagemContext);

    return (
        <Conteiner>
        {
            props.dados.map( dado => (
                <Dado key={dado.nome} icone={ dado.icone } onClick={ () => setHabSelecionada(dado) } />
            ))
        }
        </Conteiner>   
    )
                         
};

export default ListaIcones;