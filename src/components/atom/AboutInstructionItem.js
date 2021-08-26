import styled from 'styled-components';

export const AboutInstructionItem = styled.li`
    display:flex;
    align-items:center;
    cursor:default;
    font-size:2.5rem;
    min-height:15rem;
    font-weight:700;
    text-transform: uppercase;

    &:nth-of-type(odd){
        grid-column: 2;
        justify-content:flex-start;
        color:var(--white);

    }
    &:nth-of-type(even){
        grid-column: 1;
        justify-content:flex-end;
        color:var(--red);
    }

    &:nth-of-type(1){
        grid-row: 1;
    }
    &:nth-of-type(2){
        grid-row: 2;
    }
    &:nth-of-type(3){
        grid-row: 3;
    }
    &:nth-of-type(4){
        grid-row: 4;
    }
`