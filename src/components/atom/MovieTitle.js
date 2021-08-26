import styled from 'styled-components';

export const MovieTitle = styled.h2`
    font-size:4.2rem;
    font-weight:500;

    &.main{
        border-bottom:.25rem solid var(--red);
        color:var(--red);
        margin:.75rem 0;
        font-weight:700;
        padding-left:4rem;
    }

    &.card{
        color:var(--redDark);
        font-size:3rem;
        margin:1rem 0;
        padding:none;
        text-align:center;
    }

    &.result{
        color:var(--red);
        text-align:center;
        padding:.8rem 0;
        width:85%;
        margin:auto;
    }

    &.fav{
        color:var(--white);
        font-size:3rem;
        font-weight:500;
    }

    @media only screen and (max-width:800px){
        @media (orientation:portrait){
            &.main{
                font-size:3.2rem;
                padding-left:0;
                text-align:center;
                word-wrap:break-word;
            }

            &.result{
                font-size:3.2rem;
                width:85%;
                margin:auto;
            }
        }
        @media (orientation:landscape){
            &.main{
                font-size:2.5rem;
                padding-left:0;
                text-align:center;
                word-wrap:break-word;
            }
        }
    }
`