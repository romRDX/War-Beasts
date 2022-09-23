import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Info from './components/Info';

import { Botao } from 'globalComponents/Botoes/styles';
import { Container, Portrait } from './styles';
import TracosPersonagemContext from 'telas/TelaPersonagemTracos/context/TracosPersonagemContext';


const Detalhes = (props) => {
    const history = useHistory();
    const { TracoSelecionado } = useContext(TracosPersonagemContext);

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
            <Link className="voltar" to="/personagem">Voltar</Link>
            <Portrait img={ {} } />
            <Info>
                
            </Info>
            <Botao theme={{size:[60,6], margin: '0 auto 15px'}} onClick={() => {} }> Alterar </Botao>
        </Container>
    )
    
};

export default Detalhes;