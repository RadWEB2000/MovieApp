import styled from 'styled-components';

export const AboutSectionTitle = styled.h2`
    color:var(--redDark);
    font-size:5rem;
    cursor:default;
    padding-left:5rem;

    &::first-letter{
        color:var(--red);
    }

    @media only screen and (max-width:800px){
        font-size:3rem;
        padding-left:1rem;
    }
`