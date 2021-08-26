import styled from 'styled-components';

export const OpinionImage = styled.div`
    width:15rem;
    height:15rem;
    border-radius:50%;
    background-size:cover;
    background-position:center;
    background-image:url(${props => props.opinionUser});
    background-color:gold;
`  