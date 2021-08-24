import React from 'react';
import { AiOutlineStar as StarIcon } from "react-icons/ai";
import styled from 'styled-components';
import { MovieDescription } from '../atom/MovieDescription';
import { MovieFavouriteButton } from '../atom/MovieFavouriteButton';
import { MovieTitle } from '../atom/MovieTitle';
import { RateWrapper } from '../atom/RateWrapper';

const MovieInformationStyle = styled.div`
    height:100%;
    position:absolute;

    &.main{
        background:hsla(214, 33%, 4%, .8);
        backdrop-filter:brightness(50%);
        position:absolute;
        bottom:0;
        height:auto;
        max-height:70vh;
        z-index:1;
    }

    &.card{
        background:#fff;
        top:100%;
        transition:.2s ease-in-out top;
        width:100%;
    }
    
`

export const MovieInformation = ({ styles, title, description, rate }) => {
    
    function Raiting() {
        switch (rate) {
            case '1':
                return (
                    <StarIcon/>
                );
            case '2':
                return (
                    <>
                        <StarIcon/>
                        <StarIcon/>
                    </>
                );
            case '3':
                return (
                    <>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                    </>
                );
            case '4':
                return (
                    <>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                    </>
                );
            case '5':
                return (
                    <>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                    </>
                );
            default:
                return (
                    <>
                    </>
                );
        }
    }

    return (
        <MovieInformationStyle className={styles}>
            <MovieTitle className={styles}>
                {title}
            </MovieTitle>
            <RateWrapper className={styles}>
                {
                   Raiting()
                }

            </RateWrapper>
            <MovieDescription className={styles}>
                {description}
            </MovieDescription>
            <MovieFavouriteButton styles={styles}/>
        </MovieInformationStyle>
    )
}
