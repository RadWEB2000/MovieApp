import React from 'react';
import styled from 'styled-components';
import { MoviePoster } from '../atom/MoviePoster';
import { FavouriteMovieInformation } from '../molecule/FavouriteMovieInformation';

const FavouriteMovieStyle = styled.div`
    overflow:hidden;
    display:block;
    height:100%;
    width:100%;
    position:relative;

    &:hover > * {
        top:0;
    }
`

export const FavouriteMovie = () => {
    return (
        <FavouriteMovieStyle>
            <MoviePoster
                image='https://image.tmdb.org/t/p/original//rS97hUJ1otKTTripGwQ0ujbuIri.jpg'
                className='fav'
            />
            <FavouriteMovieInformation styles='fav'/>
        </FavouriteMovieStyle>
    )
}