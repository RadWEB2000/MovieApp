import styled from 'styled-components';

export const Submenu = styled.ul`
    align-items:center;
    display:flex;
    justify-content:space-evenly;
    margin:2rem 0;

      @media only screen and (max-width:800px){
        @media (orientation:portrait){
            margin:.45rem auto;
        }
        @media (orientation:landscape){
            height:12rem;
            width:12rem;
        }
    }
`
    