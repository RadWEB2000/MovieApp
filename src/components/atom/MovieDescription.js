import styled from 'styled-components';

export const MovieDescription = styled.h4`
    color:aqua;
    font-size:2rem;
    font-weight:400;
    text-align:right;

    &.main{
        color:#fff;
        font-size:2.5rem;
        padding:.5rem;
        padding-right: 3rem;
    }

    @media only screen and (max-width:800px){
        @media (orientation:portrait){
            &.main{
                font-size:1.6rem;
                padding:.5rem;
            }
        }
        @media (orientation:landscape){
            &.main{
                column-count:2;
                font-size:1.6rem;
                padding:.5rem;
            }
        }
    }
`