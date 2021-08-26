import React from 'react';
import { FavouriteSectionTitle } from '../components/atom/FacouriteSectionTitle';
import { FavouritesTitle } from '../components/atom/FavouritesTitle';
import { FavouriteMovie } from '../components/organism/FavouriteMovie';
import { FavouriteMovies } from '../components/atom/FavouriteMovies';

export const FavouritesView = () => {
    return (
        <>
            {/* <FavouritesTitle>I haven't any favourite movie</FavouritesTitle> */}
            <FavouritesTitle>
                My favourites movies
            </FavouritesTitle>
            <div>
                <FavouriteSectionTitle>A</FavouriteSectionTitle>
                <FavouriteMovies>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                </FavouriteMovies>
            </div>
            <div>
                <FavouriteSectionTitle>B</FavouriteSectionTitle>
                <FavouriteMovies>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                </FavouriteMovies>
            </div>
            <div>
                <FavouriteSectionTitle>C</FavouriteSectionTitle>
                <FavouriteMovies>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                    <FavouriteMovie/>
                </FavouriteMovies>
            </div>
        

        </>
    )
}