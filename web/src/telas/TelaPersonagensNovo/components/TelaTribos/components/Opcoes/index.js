import React from 'react';

import { Conteiner } from './styles';

import tribos from 'Data/Tribos';

import OpcaoTribo from './components/OpcaoTribo';

const Opcoes = ( props ) => {

        return (
                <Conteiner>
                        {   
                                tribos.map( tribo => (
                                        <OpcaoTribo tribo={tribo}  key={tribo.nome} />
                                ))
                        }
                </Conteiner>
        )
};

export default Opcoes;
