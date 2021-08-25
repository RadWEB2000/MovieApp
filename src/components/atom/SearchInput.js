import {motion} from 'framer-motion'
import styled from 'styled-components';


export const SearchInput = styled(motion.input)`

    background:none;
    border:none;
    color:var(--white);
    font-size:2rem;
    font-weight: 600;
    height:3rem;
    outline:none;
    text-align:center;
    transition:.2s linear color;
    width:35rem;
    max-width:70vw;

    &:focus{
        
        color:var(--red);

    }

    &:focus + * {

        background:var(--red);

    }


    
    @media only screen and (max-width:600px){

        @media (orientation:portrait){

            font-size:1.4rem;

            &::placeholder{

                font-size:1.2rem;

            }

        }

    }

`