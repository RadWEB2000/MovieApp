import React from 'react';
import styled from 'styled-components';
import { MoviePoster } from '../atom/MoviePoster';
import { MovieInformation } from '../molecule/MovieInformation';

const MovieItemStyle = styled.div`
    width:25rem;
    flex-shrink:0;
    margin:0 1rem;
    height:27rem;
    overflow:hidden;
    position:relative;
    transition:.2s ease-in-out box-shadow;

    &:hover{
        box-shadow:0 0 26px #f04;
    }


    &:hover > *{
        top:0;
    }

`

export const MovieItem = ({img,rate, title}) => {
    return (
        <MovieItemStyle>
            <MoviePoster
                image={img}
            />
            <MovieInformation
                styles='card'
                rate={rate}
                title={title}
            />
        </MovieItemStyle>
    )
}


