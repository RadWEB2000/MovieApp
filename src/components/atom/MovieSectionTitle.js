import styled from 'styled-components';

export const MovieSectionTitle = styled.h3`
    color:var(--white);
    font-size:3.5rem;
    text-transform:uppercase;
    padding-left:1.5rem;

    &::first-letter{
        background:var(--white);
        color:var(--red);
        font-size:5rem;
    }
`