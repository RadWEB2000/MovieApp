import styled from 'styled-components';

export const RateWrapper = styled.div`
    align-items: center;
    color:gold;
    display:flex;
    font-size:2rem;
    justify-content:flex-start;
    margin:.75rem 0;
    max-width:40rem;
    padding-left:2rem;
    width:auto;

    &.card{
        color:#070A0E;
        font-size:2.4rem;
        justify-content:center;
        padding-left:0;
    }

    &.result{
        align-items: center;
        display:flex;
        font-size:3rem;
        justify-content:center;
        padding-left:0;
        position:relative;
        margin:1rem auto;
        width:100%;
    }
`