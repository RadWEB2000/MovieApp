import React from 'react';
import styled from 'styled-components';
import { AuthorDescription } from '../atom/AuthorDescription';
import { AuthorImage } from '../atom/AuthorImage';

const AuthorWrapperStyle = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    height:70rem;
    width:85vw;
    margin:2rem auto;
`

export const AuthorWrapper = () => {
    return (
        <AuthorWrapperStyle>
            <AuthorImage author='https://scontent-frt3-2.xx.fbcdn.net/v/t1.6435-9/198036733_101579698834258_8949335479155007453_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0NYM4Yd0wnoAX_kyYRX&_nc_ht=scontent-frt3-2.xx&oh=dd84c6e0ebd2afb4c50251807765f3ed&oe=614C8184'/>
            <AuthorDescription/>
        </AuthorWrapperStyle>
    )
}