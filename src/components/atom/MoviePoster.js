import styled from 'styled-components';

export const MoviePoster = styled.div`
    background-image:url(${props => props.image});
    background-position:center;
    background-repeat: no-repeat;
    background-size: cover;
    height:100%;
    width:100%;
    position:absolute;
    top:0;

    &.main{
        height:100%;
        width:100%;
        z-index:-1;
    }


    &.result{
        width:250px;
        position:relative;
        height:350px;
    }
`