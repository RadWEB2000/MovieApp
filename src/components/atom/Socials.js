import React from 'react';
import styled from 'styled-components';
import { socials } from '../../data/socials';

const SocialsStyle = styled.ul`
    align-items:center;
    display:flex;
    justify-content:space-evenly;
    margin:1.5rem auto;
    width:70vw;

    & > a {
        align-items:center;
        border-radius:50%;
        color:var(--red);
        display:flex;
        font-size:4rem;
        height:6rem;
        justify-content: center;
        transition:.2s linear background, .2s linear color;
        width:6rem;

        &:hover{
            background:var(--redDark);
            color:var(--white);
        }
    }

    @media only screen and (max-width:800px){
        width:100vw;

        & > a {
            font-size:3.5rem;
            height:4.5rem;
            width:4.5rem;
        }
    }
`

export const Socials = () => {
    return (
        <SocialsStyle>
            {
                socials.map(e =>
                    <a href={e.link} target='_blank' rel='noreferrer'>
                        {e.icon}
                    </a>

                )
            }
        </SocialsStyle>
    )
}