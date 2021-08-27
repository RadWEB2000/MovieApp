import React from 'react';
import styled from 'styled-components';
import { AiOutlineStar as StarIcon } from "react-icons/ai";
import { MovieDisfavouriteButton } from '../atom/MovieDisfavouriteButton';
import { RateWrapper } from '../atom/RateWrapper';
import { MovieTitle } from '../atom/MovieTitle';

const FavouriteMovieInformationStyle = styled.div`
    align-items: center;
    background:var(--redDark);
    display:flex;
    flex-direction:column;
    height:100%;
    justify-content:space-evenly;
    position:absolute;
    top:-100%;
    transition:.2s linear top;
    width:100%;

`

export const FavouriteMovieInformation = ({styles}) => {
    return (
        <FavouriteMovieInformationStyle>
            <MovieTitle className={styles}>ANT MAN</MovieTitle>
            <RateWrapper className={styles}>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
            </RateWrapper>
            <MovieDisfavouriteButton/>
        </FavouriteMovieInformationStyle>
    )
}