import styled from 'styled-components';
import React, { useState } from 'react';
import { MoviePoster } from '../atom/MoviePoster';
import { MovieInformation } from '../molecule/MovieInformation';
import { MovieTreaser } from '../atom/MovieTreaser';
import treaser from '../../assets/treaser.mp4';

const MovieHeaderStyle = styled.div`
        height:150rem;
        margin:2rem 0;
        max-height:85vh;
        min-height:70vh;
        overflow:hidden;
        position:relative;
        z-index:1;
`

export const MovieHeader = () => {

    const [movie, movieTogglePlay] = useState(false);

    const movieFunctionOn = () => {
        movieTogglePlay(true);
    }

    const movieFunctionOff = () => {
        movieTogglePlay(false);
    }



    return (
        <MovieHeaderStyle onMouseOver={movieFunctionOn} onMouseLeave={movieFunctionOff}>
            {

                movie ?
                
            <MovieTreaser
                autoPlay={movie}
                // loop
                src={treaser}
            /> :
            <MoviePoster
                image="https://bigbaddice.pl/wp-content/uploads/2019/07/spider_man_far_from_home.jpg"
                className='main' /> 
            }

            <MovieInformation
                styles='main'
                rate='5'
                title='Spider Man: Far From Home'
                description='It is the sequel to Spider-Man: Homecoming (2017) and the 23rd film in the Marvel Cinematic Universe (MCU). ... In the film, Parker is recruited by Nick Fury and Mysterio to face the Elementals while he is on a school trip to Europe.'
            />
        </MovieHeaderStyle>
    )
}