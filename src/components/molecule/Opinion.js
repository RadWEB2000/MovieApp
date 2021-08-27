import React from 'react';
import styled from 'styled-components';
import { OpinionComment } from '../atom/OpinionComment';
import { OpinionImage } from '../atom/OpinionImage';

const OpinionStyle = styled.div`
    background:var(--white);
    border-radius:2rem;
    display:grid;
    grid-template-columns:1fr 3fr;
    height:25rem;
    margin:1.5rem auto;
    width:85vw;

    @media only screen and (max-width:800px){
        height:auto;
        @media (orientation:portrait){
            grid-template-columns:1fr;
        }
        @media (orientation:landscape){
            grid-template-columns:1fr 2fr;
        }
    }

`

export const Opinion = ({image, name, comment}) => {
    return (
        <OpinionStyle>
            <OpinionImage opinionUser={image}/>
            <OpinionComment>
                <strong>{name}</strong>
                <br />
                <p>
                    {
                        comment
                    }
                </p>
            </OpinionComment>
        </OpinionStyle>
    )
}