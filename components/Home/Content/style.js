import styled from 'styled-components';

export const Container = styled.div`
    width:75%;
    padding:50px 10px;
    box-sizing:border-box;
`
export const ActionBox = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:15px;
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
export const Table = styled.table`
    width:100%;
    border-collapse: collapse;

`
export const Th = styled.th`
    color: rgba(0, 0, 0, 0.5);
    font-size:14px;
    font-weight:500;
    padding:14px 10px;
    border-top:1px solid #efefef;
    border-bottom:1px solid #efefef;
    text-align: left;
`
export const ThBox = styled.div`
    display:flex;
    align-items:center;
    cursor:pointer;
`
export const Td = styled.td`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    text-align: left;
    padding:10px;
    border-bottom:1px solid #efefef;
    width:${props => props.width ? props.width : ''};
    text-overflow:ellipsis;
    overflow:hidden;
`
export const ArrowBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-right:10px;
`