import styled from 'styled-components';

export const FavouriteMovies = styled.div`
    display:grid;
    grid-template-columns:repeat(5 ,18fr);
    grid-auto-rows:30rem;
    width:95vw;
    padding:.75rem;
    margin:1rem auto;
    grid-column-gap:.3rem;
    grid-row-gap:.7rem;
    height:auto;
    ${'' /* background:red; */}

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