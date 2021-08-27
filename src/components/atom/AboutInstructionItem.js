import styled from 'styled-components';

export const AboutInstructionItem = styled.li`
    display:flex;
    align-items:center;
    cursor:default;
    font-size:2rem;
    min-height:15rem;
    font-weight:700;
    text-transform: uppercase;
    justify-content:center;
    text-align:center;

    &:nth-of-type(odd){
        color:var(--white);
        background:var(--redDark);

    }
    &:nth-of-type(even){
        background:var(--white);
        color:var(--redDark);
    }

`