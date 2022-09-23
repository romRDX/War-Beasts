import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Info from './components/Info';

import { Botao } from 'globalComponents/Botoes/styles';
import { Container, Portrait } from './styles';
import HabPersonagemContext from 'telas/TelaPersonagemHabilidades/context/HabPersonagemContext';


const Detalhes = (props) => {
    const history = useHistory();
    const { habSelecionada } = useContext(HabPersonagemContext);

    const entrarEstagio = () => {

        const dispatcher = {
            type: 'ENTER_STAGE',
            stage: props.info.nome,
            nome: props.info.nome
        }

        history.push('/batalha-A');
    }

    return (
        <Container>
            <Portrait img={ habSelecionada.icone } />
            <Info>
                { habSelecionada.nome }
                { habSelecionada.custo}
            </Info>
            <Botao theme={{size:[60,6], margin: '0 auto 15px'}} onClick={() => {} }> Alterar </Botao>
        </Container>
    )
    
};

export default Detalhes;