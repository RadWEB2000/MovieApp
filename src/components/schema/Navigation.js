import React from 'react';
import styled from 'styled-components'
import { Menu } from '../molecule/Menu';
import { SearchBox } from '../organism/SearchBox';

const NavigationStyle = styled.nav`
    background:#070A0E;
    display:grid;
    grid-template-columns:3fr 1fr;
    height:4rem;
    overflow:hidden;
    position:sticky;
    top:0;
    z-index:5;
    
    @media only screen and (max-width:600px){

        @media (orientation:portrait){

            grid-template-columns:1fr;
            grid-template-rows:4rem 3.5rem;
            height:auto;

        }

    }

`

export const Navigation = () => {
    return (
        <NavigationStyle>
            <SearchBox />
            <Menu/>
        </NavigationStyle>
    )
}