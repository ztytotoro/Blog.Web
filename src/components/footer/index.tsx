import React from 'react'
import css from './index.scss'

export const Footer: React.FC = () => {
    return (
        <>
            <div className={css.footer}>
                <a
                    href="https://github.com/ztytotoro/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ztytotoro
                </a>{' '}
                © {new Date().getFullYear()} | Powered by{' '}
                <a
                    href="https://dotnet.microsoft.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    .Net Core
                </a>{' '}
                &{' '}
                <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React
                </a>{' '}
            </div>
            <div className={css.beian}>
                <a href="http://beian.miit.gov.cn">苏ICP备15055872号-1</a>
            </div>
        </>
    )
}
