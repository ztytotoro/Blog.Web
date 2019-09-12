import React from 'react'
import App from 'next/app'
import { initializeIcons } from '@uifabric/icons'

initializeIcons(undefined, {
    disableWarnings: true,
})

class BlogApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return <Component {...pageProps} />
    }
}

export default BlogApp
