import styled from 'styled-components';


export const InputBorder = styled.div`
    border:${props => props.focus ? '1px solid #03AED8' : '1px solid rgb(0,0,0,0.1)'};
    overflow:auto;
    width:100%;
`
export const Input = styled.input`
    border:none;
    background:#FFF;
    padding:1em 0.7em;
    font-size: 16px !important;
    transition:175ms ease-out;
    box-sizing:border-box;
    width:100%;
    color: rgba(0,0,0,0.5);
    :focus {
        outline: none;
    }
    ::placeholder{
        color: rgba(0,0,0,0.25);
    }
    ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    @media only screen and (min-width:768px) {
        padding:0.7em;
    }
`