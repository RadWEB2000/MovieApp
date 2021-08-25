import {motion} from 'framer-motion';
import styled from 'styled-components';

export const SearchSpan = styled(motion.span)`
    background:var(--white);
    bottom:0;
    height:.15rem;
    position:absolute;
    transition:.2s linear background;
    width:100%;
`