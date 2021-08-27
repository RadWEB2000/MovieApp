import styled from 'styled-components';

export const AboutInstruction = styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(4, minmax(15rem, auto));
    margin:2rem auto;
    padding:1rem;
    width:95vw;

    @media only screen and (max-width:800px){
        padding:0;
        width:100vw;
    }
`