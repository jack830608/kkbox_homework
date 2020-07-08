import React , {useState}from 'react';
import {Input, InputBorder } from './style';

export default (props) => {
    const [focus, setFocus] = useState(false)
    return (
        <InputBorder focus = {focus} style={props.style}>
            <Input
                placeholder={props.placeholder}
                onChange={(e) => props.onChange(e.target.value)}
                onFocus = {() => setFocus(true)}
                onBlur = {() => setFocus(false)}
                type = {props.type}
                value = {props.value}
            />
        </InputBorder>
    )
}