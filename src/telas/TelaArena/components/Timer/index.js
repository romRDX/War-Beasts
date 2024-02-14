import React, { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Botao } from 'globalComponents/Botoes/styles';
import { BotaoVoltar } from 'globalComponents/Botoes/styles.js';
import { Container, Rank, Loading } from "./styles.js";
import { useWS } from 'hooks/useWS';
import { useCharacter } from 'hooks/useCharacter';
import { useAuth } from 'hooks/useAuth';
import { useHistory } from 'react-router-dom';


const Timer = () => {

    const [tempoTotal, setTempoTotal] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
        setTempoTotal(tempoTotal => tempoTotal + 1);
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    const formatarTempo = (tempo) => {
        const horas = Math.floor(tempo / 3600);
        const minutos = Math.floor((tempo % 3600) / 60);
        const segundos = tempo % 60;

        const formatado = (valor) => (valor < 10 ? '0' : '') + valor;

        return `${formatado(horas)}:${formatado(minutos)}:${formatado(segundos)}`;
    };

    return (
        <Container>
            { formatarTempo(tempoTotal) }
        </Container>
    )
};

export default Timer;