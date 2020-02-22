import styled from 'styled-components';

export const Conteiner = styled.div`

    border: 1px solid black;
    border-radius: 10px;
    height: 65%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 1% 0 0 0;
`;

export const Buttons = styled.div`

    height: 69%;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .skill {
        border: 1px solid black;
        border-radius: 50%;
        width: 22%;
        height: 30%;
        margin:  .5% 2%;
    }

`;


export const EnergyBar = styled.div`

width: 100%;
        height: 30%;
        border-top: 1px solid black;
        border-radius: 0;
        position: relative;
        display: flex;

        .skill {
            width: 30%;
            height: 90%;
            margin: auto;
            border-radius: 40px;
            border: 1px solid black;
        }

        .bar {
            width: 55%;
            background: green;
            height: 40%;
            margin: auto;
        }
`;