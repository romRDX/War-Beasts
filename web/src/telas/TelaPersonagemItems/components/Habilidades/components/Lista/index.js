import React, { useEffect, useState, useContext} from 'react';
import ListaIcones from 'globalComponents/ListaIcones/index.js';
import { apiWB } from 'services/axios.js';
import ItemsPersonagemContext from 'telas/TelaPersonagemItems/context/ItemsPersonagemContext.js';

import { Container } from './styles.js';

const Habilidades = (props) => {

    const { selectedItemFromList, setSelectedItemFromList, setItemSelecionado } = useContext(ItemsPersonagemContext);

    const [itens, setItens] = useState(null);

    useEffect(() => {
        apiWB.get('/itens').then((resp) => {
            setItens(resp.data.itens);
        });
    }, []);
    

    return (
        <Container>
            {
                itens && <ListaIcones dados={itens} selected={selectedItemFromList} setSelectedItemFromList={setSelectedItemFromList} setSelected={setItemSelecionado} />
            }
        </Container>
    ) 
}

export default Habilidades;