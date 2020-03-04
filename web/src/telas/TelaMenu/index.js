import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import MapaEstagios from './components/mapaEstagios';

import { Menu, Background } from "./styles.js";


export default class TelaMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { mapSelection: false };
        this.showStages = this.showStages.bind(this);
    }

    showStages(){
        this.setState((prevState) => {
            return {
               mapSelection: !prevState.mapSelection
            };
        });
    }

    render() {
        return (
            <>
                <Menu>
                    <h1>WAR BEAST</h1>
                    <Link className="menuLink" to="/personagem"> Personagem </Link>
                    <Link className="menuLink" to="/mapas"> Mapas </Link>
                    <Link className="menuLink" to="/Arena"> Arena </Link>
                    <Link className="menuLink" to="/main"> Teste </Link>
                    <Link className="menuLink" to="/personagens"> Escolher personagem </Link>
                </Menu>
                <Background>
                    { this.state.mapSelection && <MapaEstagios /> }
                </Background>
            </>
        )
    }
};