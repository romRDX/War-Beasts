import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    flex-wrap: wrap;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid black;
    box-sizing: border-box;
    height: 74px;

    h1 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 10px;
    }
`;

export const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;