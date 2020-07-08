import React from 'react';
import { Container, Img, Version,Tab } from './style';
import getConfig from "next/config";

export default (props) => {
    const { publicRuntimeConfig } = getConfig();
    return (
        <Container>
            <Img src="/images/logo.png" />
            <Tab>Member</Tab>
            <Version>v {publicRuntimeConfig.VERSION}</Version>
        </Container>
    )
}