import styled from "styled-components";

export const MovieTreaser = styled.video`
    position:absolute;
    width:100%;
    height:100%;

    @media only screen and (max-width:800px) {
        @media (orientation:portrait){
          transform: translateY(-15rem);
        }
        @media (orientation:landscape){
          transform: translateY(-5rem);
        }
    }

    
`