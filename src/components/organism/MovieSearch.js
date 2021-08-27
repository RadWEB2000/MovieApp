import React from 'react';
import styled from 'styled-components';
import { MoviePoster } from '../atom/MoviePoster';
import { MovieSearchInformation } from '../molecule/MovieSearchInformation';

const MovieSearchStyle = styled.div`
    display:grid;
    grid-template-columns:1fr 2fr;
    height:60rem;
    max-height:100vh;

    @media only screen and (max-width:800px) and (orientation:portrait) { 
        grid-template-columns:1fr;
        height:auto;
        max-height:150vh;
    }
`

export const MovieSearch = ({ description, image,  popular, rate, release, title}) => {
    return (
        <MovieSearchStyle>
            <MoviePoster
                image={image}
                className='result'
            />
            <MovieSearchInformation
                styles='result'
                rate={rate}
                title={title}
                description={description}
                poster={image}
                release={release}
                popular={popular}
            />
        </MovieSearchStyle>
    )
}