import React from 'react';
import styled from 'styled-components';
import { OpinionComment } from '../atom/OpinionComment';
import { OpinionImage } from '../atom/OpinionImage';

const OpinionStyle = styled.div`
    width:85vw;
    height:25rem;
    margin:1.5rem auto;
    display:grid;
    grid-template-columns:1fr 3fr;
    background:var(--white);
    border-radius:2rem;
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