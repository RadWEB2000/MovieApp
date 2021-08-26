import styled from 'styled-components';

export const AuthorImage = styled.div`
    width:100%;
    height:100%;
    background-size:cover;
    background-position:center;
    background-image:url(${props => props.author});
    background-color:gold;
    background-attachment:local;
    position:relative;
    margin:auto;
`  