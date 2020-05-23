import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    width: 34%;
    height: 89%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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