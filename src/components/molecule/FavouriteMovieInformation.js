import React from 'react';
import styled from 'styled-components';
import { MovieDisfavouriteButton } from '../atom/MovieDisfavouriteButton';
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

export const FavouriteMovieInformation = ({styles, poster, title}) => {
    return (
        <FavouriteMovieInformationStyle>
            <MovieTitle className={styles}>{title}</MovieTitle>
            <MovieDisfavouriteButton
                title={title}
                poster={poster}
            />
        </FavouriteMovieInformationStyle>
    )
}