import {motion} from 'framer-motion';
import styled from 'styled-components';

export const SearchButton = styled(motion.button)`

    align-items:center;
    background:none;
    border:none;
    color:#fff;
    cursor:pointer;
    display:flex;
    font-size:2.7rem;
    height:3rem;
    justify-content: center;
    margin:0 1rem;
    outline:none;
    padding:.5rem;
    transition:.2s linear color;
    width:auto;

    & > *{

        transition:.2s linear transform;

    }

    &:focus,
    &:hover{

        color:#E63946;

        & > * {

            transform:translateY(-.5rem)

        }
    }


     @media only screen and (max-width:600px){

        @media (orientation:portrait){

            font-size:3rem;

        }

    }
`

