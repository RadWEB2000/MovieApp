import React from 'react';
import styled from 'styled-components';
import { AiOutlineStar as StarIcon } from "react-icons/ai";
import { MovieDisfavouriteButton } from '../atom/MovieDisfavouriteButton';
import { RateWrapper } from '../atom/RateWrapper';
import { MovieTitle } from '../atom/MovieTitle';

const FavouriteMovieInformationStyle = styled.div`
    background:var(--redDark);
    align-items: center;
    justify-content:space-evenly;
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    transition:.2s linear top;
    top:-100%;
    position:absolute;

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