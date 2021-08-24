import React from 'react';
import styled from 'styled-components';
import { SearchInput } from '../atom/SearchInput';
import { SearchSpan } from '../atom/SearchSpan';

const SearchInputWrapperStyle = styled.div`
    align-items:center;
    display:flex;
    justify-content: center;
    margin:0 1rem;
    position:relative;

    @media only screen and (max-width:600px){
        
        @media (orientation:portrait){

            margin:0 auto;
            max-width:100vw;
            width:70vw;

            &::placeholder{

                font-size:1.2rem;

            }

        }

    }

`
export const SearchInputWrapper = () => {
    return (
        <SearchInputWrapperStyle>
            <SearchInput
                placeholder='Write here title or actor'
            />
            <SearchSpan/>
        </SearchInputWrapperStyle>
    )
}
