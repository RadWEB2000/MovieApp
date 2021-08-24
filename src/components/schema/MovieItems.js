import styled from 'styled-components';
 
export const MovieItems = styled.div`
    align-items:center;
    padding:3rem;
    height:30rem;
    margin:2rem 0;
    display:flex;
    overflow-x:scroll;
    overflow-y:hidden;
    width:100vw;

    &::-webkit-scrollbar{
        height:0;
    }


`