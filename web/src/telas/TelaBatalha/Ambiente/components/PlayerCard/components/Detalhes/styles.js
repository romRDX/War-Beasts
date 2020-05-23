import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 10px;
    height: 35%;
    position: relative;
    display: flex;
    
    .playerInfo {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }
`;

export const Portrait = styled.div`
    border: 1px solid black;
    border-right: 1px solid black;
    border-radius: 10px 0 0px 10px;
    width: 40%;
    height: 80%;
    box-sizing: border-box;
    background-image: url('${ props => props.img}');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const Info = styled.div`
    border: 1px solid black;
    border-radius: 0 10px 10px 0;
    width: 60%;
    display: flex;
    flex-direction: column;
    height: 80%;
    box-sizing: border-box;

    h3 {
        width: 100%;
        border-bottom: 1px solid black;
        padding: 3% 0;
        text-align: center;
        font-family: 'Piedra';
        font-size: 25px;
        text-shadow: 3px 0 0 lightgrey, -3px 0 0 lightgrey, 0 3px 0 lightgrey, 0 -3px 0 lightgrey, 2px 2px lightgrey, -2px -2px 0 lightgrey, 2px -2px 0 lightgrey, -2px 2px 0 lightgrey;
        background: #7B7167;
        border-radius: 0 10px 0 0;
    }

    .HP {
        margin: auto;
        border: 1px solid black;
        width: 90%;
        height: 25%;
    }
`;


export const Life = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    width: 100%;
    height: 19%;
    background-image: linear-gradient(  #ff9999, #ff7f7f, #ff3232, #ff0000, #ff3232, #ff7f7f, #ff9999);
`;

export const Secundarios = styled.div`
    
    overflow-y: scroll;
    padding: 10px 0 10px 10px;
    font-family: 'Teko';
`;