import React, { useState, useEffect } from 'react';
import {
    Container, ActionBox, Btn, InputBox, InputImg, Table, ArrowBox,
    ThBox, ColumnHead, Id, Name, Email
} from './style';
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../UI/Input'
import Tr from './Tr'
import DownArrow from '../../UI/svg/DownArrow'
import UpArrow from '../../UI/svg/UpArrow'

export default (props) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('')
    const [member, setMember] = useState('')
    const [list, setList] = useState([])
    const [SortById, setSortById] = useState('up')
    const [SortByName, setSortByName] = useState('')
    const [SortByEmail, setSortByEmail] = useState('')
    const origin_list = useSelector((state) => state.list)
    const showModal = () => dispatch({ type: 'SET_SHOW_MODAL', payload: true })
    const handleSortById = () => {
        setSortByName('')
        setSortByEmail('')
        if (SortById === 'up') {
            setSortById('down')
        } else {
            setSortById('up')
        }
    }
    const handleSortByName = () => {
        setSortById('')
        setSortByEmail('')
        if (SortByName === 'up') {
            setSortByName('down')
        } else {
            setSortByName('up')
        }
    }
    const handleSortByEmail = () => {
        setSortByName('')
        setSortById('')
        if (SortByEmail === 'up') {
            setSortByEmail('down')
        } else {
            setSortByEmail('up')
        }
    }

    useEffect(() => {
        setSortById('up')
        setSortByName('')
        setSortByEmail('')
        setList(origin_list)
    }, [origin_list])

    useEffect(() => { // handle Sort
        const new_list = [...list];
        if (SortById === 'up') {
            new_list.sort((a, b) => a.id - b.id)
            setList(new_list)
        } else if (SortById === 'down') {
            new_list.sort((a, b) => b.id - a.id)
            setList(new_list)
        } else if (SortByName === 'up') {
            new_list.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) { return -1; }
                if (nameA > nameB) { return 1; }
                return 0;
            })
            setList(new_list)
        } else if (SortByName === 'down') {
            new_list.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) { return 1; }
                if (nameA > nameB) { return -1; }
                return 0;
            })
            setList(new_list)
        } else if (SortByEmail === 'up') {
            new_list.sort((a, b) => {
                const emailA = a.email.toUpperCase();
                const emailB = b.email.toUpperCase();
                if (emailA < emailB) { return -1; }
                if (emailA > emailB) { return 1; }
                return 0;
            })
            setList(new_list)
        } else if (SortByEmail === 'down') {
            new_list.sort((a, b) => {
                const emailA = a.email.toUpperCase();
                const emailB = b.email.toUpperCase();
                if (emailA < emailB) {
                    return 1;
                }
                if (emailA > emailB) {
                    return -1;
                }
                return 0;
            })
            setList(new_list)
        }
    }, [SortById, SortByName, SortByEmail])

    useEffect(() => { // handle Search
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
        setMember(list.map((i) => {
            return (
                <Tr
                    key={i.id}
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
                <Btn onClick={showModal}>
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
                <ColumnHead>
                    <Id>
                        <ThBox onClick={handleSortById}>
                            <ArrowBox>
                                <UpArrow color={SortById === 'up' ? '#03AED8' : 'rgba(0,0,0,0.1)'} />
                                <DownArrow color={SortById === 'down' ? '#03AED8' : 'rgba(0,0,0,0.1)'} />
                            </ArrowBox>
                            <div>ID</div>
                        </ThBox>
                    </Id>
                    <Name>
                        <ThBox onClick={handleSortByName}>
                            <ArrowBox>
                                <UpArrow color={SortByName === 'up' ? '#03AED8' : 'rgba(0,0,0,0.1)'} />
                                <DownArrow color={SortByName === 'down' ? '#03AED8' : 'rgba(0,0,0,0.1)'} />
                            </ArrowBox>
                            <div>Name</div>
                        </ThBox>
                    </Name>
                    <Email>
                        <ThBox onClick={handleSortByEmail}>
                            <ArrowBox>
                                <UpArrow color={SortByEmail === 'up' ? '#03AED8' : 'rgba(0,0,0,0.1)'} />
                                <DownArrow color={SortByEmail === 'down' ? '#03AED8' : 'rgba(0,0,0,0.1)'} />
                            </ArrowBox>
                            <div>Email</div>
                        </ThBox>
                    </Email>
                </ColumnHead>
                {member}
            </Table>
        </Container>
    )
}