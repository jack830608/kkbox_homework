import React, { useState, useEffect } from 'react';
import { Container, ActionBox, Btn, InputBox, InputImg, Table, Th, Td } from './style';
import { useSelector } from 'react-redux'
import Input from '../../UI/Input'
import Tr from './Tr'

export default (props) => {
    const [search, setSearch] = useState('')
    const [member, setMember] = useState('')
    const [list, setList] = useState([])
    const origin_list = useSelector((state) => state.list)
    useEffect(() => {
        setList(origin_list)
    }, [origin_list])
    useEffect(() => {
        if (search) {
            setList(origin_list.filter((i) => {
                const re = new RegExp(search.toUpperCase());
                return re.test(i.name.toUpperCase()) || re.test(i.email.toUpperCase())
            }))
        } else {
            setList(origin_list)
        }
    }, [search])
    useEffect(() => {
        setMember(list.map((i, index) => {
            return (
                <Tr
                    id={i.id}
                    name={i.name}
                    email={i.email}
                />
            )
        }))
    }, [list])
    return (
        <Container>
            <ActionBox>
                <Btn>
                    <img src="/images/add.png" />
                    <div>Add</div>
                </Btn>
                <InputBox>
                    <Input
                        onChange={setSearch}
                        value={search}
                        placeholder={'請輸入Name、Email'}
                    />
                    <InputImg src="/images/search.png" />
                </InputBox>
            </ActionBox>
            <Table>
                <tr style={{ background: '#F1F1F1' }}>
                    <Th>ID</Th>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th />
                </tr>
                {member}
            </Table>
        </Container>
    )
}