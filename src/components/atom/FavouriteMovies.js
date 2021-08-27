import styled from 'styled-components';

export const FavouriteMovies = styled.div`
    display:grid;
    grid-auto-rows:30rem;
    grid-column-gap:.3rem;
    grid-row-gap:.7rem;
    grid-template-columns:repeat(5 ,18fr);
    height:auto;
    margin:1rem auto;
    padding:.75rem;
    text-align:center;
    width:95vw;

    @media only screen and (max-width:800px) {
        @media (orientation:portrait){
            grid-template-columns:repeat(1 ,18fr);
        }
        @media (orientation:landscape){
            grid-auto-rows:25rem;
            grid-row-gap:.2rem;
        }
    }
`