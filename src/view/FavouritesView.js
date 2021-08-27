import React from 'react';
import { FavouriteSectionTitle } from '../components/atom/FacouriteSectionTitle';
import { FavouritesTitle } from '../components/atom/FavouritesTitle';
import { FavouriteMovie } from '../components/organism/FavouriteMovie';
import { FavouriteMovies } from '../components/atom/FavouriteMovies';
import { favsAPI } from '../data/favsAPI';

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
           
                    {
                        favsAPI.map(e =>
                            <FavouriteMovie
                                poster={e.poster}
                                title={e.title}
                            />
                        )
                    }
                </FavouriteMovies>
            </div>
          
            
        

        </>
    )
}