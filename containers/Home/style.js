import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    height:100vh;
    box-sizing:border-box;
    padding:0 10vw;
    display:flex;
    justify-content:center;
    @media screen and (max-width: 768px) {
        justify-content: flex-start;
        flex-direction:column;
        padding:0;
    }
`