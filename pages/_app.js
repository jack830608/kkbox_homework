import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";

const initState = {
    test: () => {
        console.log('test')
    },
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'TEST':
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }
};


const makeStore = () => {
    return createStore(reducer, initState);
};

class MyApp extends App {

    render() {
        const { Component, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component />
                </Provider>
            </Container>
        );
    }
}

export default withRedux(makeStore)(MyApp);