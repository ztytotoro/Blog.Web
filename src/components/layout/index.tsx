import React from 'react'
import css from './index.scss'

import { Header } from '../header'
import { Footer } from '../footer'
import Head from 'next/head'
import { Body } from '../body'

interface Props {
    title: string
}

export const Layout: React.FC<Props> = ({ children, title }) => {
    return (
        <div className={css.layout}>
            <Head>
                <title>{'CatLien - ' + title}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link
                    rel="icon"
                    type="image/x-icon"
                    href="../static/favicon.ico"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Chilanka|Livvic|Manjari|Montserrat|Open+Sans|Raleway|Source+Sans+Pro&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <Header />
            <Body>{children}</Body>
            <Footer />
        </div>
    )
}
