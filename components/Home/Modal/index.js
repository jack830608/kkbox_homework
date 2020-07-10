import React, { useState } from 'react';
import { Container, Content, Title, Alert, Btn, Box, BtnBox } from './style';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../UI/Input'

export default (props) => {
    const dispatch = useDispatch();
    const list = [...useSelector((state) => state.list)]
    const hideModal = () => dispatch({ type: 'SET_SHOW_MODAL', payload: false })
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [alert, setAlert] = useState('')
    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const handleCreate = () => {
        if (!name) {
            setAlert('*請輸入Name')
        } else if (!email) {
            setAlert('*請輸入Email')
        } else if (!validateEmail(email)) {
            setAlert('*請確認Email格式')
        } else {
            const biggestId = list.sort(function (a, b) { return a.id - b.id; })[list.length - 1].id
            list.push({ id: biggestId + 1, name, email })
            dispatch({ type: 'SET_LIST', payload: list })
            hideModal()
        }
    }
    return (
        <Container onClick={hideModal}>
            <Content onClick={(e) => e.stopPropagation()}>
                <Box>
                    <Title>Add</Title>
                    <Alert>{alert}</Alert>
                </Box>
                <Input
                    onChange={setName}
                    value={name}
                    placeholder={'Name'}
                    style={{ margin: '10px 0' }}
                />
                <Input
                    onChange={setEmail}
                    value={email}
                    placeholder={'Email'}
                    style={{ margin: '10px 0' }}
                />
                <BtnBox>
                    <Btn onClick={hideModal} style={{ background: '#EA5359' }}>Cancel</Btn>
                    <Btn onClick={handleCreate}>Create</Btn>
                </BtnBox>
            </Content>
        </Container>
    )
}