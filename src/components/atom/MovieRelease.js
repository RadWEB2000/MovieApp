import styled from 'styled-components';

export const MovieRelease = styled.div`
   align-items:center;
    background:var(--redDark);
    color:var(--white);
    display:flex;
    justify-content:flex-start;
    padding-left:1rem;
    margin:.5rem 0;
    font-size:2.7rem;

    & > * {
        color:var(--white);
        margin:0 .5rem;
    }
`