import React from 'react';
import styled from 'styled-components';
import { SearchButton } from '../atom/SearchButton';
import { SearchInputWrapper } from '../molecule/SearchInputWrapper';
import { BiSearchAlt as SearchIcon } from "react-icons/bi";




const SearchBoxStyle = styled.form`
    align-items:center;
    display:flex;
    flex-direction: row;
    justify-content: center;

    @media only screen and (max-width:600px){
        @media (orientation:portrait){
            /* background:purple; */
            flex-direction: row;
        }
    }
`

export const SearchBox = ({valueSearch, updateSearchValue} ) => {
    return (
        <SearchBoxStyle onSubmit={e => e.preventDefault()}>
            <SearchInputWrapper
                valueSearch={valueSearch}
                updateSearchValue={updateSearchValue}
            />
            <SearchButton>
                <SearchIcon/>
            </SearchButton>
        </SearchBoxStyle>
    )
}