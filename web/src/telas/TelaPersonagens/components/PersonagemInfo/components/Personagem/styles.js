import styled from 'styled-components';

export const Info = styled.div`

   width: 95%;
   height: 90%;
   margin: auto;
   display: flex;
   flex-direction: column;
   font-family: 'Teko';

   h1 {
      font-size: 40px;
      text-align: center;
      border-radius: 10px;
      background: lightgray;
      max-width: 70%;
      width: 100%;
      margin: 0 auto 15px auto;
      padding: 10px 15px;
   }

   h2 {
      font-size: 30px;
      text-transform: uppercase;
      font-weight: bold;
      text-align: center;
      margin: 10px 0 10px;
   }

   button {
      padding: 5px 70px 2px;
      font-size: 40px;
      border-radius: 5px;
      border: .5px solid lightgray;
      margin: 20px auto 0;
      width: fit-content;
      font-family: 'Teko';
      text-transform: uppercase;
   }
    
`;

export const Portrait = styled.div`

   width: 72.5%;
   height: 40%;
   border: 1px solid black;
   margin: 20px auto 0 auto;

`;

export const Atributos = styled.div`

   display: flex;
   width: 100%;
   margin: 0 auto;
   flex-wrap: wrap;
   justify-content: space-evenly;


   div {
      border: 1px solid black;
      padding: 7px;
      margin: 10px 0;
      min-width: 12%;
      text-align: center;
      font-size: 30px;
      border-radius: 6px;
      text-transform: uppercase;
   }

`;

export const Detalhes = styled.div`

   display: flex;
   flex-direction: row;
   margin: 0 auto;
   width: 100%;
   justify-content: space-evenly;

   div {
      border: 1px solid black;
      border-radius: 5px;
      margin: 5px;
      padding: 8px 15px;
      font-size: 25px;
      text-transform: uppercase;
   }
`;

export const Divisor = styled.div`
   border: 1px solid black;
   border-radius: 5px;
   margin: 15px auto 0px;
   padding: 15px;
   width: 70%;
`;