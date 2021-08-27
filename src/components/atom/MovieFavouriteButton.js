import { motion } from 'framer-motion';
import styled from 'styled-components';
import { favsAPI } from '../../data/favsAPI';

const MovieFavouriteButtonStyle = styled(motion.button)`
    
    align-items:center;
    background:var(--redDark);
    border:none;
    border-radius:.5rem;
    cursor:pointer;
    display:flex;
    flex-direction: row;
    font-size:3rem;
    font-weight:900;
    height:4.5rem;
    justify-content: center;
    margin:1rem 0;
    margin-left:3rem;
    min-width:12rem;
    outline:none;
    padding:1rem;
    text-transform:uppercase;
    transition:.2s linear box-shadow, .2s linear background;

    &:hover{
        box-shadow:0 0 .5rem var(--white);
        background:var(--red);
    }

    &.card{
        position:absolute;
        bottom:0;
        border-radius:0;
        background:none;
        width:100%;
        font-size:2.4rem;
        left:0;
        margin-left:0;
        color:var(--grey);
        transition:.2s linear transform;
    }

    &.card:hover{
        transform:translateY(-1rem);
    }

    &.card::before{
        bottom:0;
        background:var(--red);
        height:.5rem;
        transition:.2s .2s linear width;
        width:0%;
    }

    &.card:hover::before{
        width:80%;
    }

    @media only screen and (max-width:800px){
        
        font-size:2.4rem;
        height:3.5rem;

        @media (orientation:portrait){
        
            margin:1rem 0;
            padding:0;
            width:100%;

        }

        @media (orientation:landscape){

            margin:.45rem auto;

        }

    }
`
export const MovieFavouriteButton = ({title,poster, styles}) => {

    const addFavourite = e => {
        const favElementAPI = {
            title: title,
            poster:poster
        }

        e.preventDefault();
        favsAPI.push(favElementAPI);
        console.log(favsAPI)
    }

    return (
        <MovieFavouriteButtonStyle onClick={addFavourite} className={styles}>
            Add to fav
        </MovieFavouriteButtonStyle>
    )
}