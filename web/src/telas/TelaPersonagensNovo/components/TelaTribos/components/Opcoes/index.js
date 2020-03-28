import React from 'react';

import { Conteiner } from './styles';

import tribos from 'Data/Tribos';

import OpcaoTribo from './components/OpcaoTribo';

const Opcoes = ( props ) => {

        const teste = (select) => {
                console.log('asdasd');
        }

        return (
                <Conteiner>
                        {   
                                tribos.map( tribo => (
                                        <OpcaoTribo tribo={tribo}  key={tribo.nome} func={props.func} />
                                ))
                        }
                </Conteiner>
        )
};

export default Opcoes;
