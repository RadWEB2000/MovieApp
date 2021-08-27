import styled from 'styled-components';

export const OpinionImage = styled.div`
    background-image:url(${props => props.opinionUser});
    background-position:center;
    background-size:cover;
    border-radius:50%;
    height:20rem;
    margin:auto;
    position:relative;
    width:20rem;

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