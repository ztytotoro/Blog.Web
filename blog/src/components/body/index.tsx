import React from 'react'
import css from './index.module.scss'

export const Body: React.FC = ({ children }) => {
    return <div className={css.body}>{children}</div>
}
