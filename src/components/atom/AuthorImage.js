import styled from 'styled-components';

export const AuthorImage = styled.div`
    width:20rem;
    height:20rem;
    ${'' /* border-radius:50%; */}
    background-size:cover;
    background-position:center;
    background-image:url(${props => props.author});
    background-color:gold;
    position:relative;
    margin:auto;
`  