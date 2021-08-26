import React from 'react';
import styled from 'styled-components';
import { socials } from '../../data/socials';

const SocialsStyle = styled.ul`
    width:70vw;
    margin:1.5rem auto;
    display:flex;
    align-items:center;
    justify-content:space-evenly;

    & > a {
        width:6rem;
        height:6rem;
        font-size:5rem;
        display:flex;
        align-items:center;
        justify-content: center;
        color:var(--red);
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