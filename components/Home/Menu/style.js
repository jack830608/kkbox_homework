import styled from 'styled-components';

export const Container = styled.div`
    position:relative;
    height:100%;
    width:25%;
    background:#F4F4F4;
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const Img = styled.img`
    width:60%;
    height:auto;
    margin:70px auto 50px auto;
`
export const Version = styled.div`
    color:#03AED8;
    position:absolute;
    bottom:30px;
`
export const Tab = styled.div`
    background:#03AED8;
    color:#FFF;
    width:100%;
    padding:10px;
    box-sizing:border-box;
    letter-spacing:2px;
    font-weight:500;
    cursor:pointer;
`