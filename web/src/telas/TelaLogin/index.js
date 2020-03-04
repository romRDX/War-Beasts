import React, { Component } from 'react'
import Login from './components/Login';

import { Background } from "./styles.js";



export default class TelaLogin extends Component {
    render() {
        return (
            <Background>
                <div>
                    <h1>WAR BEAST</h1>
                    <Login />
                </div>
            </Background>
        )
    }
};