import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()
        return {
            ...page,
            styleTags,
        }
    }
    render() {
        const {
            styleTags,
        } = this.props;
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0" />
                    <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>
                    <link rel="icon" type="image/png" href="/images/favicon.png"></link>
                    <title>KKBOX</title>
                </Head>
                <body style={{ margin: 0, fontFamily: "'Noto Sans TC','Hind Siliguri', sans-serif" }}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}