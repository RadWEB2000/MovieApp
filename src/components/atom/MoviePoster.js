import styled from 'styled-components';

export const MoviePoster = styled.div`
    background-image:url(${props => props.image});
    background-position:center;
    background-repeat: no-repeat;
    background-size: contain;
    height:100%;
    position:absolute;
    top:0;
    width:100%;

    &.fav{
        height:30rem;
        width:100%;
    }

    &.main{
        background-size:cover;
        height:100%;
        width:100%;
        z-index:-1;
    }


    &.result{
        background-size: contain;
        height:80%;
        margin:auto;
        position:relative;
        width:80%;
    }

    

     @media only screen and (max-width:800px) and (orientation:portrait) { 
        &.result{
            height:50rem;
            width:80vw;
        }
    }
`