import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Menu from '../../components/Home/Menu'
import Content from '../../components/Home/Content'
import { useDispatch } from 'react-redux';
import { Container } from './style'

export default (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                dispatch({ type: 'SET_LIST', payload: res.data })
            })
    }, [])
    return (
        <Container>
            <Menu />
            <Content />
        </Container>
    )
}