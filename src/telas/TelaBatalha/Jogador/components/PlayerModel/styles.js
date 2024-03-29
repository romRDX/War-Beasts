import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    width: 34%;
    height: 89%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div:first-child {
        height: 55px;
    }
`;

export const Modelo = styled.div`

    background-image: url('${props => props.img}');
    background-position: center;
    width: 85%;
    height: 30%;
    background-size: contain;
    margin: 0 auto;
    background-repeat: no-repeat;
`;

export const Life = styled.div`
    border: 1px solid black;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 100%;
    height: 10%;
    position: relative;
    
    div {
        width: ${ props => `${ props.percentageHP }%` };
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        height: 100%;
        transition: 1s;
        background-image: linear-gradient(#ff9999, #ff7f7f, #ff3232, #ff0000, #ff3232, #ff7f7f, #ff9999);
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
`;