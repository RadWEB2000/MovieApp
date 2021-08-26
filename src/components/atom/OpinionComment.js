import styled from 'styled-components';

export const OpinionComment = styled.div`
    color:var(--grey);
    display:flex;
    align-items:center;
    flex-direction:column;
    padding:.5rem;
    justify-content: space-around;
    font-size:1.8rem;

    & > strong{
        font-size:4rem;
    }

    & > p {
        text-indent:4rem;
    }
`