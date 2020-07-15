import React from 'react';
import { Column, Id, Name, Email, Delete } from './style';
import { useDispatch, useSelector } from 'react-redux';

export default (props) => {
    const dispatch = useDispatch();
    const list = [...useSelector((state) => state.list)]
    const handleDel = () => {
        const payload = list.filter((i) => {
            return i.id !== props.id;
        })
        dispatch({ type: 'SET_LIST', payload })
    }
    return (
        <Column>
            <Id>
                {props.id}
            </Id>
            <Name>
                {props.name}
            </Name>
            <Email>
                {props.email}
            </Email>
            <Delete onClick={handleDel}>
                Delete
            </Delete>
        </Column>
    )
}