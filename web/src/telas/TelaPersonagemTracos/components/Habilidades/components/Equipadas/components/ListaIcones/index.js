import React, { useContext } from 'react';

import { Conteiner , Dado} from './styles';
import TracosPersonagemContext from 'telas/TelaPersonagemTracos/context/TracosPersonagemContext';

const ListaIcones = (props) => {
    const { setTracoSelecionado } = useContext(TracosPersonagemContext);

    return (
        <Conteiner>
        {
            props.dados.map( dado => (
                <Dado key={dado.nome} icone={ dado.icone } onClick={ () => setTracoSelecionado(dado) } />
            ))
        }
        </Conteiner>   
    )
                         
};

export default ListaIcones;