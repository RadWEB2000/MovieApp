import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const MenuItem = styled(motion(NavLink))`

    align-items:center;
    color:var(--white);
    cursor:pointer;
    display:flex;
    font-size:3rem;
    justify-content: center;
    transition:.15s linear color;

    &:hover{
        color:var(--red);
    }

   @media only screen and (max-width:600px){

        @media (orientation:portrait){

            font-size:2rem;

        }

    }
`;

