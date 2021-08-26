import React from 'react';
import styled from 'styled-components';

const AuthorDescriptionStyle = styled.div`
    color:var(--white);
    display:flex;
    align-items:center;
    border:.1rem solid var(--white);
    justify-content: center;
    padding:3rem;
    font-size:3rem;
`

export const AuthorDescription = () => {
    return (
        <AuthorDescriptionStyle>
            <p>
                I'm Radosław Adamczyk and I living in GreaterPoland. I born 9<sup>th</sup> October 2000. I graduate Catholic Public Academy High School Saint John Paul II in Śrem. I learn programming for 2016 when I started adventure with HTML and legendary C++. Now I can write in HTML, CSS, SCSS, BOOTSTRAP, JavaScript, React. Did you want see another my projects, please click on below Github icon .
            </p>
        </AuthorDescriptionStyle>
    )
}