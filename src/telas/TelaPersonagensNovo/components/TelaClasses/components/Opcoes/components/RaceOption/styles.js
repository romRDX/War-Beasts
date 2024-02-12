import styled from 'styled-components';


export const Container = styled.div`
    width: 270px;
    height: 270px;
    position: relative;
    border: 1px solid black;
    border-radius: 50%;
    margin: auto 5%;
    display: flex;
    justify-content: center;

    ${props => props.isSelected && 'box-shadow: 0 0px 0px 6px red'};

    img {
        border-radius: 50%;
    }
    
    h2 {
        position: absolute;
        bottom: -27px;
        left: 0;
        right: 0;
        font-weight: bold;
        font-size: 24px;
        text-align: center;
        margin: 0 auto;
        display: block;
    }
`;