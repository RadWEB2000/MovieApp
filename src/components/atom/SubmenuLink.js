import styled from 'styled-components';

export const SubmenuLink = styled.li`
    display:flex;
    align-items:center;
    justify-content: center;
    cursor:pointer;
    background:var(--grey);
    border:.25rem solid var(--red);
    border-radius:5rem;
    font-size:1.4rem;
    text-transform: uppercase;
    text-align: center;
    font-weight:900;
    width:25rem;
    height:5.5rem;
    transition:.2s linear border, .2s linear color;
    color:var(--red);

    &:hover{
        border:.25rem solid var(--white);
        color:var(--white);

    }
`