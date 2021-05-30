import React from 'react'
import { Layout } from '../components/layout'
import { Icon } from '@fluentui/react'
import { NextPage } from 'next'
import css from './index.module.scss'

const Home: NextPage = () => {
    return (
        <Layout title="Home">
            <div className={css.body}>
                <h1>Hello, World!</h1>
                <h1>
                    <Icon iconName="GiftboxOpen"></Icon>
                </h1>
            </div>
        </Layout>
    )
}

export default Home
