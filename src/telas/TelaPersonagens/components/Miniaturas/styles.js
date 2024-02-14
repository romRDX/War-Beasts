import styled from 'styled-components';


export const Container = styled.div`
  max-width: 40%;
  height: 100%;
  width: 100%;
  height: inherit;
  border-right: 1px solid black;
  height: inherit;
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 0;

  h1 {
    text-align: center;
  }
`;

export const Minis = styled.div`
  margin: 20px 0 0 0;
  height: 82%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 40px;
    text-align: center;
    border-radius: 10px;
    background: lightgray;
    max-width: 70%;
    width: 100%;
    margin: auto auto 15px auto;
    padding: 10px 15px;
  }
`;


export const NovoPersonagem = styled.div`
  
`;