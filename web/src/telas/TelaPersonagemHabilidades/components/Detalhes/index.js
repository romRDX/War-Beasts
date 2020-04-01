import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Info from './components/Info';

import { Conteiner, Portrait, Entrar } from './styles';
import HabPersonagemContext from 'telas/TelaPersonagemHabilidades/context/HabPersonagemContext';


const Detalhes = (props) => {
    const { habSelecionada } = useContext(HabPersonagemContext);

    const entrarEstagio = () => {

        // const dispatcher = {
        //     type: 'ENTER_STAGE',
        //     stage: props.info.nome,
        //     nome: props.info.nome
        // }

        // store.dispatch(dispatcher);
        // history.push('/batalha-A');
    }

    return (
        <Conteiner>
            <Link className="voltar" to="/personagem">Voltar</Link>
            <Portrait img={ habSelecionada.icone } />
            <Info>
                { habSelecionada.nome }
                { habSelecionada.custo}
            </Info>
            <Entrar onClick={() => {} }> Alterar </Entrar>
        </Conteiner>
    )
    
};

export default Detalhes;