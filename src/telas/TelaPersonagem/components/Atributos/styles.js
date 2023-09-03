import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    width: 49%;
    height: 49%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border: 1px solid black;
    border-radius: 10px;
    padding: 2px;
    margin: auto;

    .STR {
        box-shadow: inset .4vw 0 0px 0px red, inset -.4vw 0 0px 0px red;
    }

    .DEX {
        box-shadow: inset .4vw 0 0px 0px green, inset -.4vw 0 0px 0px green;
    }

    .INT {
        box-shadow: inset .4vw 0 0px 0px purple, inset -.4vw 0 0px 0px purple;
    }

    .AGI {
        box-shadow: inset .4vw 0 0px 0px yellow, inset -.4vw 0 0px 0px yellow;
    }

    .CON {
        box-shadow: inset .4vw 0 0px 0px blue, inset -.4vw 0 0px 0px blue;
    }

    .TOU {
        box-shadow: inset .4vw 0 0px 0px orange, inset -.4vw 0 0px 0px orange;
    }

    .STRINT {
        box-shadow: inset .4vw 0 0px 0px red, inset -.4vw 0 0px 0px purple;
    }

    .DEXINT {
        box-shadow: inset .4vw 0 0px 0px green, inset -.4vw 0 0px 0px purple;
    }

    .DEXAGI {
        box-shadow: inset .4vw 0 0px 0px yellow, inset -.4vw 0 0px 0px green;
    }

    .CONINT {
        box-shadow: inset .4vw 0 0px 0px purple, inset -.4vw 0 0px 0px blue;
    }

    .TOUCON {
        box-shadow: inset .4vw 0 0px 0px orange, inset -.4vw 0 0px 0px blue;
    }

    .AGITOU {
        box-shadow: inset .4vw 0 0px 0px orange, inset -.4vw 0 0px 0px yellow;
    }
`;

export const Principais = styled.div`

    width: 47%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    text-shadow: 1px 0 0 white, -1px 0 0 white, 0 1px 0 white, 0 -1px 0 white, 1px 1px white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white;

    div {
        font-size: 40px;
        margin: 2px 0;
        font-weight: bold;
        background: linear-gradient(90deg, gray,lightgray, white, white, lightgray, gray);
        /*  */
    }

`;

export const Secundarios = styled.div`

    width: 47%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    text-shadow: 1px 0 0 white, -1px 0 0 white, 0 1px 0 white, 0 -1px 0 white, 1px 1px white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white;

    div {
        font-size: 16px;
        margin: 2px 0;
        background: linear-gradient(90deg, gray,lightgray, white, white, lightgray, gray);
    }
`;

export const Atributo = styled.div`
    
    border: 1px solid black;
    padding: 5px 0 2px;
    
    min-width: 12%;
    text-align: center;
    border-radius: 6px;
    text-transform: uppercase;
    font-family: "Teko";
    

`;