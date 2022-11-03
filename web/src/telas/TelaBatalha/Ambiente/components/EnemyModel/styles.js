import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    width: 34%;
    height: 89%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    H2 {
        font-family: "Piedra";
        text-shadow: 3px 0 0 lightgrey, -3px 0 0 lightgrey, 0 3px 0 lightgrey, 0 -3px 0 lightgrey, 2px 2px lightgrey, -2px -2px 0 lightgrey, 2px -2px 0 lightgrey, -2px 2px 0 lightgrey;
        font-size: 35px;
        font-weight: bold;
        text-align: center;
        padding: 10px;
        background: #7B7167;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
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
    transform: scaleX(-1);
`;

export const Life = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    width: 100%;
    height: 10%;
    background-image: linear-gradient(  #ff9999, #ff7f7f, #ff3232, #ff0000, #ff3232, #ff7f7f, #ff9999);
`;