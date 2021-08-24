import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const MenuItem = styled(motion(NavLink))`

    align-items:center;
    color:#F1FAEE;
    cursor:pointer;
    display:flex;
    font-size:3rem;
    justify-content: center;
    transition:.15s linear color;

    &:hover{
        color:#E63946;
    }

   @media only screen and (max-width:600px){

        @media (orientation:portrait){

            font-size:2rem;

        }

    }
`;

