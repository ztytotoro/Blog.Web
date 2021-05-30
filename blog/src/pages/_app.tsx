import React from 'react'
import App from 'next/app'
import { initializeIcons } from '@fluentui/react'
import '../styles/global.scss'
import 'office-ui-fabric-core/dist/css/Fabric.css'

initializeIcons()

class BlogApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return <Component {...pageProps} />
    }
}

export default BlogApp
