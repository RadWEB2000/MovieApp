import React from 'react';
import styled from 'styled-components';
import { AiOutlineStar as StarIcon } from "react-icons/ai";
import {TiGroupOutline as UsersIcon } from "react-icons/ti";
import { MdDateRange as DateIcon } from "react-icons/md";
import { MovieDescription } from '../atom/MovieDescription';
import { MovieFavouriteButton } from '../atom/MovieFavouriteButton';
import { MoviePopularity } from '../atom/MoviePopularity';
import { MovieRelease } from '../atom/MovieRelease';
import { MovieTitle } from '../atom/MovieTitle';
import { RateWrapper } from '../atom/RateWrapper';

const MovieSearchInformationStyle = styled.div`
`
export const MovieSearchInformation = ({description,  popular, rate, release, styles, title}) => {

    function Raiting() {
        switch (rate) {
            case 1:
                return (
                    <StarIcon/>
                );
            case 2:
                return (
                    <>
                        <StarIcon/>
                        <StarIcon/>
                    </>
                );
            case 3:
                return (
                    <>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                    </>
                );
            case 4:
                return (
                    <>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                    </>
                );
            case 5:
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
        <MovieSearchInformationStyle>
            <MovieTitle className={styles}>
                {title}
            </MovieTitle>
            <RateWrapper className={styles}>
                {
                    Raiting()
                }
            </RateWrapper>
            <MoviePopularity>
                <UsersIcon  />
                <p>
                    {popular}
                </p>
            </MoviePopularity>
            <MovieRelease>
                <DateIcon />
                <p>
                    {release}
                </p>
            </MovieRelease>
            <MovieDescription className={styles}>
                {description}
            </MovieDescription>
            <MovieFavouriteButton/>
        </MovieSearchInformationStyle>
    )
}
