import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import { ImUser as UserIcon } from "react-icons/im";
import { IoBookmarksOutline as FavouritesIcon } from "react-icons/io5";
import { MenuItem } from '../atom/MenuItem';

const MenuStyle = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-evenly;
`




export const Menu = () => {
    return (
        <MenuStyle>
            <MenuItem to='/'>
                <HomeIcon/>
            </MenuItem>
            <MenuItem to='/favourites'>
                <FavouritesIcon/>
            </MenuItem>
            <MenuItem to='/about'>
                <UserIcon/>
            </MenuItem>
        </MenuStyle>
    )
}