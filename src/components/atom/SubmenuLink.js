import styled from 'styled-components';

export const SubmenuLink = styled.li`
    align-items:center;
    background:var(--grey);
    border:.25rem solid var(--red);
    border-radius:5rem;
    color:var(--red);
    cursor:pointer;
    display:flex;
    font-size:1.4rem;
    font-weight:900;
    height:5.5rem;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    transition:.2s linear border, .2s linear color;
    width:25rem;

    &:hover{
        border:.25rem solid var(--white);
        color:var(--white);

    }

    @media only screen and (max-width:800px){
        font-size:1.3rem;
        font-weight:700;
        margin:.75rem 0;
    }
`