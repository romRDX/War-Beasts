import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 8px;

    div {
        width: 80px;
        height: 80px;
    }
`;

export const Dado = styled.div`
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    ${props => props.icon && `background-image: url(${props.icon});`}
    box-sizing: border-box;
    border: ${props => props.isSelected ? "3px solid red;" : "1px solid gray;"}
`;