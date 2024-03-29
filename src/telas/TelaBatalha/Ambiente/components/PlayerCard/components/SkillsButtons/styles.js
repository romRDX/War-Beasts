import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    height: 68%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 1% 0 0 0;
`;

export const Buttons = styled.div`
    height: 69%;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    width: 100%;
    padding: 15px 5px;
`;

export const Skill = styled.div`
    position: relative;
    height: fit-content;
    margin: auto;

    h2 {
        text-align: center;
        position: absolute;
        right: 10px;
        top: -10px;
        border-radius: 50%;
        background: black;
        color: yellow;
        padding: 3%;
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
        height: 70%;
        margin: auto;
        border-radius: 40px;
        border: 1px solid black;
    }

    .bar {
        width: 55%;
        background: gray;
        height: 40%;
        margin: auto;
        position: relative;

        border: 1px solid black;
        
        div:first-child {
            width: ${ props => `${ props.percentageEnergy }%` };
            height: 100%;
            transition: 1s;
            background-image: linear-gradient( rgba(255,255,255,1) 0%, rgba(249,255,0,0.6530987394957983) 50%, rgba(255,255,255,1) 100%);

            display: flex;
            justify-content: center;
            align-items: center;

            
        }

        p {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            font-size: 50px;
            font-weight: bold;
            font-family: 'Teko';
            width: fit-content;
            height: fit-content;
        }

        // div:nth-child(2) {
        //     position: absolute;
        //     left: 0;
        //     right: 0;
        //     top: 0;
        //     bottom: 0;
        //     margin: auto;
        //     width: fit-content;
        //     height: fit-content;
        // }
    }
`;