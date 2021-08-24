import styled from 'styled-components';

export const MovieTitle = styled.h2`
    color:pink;
    font-size:4.2rem;

    &.main{
        border-bottom:.25rem solid #e63946;
        color:#e63946;
        margin:.75rem 0;
        padding-left:4rem;
    }

    &.card{
        color:#e63941;
        font-size:3rem;
        margin:1rem 0;
        padding:none;
        text-align:center;
    }

    @media only screen and (max-width:800px){
        @media (orientation:portrait){
            &.main{
                font-size:3.2rem;
                padding-left:0;
                text-align:center;
                word-wrap:break-word;
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