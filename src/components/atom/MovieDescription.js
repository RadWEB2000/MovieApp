import styled from 'styled-components';

export const MovieDescription = styled.h4`
    font-size:2rem;
    font-weight:400;
    text-align:right;

    &.main{
        color:var(--white);
        font-size:2.5rem;
        padding:.5rem;
        padding-right: 3rem;
    }

    &.result{
        color:var(--white);
        text-align:left;
        width:85%;
        margin:2rem auto;
        text-indent:5rem;
        font-size:2.4rem;
        font-weight:300;
    }

    @media only screen and (max-width:800px){
        @media (orientation:portrait){
            &.main{
                font-size:1.6rem;
                padding:.5rem;
            }

            &.result{
                width:95%;
                text-indent:2rem;
                font-size:1.8rem;
            }
        }
        @media (orientation:landscape){
            &.main{
                column-count:2;
                font-size:1.6rem;
                padding:.5rem;
            }

            &.result{
                width:95%;
                text-indent:2rem;
                font-size:1.8rem;
            }
        }
    }
`