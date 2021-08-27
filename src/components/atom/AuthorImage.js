import styled from 'styled-components';

export const AuthorImage = styled.div`
    background-image:url(${props => props.author});
    background-position:center;
    background-size:cover;
    height:100%;
    margin:auto;
    position:relative;
    width:100%;

    
    @media only screen and (max-width:800px){
        height:25rem;
    }
`  