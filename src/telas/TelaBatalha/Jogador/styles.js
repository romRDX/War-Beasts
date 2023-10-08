import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 8px;
    position: relative;
`;

export const BattleResults = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:rgba(0,0,0,0.75);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        width: 400px;
        height: 200px;
        background: #FFF;
        border-radius: 10px;
        padding: 10px;

        > div {
            display: flex;
            justify-content: space-between;
        }
    }
`;

export const ResultsMessage = styled.div`
    font-size: 24px;
    text-align: center;
    padding: 8px 12px;
    margin: 0 auto;
`;