import styled, { keyframes } from 'styled-components';

const ease = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;
export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-start;
    position:fixed;
    top:0;
    left:0;
    background:rgba(0,0,0,0.5);
    width:100vw;
    height:100vh;
    animation: ${ease} 0.3s linear;
`
export const Content = styled.div`
    width:400px;
    padding:20px;
    box-sizing:border-box; 
    background:#FFF;
    margin-top:20vh;
    @media screen and (max-width: 768px) {
        width:90vw;
        padding:15px 10px;
    }
`
export const Title = styled.div`
    font-size:16px;
    color:rgba(0,0,0,0.5);
`
export const Alert = styled.div`
    font-size:12px;
    color:#EA5359;
    text-align:right;
`
export const Btn = styled.div`
    display:inline-block;
    cursor:pointer;
    background:rgba(0,0,0,0.1);
    color:#FFF;
    padding:10px 20px;
    font-size:16px;
    width: fit-content;
    margin-left: 10px;
    transition:0.1s linear;
    background:#03AED8;
`
export const Box = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
`
export const BtnBox = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    margin-top: 20px;
`