import styled from 'styled-components';

export const Container = styled.div`
    width:78%;
    padding:50px 10px;
    box-sizing:border-box;
    @media screen and (max-width: 768px) {
        width:100%;
        padding:20px 0;
    }
`
export const ActionBox = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:15px;
    @media screen and (max-width: 768px) {
        justify-content:space-around;
    }
`
export const Btn = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10px 18px;
    background:#03AED8;
    margin-right:15px;
    cursor:pointer;
    >img{
        height:15px;
        width:15px;
    }
    >div{
        color:#FFF;
        font-size:14px;
        font-weight:500;
        margin-left:10px;
    }
`
export const InputBox = styled.div`
    width:230px;
    position:relative;
`
export const InputImg = styled.img`
    height:17px;
    width:17px;
    position:absolute;
    right:11px;
    top:12px;
    
`
export const Table = styled.div`
    width:100%;
    color:rgba(0,0,0,0.5);
    @media screen and (max-width: 768px) {
        width:95%;
        margin:0 auto;
    }
`
export const ThBox = styled.div`
    display:flex;
    align-items:center;
    cursor:pointer;
`
export const ArrowBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-right:10px;
`
export const Id = styled.div`
    width:15%;
    padding:10px 5px;
    text-overflow:ellipsis;
    overflow:hidden;
    box-sizing:border-box;
`
export const Name = styled.div`
    width:30%;
    padding:10px 5px;
    text-overflow:ellipsis;
    overflow:hidden;
    box-sizing:border-box;
`
export const Email = styled.div`
    width:40%;
    padding:10px 5px;
    text-overflow:ellipsis;
    overflow:hidden;
    box-sizing:border-box;
`
export const Delete = styled.div`
    color: #EA5359;
    cursor: pointer;
    margin-left: auto;
`
export const ColumnHead = styled.div`
    display:flex;
    align-items:center;
    cursor:default;
    font-size:16px;
    background:#F1F1F1;
    padding:0 20px;
    @media screen and (max-width: 768px) {
        font-size:14px;
        padding:0 10px;
    }
`
export const Column = styled.div`
    display:flex;
    align-items:center;
    cursor:default;
    font-size:14px;
    padding:5px 20px;
    border-bottom:1px solid rgba(0,0,0,0.1);
    :hover{
        background:rgba(0,0,0,0.03);
    }
    @media screen and (max-width: 768px) {
        font-size:12px;
        padding:0 10px;
    }
`