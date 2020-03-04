import styled from 'styled-components';

export const Info = styled.div`

    border: 1px solid black;
    border-radius: 10px;
    padding: 0;
    display: flex;
    margin: auto;
    flex-direction: row;
    flex-wrap: wrap;
    width: 98%;
    height: 98%;

    .voltar {
        position: absolute;
        top: .8%;
        left: .8%;
        padding: 15px 17px;
        border: 1px solid black;
        background: white;
        border-radius: 10px 0 10px 0;
        text-decoration: none;
        font-family: 'Piedra';
        text-shadow: 3px 0 0 lightgray, -3px 0 0 lightgray, 0 3px 0 lightgray, 0 -3px 0 lightgray, 2px 2px lightgray, -2px -2px 0 lightgray, 2px -2px 0 lightgray, -2px 2px 0 lightgray;
        background: #7B7167;
        color: #800000;

        &:hover {
            color: red;
            box-shadow: inset 0px 0px 8px 1px black;
        }
    }

`;