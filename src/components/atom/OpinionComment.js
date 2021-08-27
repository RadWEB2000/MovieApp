import styled from 'styled-components';

export const OpinionComment = styled.div`
    align-items:center;
    color:var(--grey);
    cursor:default;
    display:flex;
    flex-direction:column;
    font-size:1.8rem;
    justify-content: space-around;
    padding:.5rem;

     & > p {
        text-indent:4rem;
    }

    & > strong{
        font-size:4rem;
    }

    @media only screen and (max-width:800px){
        font-size:1.6rem;
        padding-bottom:2rem;
        text-align:center;


        & > strong{
            font-size:2.1rem;
        }
    }

   
`