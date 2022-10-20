import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Info from './components/Info';

import { Botao } from 'globalComponents/Botoes/styles';
import { Container, Portrait } from './styles';
import ItemsPersonagemContext from 'telas/TelaPersonagemItems/context/ItemsPersonagemContext';


const Detalhes = (props) => {
    const history = useHistory();
    const { itemSelecionado, handleEquipItem, handleUnequipItem } = useContext(ItemsPersonagemContext);

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
            <Portrait img={itemSelecionado?.icon} />
            <Info />
            <div>
                <Botao theme={{size:[60,30], margin: '0 auto 15px'}} onClick={() => { handleEquipItem () } }> Equipar </Botao>
                <Botao theme={{size:[60,30], margin: '0 auto 15px'}} onClick={() => { handleUnequipItem () } }> Desequipar </Botao>
            </div>
        </Container>
    )
    
};

export default Detalhes;